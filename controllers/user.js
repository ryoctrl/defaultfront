var Web3 = require('/usr/local/lib/node_modules/web3');
var Tx  = require('/usr/local/lib/node_modules/ethereumjs-tx');

var web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/f363558df5f1484990ee8ea9150e5a7aS"));

var _Admin = "0x09cA9ABC63B40B076f4a41AF4B2260cF2A3b6Ae2";//管理者
var privateKey1 = Buffer.from("47FA979D19EEE42110F65E2F7964BDADA07F91D1D2B9F795AE7DCCB895970107","hex");

var _from = "0x2F7AC829f6785305a78b1C2AbcEaD2aBE7Cc6802";
var privateKey2 = Buffer.from("11B25EE1788CF22DB8508836178DD32F72066B3BFE4DA2F6ED84E2C96BDDEA1E","hex");

var _to = "0x15209Ca11eB6FA758c845083F2b716e1d5395d2C";


var ContractAddress = "0x30ee9391cea761fe842525392bdf851d9cae211b";//DefaultTokenのaddress
var abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseApproval",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "name": "payForPlayer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

var contract = new web3.eth.Contract(abi, ContractAddress,{
  from: _Admin,
  gasLimit: 4600000
});

module.exports = {
    sendCoin: function(amount) {
　var estimateGas;
　var nonce;


 var approveFunction = contract.methods.approve(_from,amount);
 var approveAbi = approveFunction.encodeABI();

　web3.eth.getTransactionCount(_Admin).then(function(_nonce){
  nonce = _nonce.toString(16);
  console.log("Nonce:" + nonce);

　var txParams_app = {
　nonce: "0x" + nonce,
　gasPrice: web3.utils.toHex(web3.utils.toWei("0.00000009", "ether")),
　gasLimit: web3.utils.toHex(4600001),
　from: _Admin,
　to: ContractAddress,
　data: approveAbi,
　};

　var tx_app = new Tx(txParams_app);
　tx_app.sign(privateKey1);
　var serializedTx_app = tx_app.serialize();
　web3.eth.sendSignedTransaction("0x" + serializedTx_app.toString("hex"))
　.on('receipt', receipt2 => {
  console.log("approve status: "+receipt2.status);

  var transferFromFunction = contract.methods.transferFrom(_Admin, _to, amount);
  var transferFromAbi = transferFromFunction.encodeABI();

  web3.eth.getTransactionCount(_from).then(function(_nonce){
    nonce = _nonce.toString(16);
    console.log("Nonce:" + nonce);


    var txParams_tra = {
    　nonce: "0x" + nonce,
    　gasPrice: web3.utils.toHex(web3.utils.toWei("0.00000005", "ether")),
    　gasLimit: web3.utils.toHex(4600001),
    　from: _from,
    　to: ContractAddress,
    　data: transferFromAbi,
    　};


    var tx_tra = new Tx(txParams_tra);
    　tx_tra.sign(privateKey2);
    　var serializedTx_tra = tx_tra.serialize();
      var trrr = serializedTx_tra.toString("hex");
    　web3.eth.sendSignedTransaction("0x" + trrr)
    　.on('receipt', receipt2 => {
      console.log("transfer status: "+receipt2.status);
      contract.methods.balanceOf(_to).call().then(function(v){console.log(v)}).catch((err) => {console.log(err)});


  });
});
});
});
}
};
