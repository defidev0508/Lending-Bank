/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UsdToken } from "./UsdToken";

export class UsdTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): Promise<UsdToken> {
    return super.deploy(initialSupply, overrides || {}) as Promise<UsdToken>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  attach(address: string): UsdToken {
    return super.attach(address) as UsdToken;
  }
  connect(signer: Signer): UsdTokenFactory {
    return super.connect(signer) as UsdTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UsdToken {
    return new Contract(address, _abi, signerOrProvider) as UsdToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620018f1380380620018f183398181016040528101906200003791906200033a565b6040518060400160405280600981526020017f55534420546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f55534454000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb92919062000273565b508060049080519060200190620000d492919062000273565b505050620000e93382620000f060201b60201c565b5062000537565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015a90620003a4565b60405180910390fd5b62000177600083836200026960201b60201c565b80600260008282546200018b9190620003f4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620001e29190620003f4565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002499190620003c6565b60405180910390a362000265600083836200026e60201b60201c565b5050565b505050565b505050565b82805462000281906200045b565b90600052602060002090601f016020900481019282620002a55760008555620002f1565b82601f10620002c057805160ff1916838001178555620002f1565b82800160010185558215620002f1579182015b82811115620002f0578251825591602001919060010190620002d3565b5b50905062000300919062000304565b5090565b5b808211156200031f57600081600090555060010162000305565b5090565b60008151905062000334816200051d565b92915050565b600060208284031215620003535762000352620004ef565b5b6000620003638482850162000323565b91505092915050565b60006200037b601f83620003e3565b91506200038882620004f4565b602082019050919050565b6200039e8162000451565b82525050565b60006020820190508181036000830152620003bf816200036c565b9050919050565b6000602082019050620003dd600083018462000393565b92915050565b600082825260208201905092915050565b6000620004018262000451565b91506200040e8362000451565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000446576200044562000491565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200047457607f821691505b602082108114156200048b576200048a620004c0565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620005288162000451565b81146200053457600080fd5b50565b6113aa80620005476000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610e45565b60405180910390f35b6100e660048036038101906100e19190610c8f565b610308565b6040516100f39190610e2a565b60405180910390f35b610104610326565b6040516101119190610f47565b60405180910390f35b610134600480360381019061012f9190610c3c565b610330565b6040516101419190610e2a565b60405180910390f35b610152610428565b60405161015f9190610f62565b60405180910390f35b610182600480360381019061017d9190610c8f565b610431565b60405161018f9190610e2a565b60405180910390f35b6101b260048036038101906101ad9190610bcf565b6104dd565b6040516101bf9190610f47565b60405180910390f35b6101d0610525565b6040516101dd9190610e45565b60405180910390f35b61020060048036038101906101fb9190610c8f565b6105b7565b60405161020d9190610e2a565b60405180910390f35b610230600480360381019061022b9190610c8f565b6106a2565b60405161023d9190610e2a565b60405180910390f35b610260600480360381019061025b9190610bfc565b6106c0565b60405161026d9190610f47565b60405180910390f35b60606003805461028590611077565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190611077565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b600061031c610315610747565b848461074f565b6001905092915050565b6000600254905090565b600061033d84848461091a565b6000600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610388610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610408576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ff90610ec7565b60405180910390fd5b61041c85610414610747565b85840361074f565b60019150509392505050565b60006012905090565b60006104d361043e610747565b84846001600061044c610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104ce9190610f99565b61074f565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461053490611077565b80601f016020809104026020016040519081016040528092919081815260200182805461056090611077565b80156105ad5780601f10610582576101008083540402835291602001916105ad565b820191906000526020600020905b81548152906001019060200180831161059057829003601f168201915b5050505050905090565b600080600160006105c6610747565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a90610f27565b60405180910390fd5b61069761068e610747565b8585840361074f565b600191505092915050565b60006106b66106af610747565b848461091a565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b690610f07565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082690610e87565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161090d9190610f47565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561098a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161098190610ee7565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109f190610e67565b60405180910390fd5b610a05838383610b9b565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610a8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a8290610ea7565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b1e9190610f99565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b829190610f47565b60405180910390a3610b95848484610ba0565b50505050565b505050565b505050565b600081359050610bb481611346565b92915050565b600081359050610bc98161135d565b92915050565b600060208284031215610be557610be4611107565b5b6000610bf384828501610ba5565b91505092915050565b60008060408385031215610c1357610c12611107565b5b6000610c2185828601610ba5565b9250506020610c3285828601610ba5565b9150509250929050565b600080600060608486031215610c5557610c54611107565b5b6000610c6386828701610ba5565b9350506020610c7486828701610ba5565b9250506040610c8586828701610bba565b9150509250925092565b60008060408385031215610ca657610ca5611107565b5b6000610cb485828601610ba5565b9250506020610cc585828601610bba565b9150509250929050565b610cd881611001565b82525050565b6000610ce982610f7d565b610cf38185610f88565b9350610d03818560208601611044565b610d0c8161110c565b840191505092915050565b6000610d24602383610f88565b9150610d2f8261111d565b604082019050919050565b6000610d47602283610f88565b9150610d528261116c565b604082019050919050565b6000610d6a602683610f88565b9150610d75826111bb565b604082019050919050565b6000610d8d602883610f88565b9150610d988261120a565b604082019050919050565b6000610db0602583610f88565b9150610dbb82611259565b604082019050919050565b6000610dd3602483610f88565b9150610dde826112a8565b604082019050919050565b6000610df6602583610f88565b9150610e01826112f7565b604082019050919050565b610e158161102d565b82525050565b610e2481611037565b82525050565b6000602082019050610e3f6000830184610ccf565b92915050565b60006020820190508181036000830152610e5f8184610cde565b905092915050565b60006020820190508181036000830152610e8081610d17565b9050919050565b60006020820190508181036000830152610ea081610d3a565b9050919050565b60006020820190508181036000830152610ec081610d5d565b9050919050565b60006020820190508181036000830152610ee081610d80565b9050919050565b60006020820190508181036000830152610f0081610da3565b9050919050565b60006020820190508181036000830152610f2081610dc6565b9050919050565b60006020820190508181036000830152610f4081610de9565b9050919050565b6000602082019050610f5c6000830184610e0c565b92915050565b6000602082019050610f776000830184610e1b565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610fa48261102d565b9150610faf8361102d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610fe457610fe36110a9565b5b828201905092915050565b6000610ffa8261100d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611062578082015181840152602081019050611047565b83811115611071576000848401525b50505050565b6000600282049050600182168061108f57607f821691505b602082108114156110a3576110a26110d8565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b61134f81610fef565b811461135a57600080fd5b50565b6113668161102d565b811461137157600080fd5b5056fea264697066735822122065707d63f0a86141de4a4a2ec81fc5c277463cfd4eda3d25d6a125724414315d64736f6c63430008060033";
