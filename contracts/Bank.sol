pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";
import '../node_modules/usingtellor/contracts/UsingTellor.sol';


contract Bank is Ownable, UsingTellor {

  // TODO: Refactor into struct
  address _collateralToken;
  uint256 _collateralTokenPrice;
  uint256 _collateralTokenPriceGranularity;
  uint256 _collateralTokenTellorRequestId;
  uint256 _collateralReserveBalance;

  address _debtToken;
  uint256 _debtTokenPrice;
  uint256 _debtTokenPriceGranularity;
  uint256 _debtTokenTellorRequestId;
  uint256 _debtReserveBalance;

  uint256 _interestRate;
  uint256 _originationFee;
  uint256 _collateralizationRatio;
  uint256 _liquidationPenalty;

  address _oracleContract;

  uint256 _period = 86400; // One day

  struct Vault {
    uint256 collateralAmount;
    uint256 debtAmount;
    uint256 createdAt;
  }

  mapping (address => Vault) public vaults;

  event ReserveDeposit(uint256 amount);
  event ReserveWithdraw(address token, uint256 amount);
  event VaultDeposit(address owner, uint256 amount);
  event VaultBorrow(address borrower, uint256 amount);
  event VaultRepay(address borrower, uint256 amount);
  event VaultWithdraw(address borrower);

  constructor(
    uint256 interestRate,
    uint256 originationFee,
    uint256 collateralizationRatio,
    uint256 liquidationPenalty,
    address collateralToken,
    uint256 collateralTokenTellorRequestId,
    uint256 collateralTokenPriceGranularity,
    uint256 collateralTokenPrice,
    address debtToken,
    uint256 debtTokenTellorRequestId,
    uint256 debtTokenPriceGranularity,
    uint256 debtTokenPrice,
    address oracleContract ) public UsingTellor(oracleContract) {

    _interestRate = interestRate;
    _originationFee = originationFee;
    _collateralizationRatio = collateralizationRatio;
    _liquidationPenalty = liquidationPenalty;
    _collateralToken = collateralToken;
    _debtToken = debtToken;
    _oracleContract = oracleContract;


    _debtTokenPrice = debtTokenPrice;
    _debtTokenPriceGranularity = debtTokenPriceGranularity;
    _debtTokenTellorRequestId = debtTokenTellorRequestId;
    _collateralTokenPrice = collateralTokenPrice;
    _collateralTokenPriceGranularity = collateralTokenPriceGranularity;
    _collateralTokenTellorRequestId = collateralTokenTellorRequestId;

  }

  /////////////////////
  // SYSTEM PROPERTIES
  /////////////////////

  function getInterestRate() public view returns (uint256) {
    return _interestRate;
  }


  function getOriginationFee() public view returns (uint256) {
    return _originationFee;
  }

  function getCollateralizationRatio() public view returns (uint256) {
    return _collateralizationRatio;
  }

  function getLiquidationPenalty() public view returns (uint256) {
    return _liquidationPenalty;
  }

  function getDebtTokenPrice() public view returns (uint256) {
    return _debtTokenPrice;
  }

  function getDebtTokenPriceGranularity() public view returns (uint256) {
    return _debtTokenPriceGranularity;
  }

  function getCollateralTokenPrice() public view returns (uint256) {
    return _collateralTokenPrice;
  }

  function getCollateralTokenPriceGranularity() public view returns (uint256) {
    return _collateralTokenPriceGranularity;
  }


  /////////////////////
  // RESERVE MANAGEMENT
  /////////////////////

  function getReserveBalance() public view returns (uint256) {
    return _debtReserveBalance;
  }

  function getReserveCollateralBalance() public view returns (uint256) {
    return _collateralReserveBalance;
  }

  function reserveDeposit(uint256 amount) public onlyOwner {
    // NOTE: Assumes amount has been approved
    IERC20(_debtToken).transferFrom(msg.sender, address(this), amount);
    _debtReserveBalance += amount;
    emit ReserveDeposit(amount);
  }

  function reserveWithdraw(uint256 amount) public onlyOwner {
    require(_debtReserveBalance >= amount, "NOT ENOUGH DEBT TOKENS IN RESERVE");
    require(IERC20(_debtToken).transfer(msg.sender, amount));
    _debtReserveBalance -= amount;
    emit ReserveWithdraw(_debtToken, amount);
  }

  function reserveWithdrawCollateral(uint256 amount) public onlyOwner {
    require(_collateralReserveBalance >= amount, "NOT ENOUGH COLLATERAL IN RESERVE");
    require(IERC20(_collateralToken).transfer(msg.sender, amount));
    _collateralReserveBalance -= amount;
    emit ReserveWithdraw(_collateralToken, amount);
  }

  function updatePrice() public onlyOwner {
    bool ifRetrieve;
    uint256 _timestampRetrieved;

    (ifRetrieve, _debtTokenPrice, _timestampRetrieved) = getCurrentValue(_debtTokenTellorRequestId);
    (ifRetrieve, _collateralTokenPrice, _timestampRetrieved) = getCurrentValue(_collateralTokenTellorRequestId);
  }

  function liquidate(address vaultOwner) public onlyOwner {
    // Require undercollateralization
    require(_getVaultCollateralizationRatio(vaultOwner) < _collateralizationRatio * 100, "VAULT NOT UNDERCOLLATERALIZED");
    // TODO: Confirm this is calculated correctly
    uint256 debtOwned = vaults[vaultOwner].debtAmount + (vaults[vaultOwner].debtAmount * 100 * _liquidationPenalty / 100 / 100);
    uint256 collateralToLiquidate = debtOwned * _debtTokenPrice / _collateralTokenPrice;
    _collateralReserveBalance +=  collateralToLiquidate;
    vaults[vaultOwner].collateralAmount -= collateralToLiquidate;
    vaults[vaultOwner].debtAmount = 0;
  }


  /////////////////////
  // VAULT MANAGEMENT
  /////////////////////

  function getVaultCollateralAmount() public view returns (uint256) {
    return vaults[msg.sender].collateralAmount;
  }

  function getVaultDebtAmount() public view returns (uint256) {
    return vaults[msg.sender].debtAmount;
  }

  function vaultDeposit(uint256 amount) public {
    // NOTE: Assumes amount has been approved
    require(vaults[msg.sender].collateralAmount == 0, "ALREADY DEPOSITED COLLATERAL");
    // TODO: require
    IERC20(_collateralToken).transferFrom(msg.sender, address(this), amount);
    vaults[msg.sender].collateralAmount += amount;
    emit VaultDeposit(msg.sender, amount);

  }

  function vaultBorrow(uint256 amount) public {
    require(vaults[msg.sender].debtAmount == 0, "ALREADY BORROWING");
    require(vaults[msg.sender].collateralAmount != 0, "NO COLLATERAL");
    uint256 maxBorrow = vaults[msg.sender].collateralAmount * _collateralTokenPrice / _debtTokenPrice / _collateralizationRatio * 100;
    maxBorrow *= _debtTokenPriceGranularity;
    maxBorrow /= _collateralTokenPriceGranularity;
    require(amount < maxBorrow, "NOT ENOUGH COLLATERAL");
    require(amount <= _debtReserveBalance, "NOT ENOUGH RESERVES");
    vaults[msg.sender].debtAmount += amount + ((amount * _originationFee) / 100);
    _debtReserveBalance -= amount;
    // TODO: require
    require(IERC20(_debtToken).transfer(msg.sender, amount));
    vaults[msg.sender].createdAt = block.timestamp;
    emit VaultBorrow(msg.sender, amount);
  }

  function vaultRepay(uint256 amount) public {
    // Update debtAmount
    vaults[msg.sender].debtAmount = getVaultRepayAmount();
    // Subtract amount from debtAmount
    require(amount <= vaults[msg.sender].debtAmount, "CANNOT REPAY MORE THAN OWED");
    // TODO: require
    IERC20(_debtToken).transferFrom(msg.sender, address(this), amount);
    vaults[msg.sender].debtAmount -= amount;
    _debtReserveBalance += amount;
    // Update createdAt time to account for adjustment in principal
    uint256 periodsElapsed = (block.timestamp / _period) - (vaults[msg.sender].createdAt / _period);
    vaults[msg.sender].createdAt += periodsElapsed * _period;
    emit VaultRepay(msg.sender, amount);
  }

  function vaultWithdraw() public {
    require(vaults[msg.sender].debtAmount == 0, "DEBT OWED");
    require(IERC20(_collateralToken).transfer(msg.sender, vaults[msg.sender].collateralAmount));
    vaults[msg.sender].collateralAmount = 0;
    emit VaultWithdraw(msg.sender);
  }

  function getVaultRepayAmount() public view returns (uint256) {
    uint256 currentPeriod = block.timestamp / _period;
    uint256 principal = vaults[msg.sender].debtAmount;
    for (uint256 i = vaults[msg.sender].createdAt / _period; i < currentPeriod; i++)
      principal += principal * _interestRate / 100 / 365;
    return principal;
  }

  function getVaultCollateralizationRatio() public view returns (uint256) {
    return _getVaultCollateralizationRatio(msg.sender);
  }

  function _getVaultCollateralizationRatio(address vaultOwner) private view returns (uint256) {
    if(vaults[vaultOwner].debtAmount == 0 ){
      return 0;
    } else {
      return _percent(vaults[vaultOwner].collateralAmount * _collateralTokenPrice * 1000 / _collateralTokenPriceGranularity,
                      vaults[vaultOwner].debtAmount * _debtTokenPrice * 1000 / _debtTokenPriceGranularity,
                      4);
    }
  }

  function _percent(uint numerator, uint denominator, uint precision) private pure returns(uint quotient) {
        uint _numerator  = numerator * 10 ** (precision+1);
        uint _quotient =  ((_numerator / denominator) + 5) / 10;
        return ( _quotient);
  }



}
