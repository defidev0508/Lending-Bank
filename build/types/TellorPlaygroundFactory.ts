/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TellorPlayground } from "./TellorPlayground";

export class TellorPlaygroundFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<TellorPlayground> {
    return super.deploy(
      name,
      symbol,
      overrides || {}
    ) as Promise<TellorPlayground>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): TellorPlayground {
    return super.attach(address) as TellorPlayground;
  }
  connect(signer: Signer): TellorPlaygroundFactory {
    return super.connect(signer) as TellorPlaygroundFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TellorPlayground {
    return new Contract(address, _abi, signerOrProvider) as TellorPlayground;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
    ],
    name: "NewBytesValue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_time",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "NewValue",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tip",
        type: "uint256",
      },
    ],
    name: "TipAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "addTip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bytesValues",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "disputeBytesValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "disputeValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "faucet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getNewValueCountbyRequestId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getTimestampbyRequestIDandIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "isDisputed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "isInDispute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "retrieveBytesData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "retrieveData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes",
      },
    ],
    name: "submitBytesValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "submitValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "timestamps",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "values",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026c1380380620026c18339818101604052810190620000379190620001bb565b81600890805190602001906200004f9291906200008d565b508060099080519060200190620000689291906200008d565b506012600a60006101000a81548160ff021916908360ff1602179055505050620003c4565b8280546200009b90620002d5565b90600052602060002090601f016020900481019282620000bf57600085556200010b565b82601f10620000da57805160ff19168380011785556200010b565b828001600101855582156200010b579182015b828111156200010a578251825591602001919060010190620000ed565b5b5090506200011a91906200011e565b5090565b5b80821115620001395760008160009055506001016200011f565b5090565b6000620001546200014e8462000269565b62000240565b905082815260208101848484011115620001735762000172620003a4565b5b620001808482856200029f565b509392505050565b600082601f830112620001a0576200019f6200039f565b5b8151620001b28482602086016200013d565b91505092915050565b60008060408385031215620001d557620001d4620003ae565b5b600083015167ffffffffffffffff811115620001f657620001f5620003a9565b5b620002048582860162000188565b925050602083015167ffffffffffffffff811115620002285762000227620003a9565b5b620002368582860162000188565b9150509250929050565b60006200024c6200025f565b90506200025a82826200030b565b919050565b6000604051905090565b600067ffffffffffffffff82111562000287576200028662000370565b5b6200029282620003b3565b9050602081019050919050565b60005b83811015620002bf578082015181840152602081019050620002a2565b83811115620002cf576000848401525b50505050565b60006002820490506001821680620002ee57607f821691505b6020821081141562000305576200030462000341565b5b50919050565b6200031682620003b3565b810181811067ffffffffffffffff8211171562000338576200033762000370565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b6122ed80620003d46000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c8063752d49a1116100f9578063acebfc5411610097578063b86d1d6311610071578063b86d1d6314610566578063dd62ed3e14610582578063df2322b4146105b2578063fb0ceb04146105ce576101a9565b8063acebfc54146104ea578063b041d69614610506578063b0ea38e014610536576101a9565b806395d89b41116100d357806395d89b411461043c578063a31837011461045a578063a457c2d71461048a578063a9059cbb146104ba576101a9565b8063752d49a1146103c057806377fbb663146103dc57806393fa49151461040c576101a9565b806327e235e3116101665780633df0777b116101405780633df0777b1461031457806346eee1c41461034457806362f551121461037457806370a0823114610390576101a9565b806327e235e314610296578063313ce567146102c657806339509351146102e4576101a9565b806306fdde03146101ae578063083710a6146101cc578063095ea7b3146101e857806318160ddd1461021857806321a045b21461023657806323b872dd14610266575b600080fd5b6101b66105fe565b6040516101c39190611c08565b60405180910390f35b6101e660048036038101906101e19190611a1a565b610690565b005b61020260048036038101906101fd9190611951565b610719565b60405161020f9190611bcb565b60405180910390f35b610220610730565b60405161022d9190611cea565b60405180910390f35b610250600480360381019061024b9190611a1a565b61073a565b60405161025d9190611be6565b60405180910390f35b610280600480360381019061027b91906118fe565b6107f1565b60405161028d9190611bcb565b60405180910390f35b6102b060048036038101906102ab9190611891565b6108bc565b6040516102bd9190611cea565b60405180910390f35b6102ce6108d4565b6040516102db9190611d7a565b60405180910390f35b6102fe60048036038101906102f99190611951565b6108eb565b60405161030b9190611bcb565b60405180910390f35b61032e60048036038101906103299190611a1a565b610990565b60405161033b9190611bcb565b60405180910390f35b61035e60048036038101906103599190611991565b6109cc565b60405161036b9190611cea565b60405180910390f35b61038e60048036038101906103899190611a1a565b6109ec565b005b6103aa60048036038101906103a59190611891565b610a8d565b6040516103b79190611cea565b60405180910390f35b6103da60048036038101906103d59190611a1a565b610ad6565b005b6103f660048036038101906103f19190611a1a565b610b34565b6040516104039190611cea565b60405180910390f35b61042660048036038101906104219190611a1a565b610ba8565b6040516104339190611cea565b60405180910390f35b610444610bd6565b6040516104519190611c08565b60405180910390f35b610474600480360381019061046f9190611a1a565b610c68565b6040516104819190611cea565b60405180910390f35b6104a4600480360381019061049f9190611951565b610c8d565b6040516104b19190611bcb565b60405180910390f35b6104d460048036038101906104cf9190611951565b610d4c565b6040516104e19190611bcb565b60405180910390f35b61050460048036038101906104ff9190611a1a565b610d63565b005b610520600480360381019061051b9190611a1a565b610dcd565b60405161052d9190611bcb565b60405180910390f35b610550600480360381019061054b9190611a1a565b610dfc565b60405161055d9190611be6565b60405180910390f35b610580600480360381019061057b9190611891565b610ea9565b005b61059c600480360381019061059791906118be565b610ebf565b6040516105a99190611cea565b60405180910390f35b6105cc60048036038101906105c791906119be565b610f46565b005b6105e860048036038101906105e39190611a1a565b610ff8565b6040516105f59190611cea565b60405180910390f35b60606008805461060d90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461063990611f44565b80156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b5050505050905090565b6040518060200160405280600081525060016000848152602001908152602001600020600083815260200190815260200160002090805190602001906106d79291906116ce565b50600160026000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000610726338484611029565b6001905092915050565b6000600754905090565b6060600160008481526020019081526020016000206000838152602001908152602001600020805461076b90611f44565b80601f016020809104026020016040519081016040528092919081815260200182805461079790611f44565b80156107e45780601f106107b9576101008083540402835291602001916107e4565b820191906000526020600020905b8154815290600101906020018083116107c757829003601f168201915b5050505050905092915050565b60006107fe8484846111f4565b6108b184336108ac8560405180606001604052806028815260200161226b60289139600660008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114829092919063ffffffff16565b611029565b600190509392505050565b60046020528060005260406000206000915090505481565b6000600a60009054906101000a900460ff16905090565b6000610986338461098185600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114e690919063ffffffff16565b611029565b6001905092915050565b600060026000848152602001908152602001600020600083815260200190815260200160002060009054906101000a900460ff16905092915050565b600060036000838152602001908152602001600020805490509050919050565b80600080848152602001908152602001600020600042815260200190815260200160002081905550600360008381526020019081526020016000204290806001815401808255809150506001900390600052602060002001600090919091909150557fba11e319aee26e7bbac889432515ba301ec8f6d27bf6b94829c21a65c5f6ff25824283604051610a8193929190611d43565b60405180910390a15050565b6000600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ae13330836111f4565b813373ffffffffffffffffffffffffffffffffffffffff167f9e771e1220a6c2e407f3601f70a769ca9fff75a110d1687e0b582824673a1f5c83604051610b289190611cea565b60405180910390a35050565b600080600360008581526020019081526020016000208054905090506000811480610b5f5750828111155b15610b6e576000915050610ba2565b600360008581526020019081526020016000208381548110610b9357610b92612005565b5b90600052602060002001549150505b92915050565b6000806000848152602001908152602001600020600083815260200190815260200160002054905092915050565b606060098054610be590611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610c1190611f44565b8015610c5e5780601f10610c3357610100808354040283529160200191610c5e565b820191906000526020600020905b815481529060010190602001808311610c4157829003601f168201915b5050505050905090565b6000602052816000526040600020602052806000526040600020600091509150505481565b6000610d423384610d3d8560405180606001604052806025815260200161229360259139600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114829092919063ffffffff16565b611029565b6001905092915050565b6000610d593384846111f4565b6001905092915050565b6000806000848152602001908152602001600020600083815260200190815260200160002081905550600160026000848152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60026020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6001602052816000526040600020602052806000526040600020600091509150508054610e2890611f44565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5490611f44565b8015610ea15780601f10610e7657610100808354040283529160200191610ea1565b820191906000526020600020905b815481529060010190602001808311610e8457829003601f168201915b505050505081565b610ebc81683635c9adc5dea00000611544565b50565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b806001600084815260200190815260200160002060004281526020019081526020016000209080519060200190610f7e929190611754565b50600360008381526020019081526020016000204290806001815401808255809150506001900390600052602060002001600090919091909150557f98a81ced8c27ffa7bd859dc5b5692978efd27ed7ed8d815a3ea284a33b4b582b824283604051610fec93929190611d05565b60405180910390a15050565b6003602052816000526040600020818154811061101457600080fd5b90600052602060002001600091509150505481565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611099576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109090611caa565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611109576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110090611c4a565b60405180910390fd5b80600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516111e79190611cea565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125b90611c8a565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156112d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112cb90611c2a565b60405180910390fd5b6113408160405180606001604052806026815260200161224560269139600560008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114829092919063ffffffff16565b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113d581600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114e690919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114759190611cea565b60405180910390a3505050565b60008383111582906114ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114c19190611c08565b60405180910390fd5b50600083856114d99190611e79565b9050809150509392505050565b60008082846114f59190611e23565b90508381101561153a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153190611c6a565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156115b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ab90611cca565b60405180910390fd5b6115c9816007546114e690919063ffffffff16565b60078190555061162181600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546114e690919063ffffffff16565b600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516116c29190611cea565b60405180910390a35050565b8280546116da90611f44565b90600052602060002090601f0160209004810192826116fc5760008555611743565b82601f1061171557805160ff1916838001178555611743565b82800160010185558215611743579182015b82811115611742578251825591602001919060010190611727565b5b50905061175091906117da565b5090565b82805461176090611f44565b90600052602060002090601f01602090048101928261178257600085556117c9565b82601f1061179b57805160ff19168380011785556117c9565b828001600101855582156117c9579182015b828111156117c85782518255916020019190600101906117ad565b5b5090506117d691906117da565b5090565b5b808211156117f35760008160009055506001016117db565b5090565b600061180a61180584611dba565b611d95565b90508281526020810184848401111561182657611825612068565b5b611831848285611f02565b509392505050565b60008135905061184881612216565b92915050565b600082601f83011261186357611862612063565b5b81356118738482602086016117f7565b91505092915050565b60008135905061188b8161222d565b92915050565b6000602082840312156118a7576118a6612072565b5b60006118b584828501611839565b91505092915050565b600080604083850312156118d5576118d4612072565b5b60006118e385828601611839565b92505060206118f485828601611839565b9150509250929050565b60008060006060848603121561191757611916612072565b5b600061192586828701611839565b935050602061193686828701611839565b92505060406119478682870161187c565b9150509250925092565b6000806040838503121561196857611967612072565b5b600061197685828601611839565b92505060206119878582860161187c565b9150509250929050565b6000602082840312156119a7576119a6612072565b5b60006119b58482850161187c565b91505092915050565b600080604083850312156119d5576119d4612072565b5b60006119e38582860161187c565b925050602083013567ffffffffffffffff811115611a0457611a0361206d565b5b611a108582860161184e565b9150509250929050565b60008060408385031215611a3157611a30612072565b5b6000611a3f8582860161187c565b9250506020611a508582860161187c565b9150509250929050565b611a6381611ebf565b82525050565b6000611a7482611deb565b611a7e8185611e01565b9350611a8e818560208601611f11565b611a9781612077565b840191505092915050565b6000611aad82611df6565b611ab78185611e12565b9350611ac7818560208601611f11565b611ad081612077565b840191505092915050565b6000611ae8602383611e12565b9150611af382612088565b604082019050919050565b6000611b0b602283611e12565b9150611b16826120d7565b604082019050919050565b6000611b2e601b83611e12565b9150611b3982612126565b602082019050919050565b6000611b51602583611e12565b9150611b5c8261214f565b604082019050919050565b6000611b74602483611e12565b9150611b7f8261219e565b604082019050919050565b6000611b97601f83611e12565b9150611ba2826121ed565b602082019050919050565b611bb681611eeb565b82525050565b611bc581611ef5565b82525050565b6000602082019050611be06000830184611a5a565b92915050565b60006020820190508181036000830152611c008184611a69565b905092915050565b60006020820190508181036000830152611c228184611aa2565b905092915050565b60006020820190508181036000830152611c4381611adb565b9050919050565b60006020820190508181036000830152611c6381611afe565b9050919050565b60006020820190508181036000830152611c8381611b21565b9050919050565b60006020820190508181036000830152611ca381611b44565b9050919050565b60006020820190508181036000830152611cc381611b67565b9050919050565b60006020820190508181036000830152611ce381611b8a565b9050919050565b6000602082019050611cff6000830184611bad565b92915050565b6000606082019050611d1a6000830186611bad565b611d276020830185611bad565b8181036040830152611d398184611a69565b9050949350505050565b6000606082019050611d586000830186611bad565b611d656020830185611bad565b611d726040830184611bad565b949350505050565b6000602082019050611d8f6000830184611bbc565b92915050565b6000611d9f611db0565b9050611dab8282611f76565b919050565b6000604051905090565b600067ffffffffffffffff821115611dd557611dd4612034565b5b611dde82612077565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000611e2e82611eeb565b9150611e3983611eeb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e6e57611e6d611fa7565b5b828201905092915050565b6000611e8482611eeb565b9150611e8f83611eeb565b925082821015611ea257611ea1611fa7565b5b828203905092915050565b6000611eb882611ecb565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611f2f578082015181840152602081019050611f14565b83811115611f3e576000848401525b50505050565b60006002820490506001821680611f5c57607f821691505b60208210811415611f7057611f6f611fd6565b5b50919050565b611f7f82612077565b810181811067ffffffffffffffff82111715611f9e57611f9d612034565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61221f81611ead565b811461222a57600080fd5b50565b61223681611eeb565b811461224157600080fd5b5056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206c672a7ca8dbc7b8a310633f93519714536444fa85d72990b58e17b1deb8f5ae64736f6c63430008060033";
