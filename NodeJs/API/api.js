const Web3 = require('web3');
const moment = require('moment');
const { abi, dataContract } = require('./contract');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const eth = web3.eth;
const deployerAccount = eth.accounts[eth.accounts.length - 1];



//const { eth } = web3;
const { accounts } = eth;
exports.getAccounts = () => accounts;
exports.getDeployerAccount = () => deployerAccount;

//exports.eth = eth;
//exports.getAccounts = () => eth.accounts;
//exports.getDeployerAccount = () => deployerAccount;

exports.deploy = () => new Promise((resolve, reject) => {
  console.log('deploying contract : 0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe');
  console.log('account 0  ' + eth.accounts[0]);

  MyContract = new web3.eth.Contract(abi, '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', { from: "0x7a117acd5cf0a0d80c74d3e9b0006d07f0e4e9e9", gas: '4700000' });
  MyContract.deploy({ data: dataContract }).send({
    from: "0x7a117acd5cf0a0d80c74d3e9b0006d07f0e4e9e9",
    gas: 5000000,
    gasPrice: '30000000000000'
  }, function (error, transactionHash) { console.log("Start deploy") })
    .on('error', function (error) { console.log(error) })
    .on('transactionHash', function (transactionHash) { console.log(transactionHash) })
    .on('receipt', function (receipt) {
      console.log(receipt.contractAddress) // contains the new contract address
    })
    .on('confirmation', function (confirmationNumber, receipt) {
      console.log(confirmationNumber)
      console.log(receipt)
    })
    .then(function (newContractInstance) {
      console.log(newContractInstance.options.address) // instance with the new contract address
    });
}
);

exports.logBalances = () => eth.accounts.forEach(
  account => console.log(eth.getBalance(account).toString())
);


exports.getMyBalance = account => eth.getBalance(account).toString();

exports.createDevice = (address, creator, title, description, values, type) =>
  new Promise((resolve, reject) => {
    console.log("createProject");
    console.log("creator: ", creator);
    console.log("title: ", title);
    console.log("description: ", description);
    console.log("values: ", values);
    console.log("type: ", type);
    MyContract = new web3.eth.Contract(abi, address);
    // MyContract.events.DeviceAdded({}
    // , function(error, event){ console.log(event); })
    // .on('data', function(event){
    //     console.log(event); // same results as the optional callback above
    // })
    // .on('changed', function(event){
    //     // remove event from local database
    // })
    // .on('error', console.error);
    console.log("Create: " + MyContract.methods);
    MyContract.methods.create_device(title,
      description,
      values,
      type).send({ from: creator, gas: 1000000 }).then(function (e, r) {
        console.log("Complete");
        console.log(e, r);
      });

  }
  );

exports.updateValue = (address, creator, deviceId, newValue) => new Promise((resolve, reject) => {
  MyContract = new web3.eth.Contract(abi, address);
  MyContract.methods.update_values(deviceId,
    newValue).send({ from: creator, gas: 1000000 }).then(function (e, r) {
      console.log("Complete");
      console.log(e, r);
    });
}

);


exports.getDeviceStatus = (address, creator, projectId) => {
  MyContract = new web3.eth.Contract(abi, address);
  console.log("address "+ address);
  console.log("creator "+ creator);
  console.log("projectId "+ projectId);
  var promise2 = MyContract.methods.get_title(projectId).call().then(function (e) {
    
    return e;
  });
  var promise3 = MyContract.methods.show_type(projectId).call().then(function (e2) {

    return e2;
  });
  var promise4 = MyContract.methods.show_des(projectId).call().then(function (e3) {


    return e3;
  });
  var promise1 = MyContract.methods.show_values(projectId).call().then(function (e4) {

    return e4;
  });
  
  return Promise.all([promise1, promise2, promise3,promise4])

};


exports.withdraw = (address, creator, projectId) => new Promise((resolve, reject) => {
  console.log('withdraw ');
  console.log('creator:', creator);
  console.log('projectId:', projectId);
  web3.eth.contract(abi).at(address).withdraw_funds.sendTransaction(
    projectId,
    { from: creator, gas: 200000 },
    (err, txHash) => {
      if (err) {
        console.log('withdraw funding not reached or error');
        return reject(err);
      }
      console.log('withdraw:', txHash);
      return resolve();
    }
  );
});


exports.listAllDevice = (address) => {
  const activeDevices = web3.eth.contract(abi).at(address).get_active_devices().map(id => id.toNumber());
  console.log("activeDevices: ", activeDevices);
  var output = activeDevices.map(id => {
    const project = web3.eth.contract(abi).at(address).get_device(id);
    project.project_id = id;
    return project;
  });
  console.log("output: ", output);
  var result = [];
  for (var j = 0; j < output.length; j++) {
    var temp;
    temp = {
      value: output[j][0],
      type: output[j][1],
      title: output[j][2],
      description: output[j][3]
    }
    result.push(temp);

  }
  console.log(output);
  console.log(result)
  return result;
};

exports.getCreatorAddress = (address, projectId) => {
  console.log('projectId:', projectId);
  return web3.eth.contract(abi).at(address).show_project_creator(projectId);
}

exports.updateValue = (address, projectId, deviceValue) => {
  console.log('projectId:', projectId);
  console.log('deviceValue:', deviceValue);
  web3.eth.contract(abi).at(address).update_values(projectId, deviceValue);
}