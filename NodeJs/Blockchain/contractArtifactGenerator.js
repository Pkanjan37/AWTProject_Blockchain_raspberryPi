var Artifactor = require("truffle-artifactor");
const path = require('path');
const dirPath = path.resolve('./');
const artifactor = new Artifactor(dirPath);
var contract_data = {
    contract_name: 'MyTest',
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "i",
                    "type": "uint256"
                }
            ],
            "name": "get_device",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "string"
                },
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "get_devices_created",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
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
                    "name": "device_id",
                    "type": "uint256"
                },
                {
                    "name": "title",
                    "type": "string"
                }
            ],
            "name": "update_title",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_greeting",
                    "type": "string"
                }
            ],
            "name": "set_greet",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "pushStruct",
            "outputs": [
                {
                    "name": "arrayLength",
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
                    "name": "device_id",
                    "type": "uint256"
                },
                {
                    "name": "_type",
                    "type": "uint256"
                }
            ],
            "name": "update_type",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_title",
                    "type": "string"
                },
                {
                    "name": "_description",
                    "type": "string"
                },
                {
                    "name": "_values",
                    "type": "string"
                },
                {
                    "name": "_type_device",
                    "type": "uint256"
                }
            ],
            "name": "create_device",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "title",
                    "type": "string"
                },
                {
                    "name": "des",
                    "type": "string"
                },
                {
                    "name": "value",
                    "type": "string"
                },
                {
                    "name": "typeDevice",
                    "type": "uint256"
                }
            ],
            "name": "insert_device",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "device_id",
                    "type": "uint256"
                }
            ],
            "name": "show_des",
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
            "constant": true,
            "inputs": [
                {
                    "name": "device_id",
                    "type": "uint256"
                }
            ],
            "name": "get_title",
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
            "constant": true,
            "inputs": [],
            "name": "greet",
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
            "constant": true,
            "inputs": [
                {
                    "name": "device_id",
                    "type": "uint256"
                }
            ],
            "name": "show_values",
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
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "myStructs",
            "outputs": [
                {
                    "name": "field1",
                    "type": "uint256"
                },
                {
                    "name": "field2",
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
            "name": "get_active_devices",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "returnNDevice",
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
                    "name": "device_id",
                    "type": "uint256"
                },
                {
                    "name": "_collaborate_sensor",
                    "type": "address"
                }
            ],
            "name": "update_collaborate_keys",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "device_id",
                    "type": "uint256"
                },
                {
                    "name": "_values",
                    "type": "string"
                }
            ],
            "name": "update_values",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "device_id",
                    "type": "uint256"
                }
            ],
            "name": "show_type",
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
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "id",
                    "type": "uint256"
                }
            ],
            "name": "DeviceAdded",
            "type": "event"
        }
    ],              // Array; required.
    unlinked_binary: "6080604052600060095534801561001557600080fd5b50611a4b806100256000396000f3006080604052600436106100fc576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063107d504c14610101578063344d05c4146102b95780633f1729c81461032557806370c66d66146103985780637f91da621461040157806397b8d3641461042c5780639be0697e14610463578063a83c307c14610562578063adabb35f14610661578063c3edb3fa14610707578063cfae3217146107ad578063d5be9cc41461083d578063df90c8d3146108e3578063e29089c21461092b578063e4088d5414610997578063e8103777146109c2578063f7438e9414610a0f578063f96ea6cb14610a82575b600080fd5b34801561010d57600080fd5b5061012c60048036038101908080359060200190929190505050610ac3565b604051808060200186815260200180602001806020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848103845289818151815260200191508051906020019080838360005b838110156101ac578082015181840152602081019050610191565b50505050905090810190601f1680156101d95780820380516001836020036101000a031916815260200191505b50848103835287818151815260200191508051906020019080838360005b838110156102125780820151818401526020810190506101f7565b50505050905090810190601f16801561023f5780820380516001836020036101000a031916815260200191505b50848103825286818151815260200191508051906020019080838360005b8381101561027857808201518184015260208101905061025d565b50505050905090810190601f1680156102a55780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b3480156102c557600080fd5b506102ce610d74565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156103115780820151818401526020810190506102f6565b505050509050019250505060405180910390f35b34801561033157600080fd5b5061039660048036038101908080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050610f7d565b005b3480156103a457600080fd5b506103ff600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611016565b005b34801561040d57600080fd5b50610416611030565b6040518082815260200191505060405180910390f35b34801561043857600080fd5b5061046160048036038101908080359060200190929190803590602001909291905050506110a1565b005b34801561046f57600080fd5b50610560600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192908035906020019092919050505061112a565b005b34801561056e57600080fd5b5061065f600480360381019080803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290803590602001909291905050506112b0565b005b34801561066d57600080fd5b5061068c6004803603810190808035906020019092919050505061135a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156106cc5780820151818401526020810190506106b1565b50505050905090810190601f1680156106f95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561071357600080fd5b506107326004803603810190808035906020019092919050505061140f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610772578082015181840152602081019050610757565b50505050905090810190601f16801561079f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156107b957600080fd5b506107c26114c4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108025780820151818401526020810190506107e7565b50505050905090810190601f16801561082f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561084957600080fd5b5061086860048036038101908080359060200190929190505050611566565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108a857808201518184015260208101905061088d565b50505050905090810190601f1680156108d55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156108ef57600080fd5b5061090e6004803603810190808035906020019092919050505061161b565b604051808381526020018281526020019250505060405180910390f35b34801561093757600080fd5b5061094061164e565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610983578082015181840152602081019050610968565b505050509050019250505060405180910390f35b3480156109a357600080fd5b506109ac61177c565b6040518082815260200191505060405180910390f35b3480156109ce57600080fd5b50610a0d60048036038101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611786565b005b348015610a1b57600080fd5b50610a8060048036038101908080359060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061189d565b005b348015610a8e57600080fd5b50610aad60048036038101908080359060200190929190505050611943565b6040518082815260200191505060405180910390f35b6060600060608060008086815481101515610ada57fe5b9060005260206000209060070201600101600087815481101515610afa57fe5b906000526020600020906007020160020154600088815481101515610b1b57fe5b9060005260206000209060070201600301600089815481101515610b3b57fe5b906000526020600020906007020160040160008a815481101515610b5b57fe5b906000526020600020906007020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c225780601f10610bf757610100808354040283529160200191610c22565b820191906000526020600020905b815481529060010190602001808311610c0557829003601f168201915b50505050509450828054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610cbe5780601f10610c9357610100808354040283529160200191610cbe565b820191906000526020600020905b815481529060010190602001808311610ca157829003601f168201915b50505050509250818054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d5a5780601f10610d2f57610100808354040283529160200191610d5a565b820191906000526020600020905b815481529060010190602001808311610d3d57829003601f168201915b505050505091509450945094509450945091939590929450565b6060806000806060600080600080549050604051908082528060200260200182016040528015610db35781602001602082028038833980820191505090505b50955060009450600093505b600080549050841015610edb5760008685815181101515610ddc57fe5b90602001906020020190151590811515815250503373ffffffffffffffffffffffffffffffffffffffff16600085815481101515610e1657fe5b906000526020600020906007020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148015610e9c575060011515600085815481101515610e7957fe5b906000526020600020906007020160000160009054906101000a900460ff161515145b15610ece5760018685815181101515610eb157fe5b906020019060200201901515908115158152505084806001019550505b8380600101945050610dbf565b84604051908082528060200260200182016040528015610f0a5781602001602082028038833980820191505090505b50925060009150600090505b600080549050811015610f71578581815181101515610f3157fe5b9060200190602002015115610f6457808383806001019450815181101515610f5557fe5b90602001906020020181815250505b8080600101915050610f16565b82965050505050505090565b3373ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610fea57600080fd5b80600460008481526020019081526020016000209080519060200190611011929190611960565b505050565b806008908051906020019061102c929190611960565b5050565b600061103a6119e0565b60018160000181815250506002816020018181525050600a81908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010155505050600a8054905091505090565b3373ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561110e57600080fd5b8060036000848152602001908152602001600020819055505050565b816002600060095481526020019081526020016000209080519060200190611153929190611960565b506001806000600954815260200190815260200160002060006101000a81548160ff02191690831515021790555080600360006009548152602001908152602001600020819055508360046000600954815260200190815260200160002090805190602001906111c4929190611960565b508260056000600954815260200190815260200160002090805190602001906111ee929190611960565b503360066000600954815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060076000600954815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060096000815480929190600101919050555050505050565b8160026000600954815260200190815260200160002090805190602001906112d9929190611960565b50836004600060095481526020019081526020016000209080519060200190611303929190611960565b5082600560006009548152602001908152602001600020908051906020019061132d929190611960565b50806003600060095481526020019081526020016000208190555060016009540160098190555050505050565b6060600560008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114035780601f106113d857610100808354040283529160200191611403565b820191906000526020600020905b8154815290600101906020018083116113e657829003601f168201915b50505050509050919050565b6060600460008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114b85780601f1061148d576101008083540402835291602001916114b8565b820191906000526020600020905b81548152906001019060200180831161149b57829003601f168201915b50505050509050919050565b606060088054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561155c5780601f106115315761010080835404028352916020019161155c565b820191906000526020600020905b81548152906001019060200180831161153f57829003601f168201915b5050505050905090565b6060600260008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561160f5780601f106115e45761010080835404028352916020019161160f565b820191906000526020600020905b8154815290600101906020018083116115f257829003601f168201915b50505050509050919050565b600a8181548110151561162a57fe5b90600052602060002090600202016000915090508060000154908060010154905082565b6060600080606060008060009450600093505b6000805490508410156116be576001151560008581548110151561168157fe5b906000526020600020906007020160000160009054906101000a900460ff16151514156116b15784806001019550505b8380600101945050611661565b846040519080825280602002602001820160405280156116ed5781602001602082028038833980820191505090505b50925060009150600090505b600080549050811015611771576001151560008281548110151561171957fe5b906000526020600020906007020160000160009054906101000a900460ff16151514156117645780838380600101945081518110151561175557fe5b90602001906020020181815250505b80806001019150506116f9565b829550505050505090565b6000600954905090565b3373ffffffffffffffffffffffffffffffffffffffff166000838154811015156117ac57fe5b906000526020600020906007020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561180057600080fd5b8060008381548110151561181057fe5b906000526020600020906007020160060160008481548110151561183057fe5b90600052602060002090600702016006018054905081548110151561185157fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b3373ffffffffffffffffffffffffffffffffffffffff166000838154811015156118c357fe5b906000526020600020906007020160050160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561191757600080fd5b8060026000848152602001908152602001600020908051906020019061193e929190611960565b505050565b600060036000838152602001908152602001600020549050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106119a157805160ff19168380011785556119cf565b828001600101855582156119cf579182015b828111156119ce5782518255916020019190600101906119b3565b5b5090506119dc91906119fa565b5090565b604080519081016040528060008152602001600081525090565b611a1c91905b80821115611a18576000816000905550600101611a00565b5090565b905600a165627a7a72305820a3129d2793ab474bc1d88cd2cc0146651eff6ffbf06f7ea079195e220f74f8a10029" // String; optional.
    ,address: "0xae9bef71b68522fb7adc58710115433b75491b0c"
    ,network_id: 987         // String; optional.
  };
  
  artifactor.save(contract_data, "MyContract.sol.js").then(function() {
   console.log("complete")
  });