const Web3 = require('/usr/local/lib/node_modules/web3');
const Tx  = require('/usr/local/lib/node_modules/ethereumjs-tx');
const abi = [
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
const web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/f363558df5f1484990ee8ea9150e5a7aS"));

module.exports = {
    sendCoin: async function(amount) {
        let amountNum = Number(amount);
        if(isNaN(amountNum)) return { err: true, message: 'Amount must be number' };
        const _Admin = "0x09cA9ABC63B40B076f4a41AF4B2260cF2A3b6Ae2";//管理者
        const privateKey1 = Buffer.from("47FA979D19EEE42110F65E2F7964BDADA07F91D1D2B9F795AE7DCCB895970107","hex");

        const _from = "0x2F7AC829f6785305a78b1C2AbcEaD2aBE7Cc6802";
        const privateKey2 = Buffer.from("11B25EE1788CF22DB8508836178DD32F72066B3BFE4DA2F6ED84E2C96BDDEA1E","hex");

        const _to = "0x15209Ca11eB6FA758c845083F2b716e1d5395d2C";

        const ContractAddress = "0x30ee9391cea761fe842525392bdf851d9cae211b";//DefaultTokenのaddress
        const contract = new web3.eth.Contract(abi, ContractAddress, {
          from: _Admin,
          gasLimit: 4600000
        });

        let estimateGas;
        let nonce;

        let approveFunction = contract.methods.approve(_from,amount);
        let approveAbi = approveFunction.encodeABI();

        let _nonce = await web3.eth.getTransactionCount(_Admin);
        nonce = _nonce.toString(16);
        console.log('Nonce:' + nonce);

        let txParams_app = {
            nonce: '0x' + nonce,
            gasPrice: web3.utils.toHex(web3.utils.toWei("0.00000009", "ether")),
            gasLimit: web3.utils.toHex(4600001),
            from: _Admin,
            to: ContractAddress,
            data: approveAbi,
        };

        let tx_app = new Tx(txParams_app);
        tx_app.sign(privateKey1);
        let serializedTx_app = tx_app.serialize();
        web3.eth.sendSignedTransaction('0x' + serializedTx_app.toString('hex'))
            .on('receipt', receipt2 => {
                console.log('approve status: ' + receipt2.status);
                
                let transferFromFunction = contract.methods.transferFrom(_Admin, _to, amount);
                let transferFromAbi = transferFromFunction.encodeABI();

                _nonce = web3.eth.getTransactionCount(_from);
                nonce = _nonce.toString(16);

                console.log('Nonce:'+nonce);

                let txParams_tra = {
                    nonce: '0x' + nonce,
                    gasPrice: web3.utils.toHex(web3.utils.toWei('0.000000005', 'ether')),
                    gasLimit: web3.utils.toHex(4600001),
                    from: _from,
                    to: ContractAddress,
                    data: transferFromAbi,
                };

                let tx_tra = new Tx(txParams_tra);
                tx_tra.sign(privateKey2);
                let serializedTx_tra = tx_tra.serialize();
                let trrr = serializedTx_tra.toString('hex');
                web3.eth.sendSignedTransaction('0x' + trrr)
                    .on('receipt', receipt2 => {
                        console.log('transfer status: ' + receipt2.status);
                        contract.methods.balanceOf(_to).call()
                            .then( v => { console.log(v) })
                            .catch( err => { console.log(err) });
                    });
            });
    },
}





