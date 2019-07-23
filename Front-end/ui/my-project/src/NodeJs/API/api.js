/* eslint-disable */
const Web3 = require('web3');
const moment = require('moment');
const { abi, dataContract } = require('./contract');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const eth = web3.eth;
const deployerAccount = eth.accounts[eth.accounts.length - 1];
var fs = require('fs');

var http = require("http");
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

        if (e) {
          var promise2 = MyContract.methods.returnNDevice().call().then(function (index, error) {


            const file = (index - 1) + '.json';
            console.log(file);
            var obj = {
              transaction: []

            };
            obj.transaction.push({
              deviceId: (index - 1),
              value: values,
              isActive: true,
              timeStamp: new Date().toJSON()
            });
            console.log(obj);
            var json = JSON.stringify(obj);
            fs.writeFile(file, json, 'utf8', function (e, r) {
              console.log(e, r)
            });

            //sparql
            var obj2 = JSON.parse(fs.readFileSync('jsonLD.json', 'utf8'));
            var currentId = obj2.elements[0].elements[0].elements.length + 1;
            var nameS = "transactionID";
            var transactionId = nameS + currentId;
            var id = "awt:id" + (index - 1);
            var dateT = "awt:D";
            //var valueD = "2018-6-13";
            var dateNaja = new Date();
            var valueD = new Date(dateNaja.getTime() - (dateNaja.getTimezoneOffset() * 60000)).toJSON().replace(":", ".").substring(0, 16);
            var actualD = dateT+valueD;
            //var title = "title" + currentId;
            //var val = currentId;
            //var desc = "description" + currentId;
            var sharpID = "#" + nameS + currentId;
            var newDateT = {
              "type": "element",
              "name": actualD,
              "attributes": {
                "rdf:resource": sharpID
              }
            };
            obj2.elements[0].elements[0].elements.push(newDateT);
            var transaction =
              {
                "type": "element",
                "name": "awt:transasction",
                "attributes": {
                  "rdf:ID": transactionId
                },
                "elements": [{
                  "type": "element",
                  "name": id,
                  "elements": [{
                    "type": "element",
                    "name": "awt:device",
                    "elements": [
                      {
                        "type": "element",
                        "name": "awt:title",
                        "elements": [{
                          "type": "text",
                          "text": title
                        }]
                      },
                      {
                        "type": "element",
                        "name": "awt:value",
                        "elements": [{
                          "type": "text",
                          "text": values
                        }]
                      }, {
                        "type": "element",
                        "name": "awt:description",
                        "elements": [{
                          "type": "text",
                          "text": description
                        }]
                      }
                    ]
                  }]
                }]

              };
            obj2.elements[0].elements.push(transaction);

            fs.writeFile("jsonLD.json", JSON.stringify(obj2), 'utf8', function (e, r) {
              console.log(e, r)
            });

          });
        }
      });

  }
  );

exports.updateValue = (address, creator, deviceId, newValue) => new Promise((resolve, reject) => {
  MyContract = new web3.eth.Contract(abi, address);
  MyContract.methods.update_values(deviceId,
    newValue).send({ from: creator, gas: 1000000 }).then(function (e, r) {
      console.log("Complete");
      console.log(e, r);
      if (e) {
        const file = deviceId + '.json';
        require('http').get('http://localhost:4000/readFile?file='+file, (res) => {
    res.setEncoding('utf8');
    res.on('data', function (data) {
       // console.log(data);
        
            MyContract.methods.get_title(deviceId).call().then(function (newTitle) {
              MyContract.methods.show_des(deviceId).call().then(function (newDesc) {
            var obj;
            obj = JSON.parse(data);//now it an object
            
            //console.log(obj);
            obj.transaction.push({
              deviceId: deviceId,
              value: newValue,
              isActive: true,
              timeStamp: new Date().toJSON()
            }); //add some data
            console.log(obj);
            json = JSON.stringify(obj); //convert it back to json
            require('http').get('http://localhost:4000/writeFile?file='+file+'&json='+json, (res) => {})
            // fs.writeFile(file, json, 'utf8', function (e, r) {
            //   console.log(e, r)
            // }); // write it back

            //sparql
            require('http').get('http://localhost:4000/readFile?file=jsonLD.json', (res) => {
    res.setEncoding('utf8');
    res.on('data', function (data2) {
            var obj2 = JSON.parse(data2);
            var currentId = obj2.elements[0].elements[0].elements.length + 1;
            var nameS = "transactionID";
            var transactionId = nameS + currentId;
            var id = "awt:id" + deviceId;
            var dateT = "awt:D";
            //var valueD = "2018-6-13";
            var dateNaja = new Date();
            var valueD = new Date(dateNaja.getTime() - (dateNaja.getTimezoneOffset() * 60000)).toJSON().replace(":", ".").substring(0, 16);
            //var title = "title" + currentId;
            //var val = currentId;
            //var desc = "description" + currentId;
            var sharpID = "#" + nameS + currentId;
            var actualD = dateT+valueD;
            var newDateT = {
              "type": "element",
              "name": actualD,
              "attributes": {
                "rdf:resource": sharpID
              }
            };
            obj2.elements[0].elements[0].elements.push(newDateT);
            var transaction =
              {
                "type": "element",
                "name": "awt:transasction",
                "attributes": {
                  "rdf:ID": transactionId
                },
                "elements": [{
                  "type": "element",
                  "name": id,
                  "elements": [{
                    "type": "element",
                    "name": "awt:device",
                    "elements": [
                      {
                        "type": "element",
                        "name": "awt:title",
                        "elements": [{
                          "type": "text",
                          "text": newTitle
                        }]
                      },
                      {
                        "type": "element",
                        "name": "awt:value",
                        "elements": [{
                          "type": "text",
                          "text": newValue
                        }]
                      }, {
                        "type": "element",
                        "name": "awt:description",
                        "elements": [{
                          "type": "text",
                          "text": newDesc
                        }]
                      }
                    ]
                  }]
                }]

              };
            obj2.elements[0].elements.push(transaction);
            //console.log(obj2)
            var json2 = JSON.stringify(obj2).replace(/#/g , "@"); //convert it back to json
            console.log(json2)
            require('http').get('http://localhost:4000/writeFile2?file=jsonLD.json&json='+json2, (res) => {})

          });
        });
          }
              )}
            )
    
          });
        });

      }
    });
}

);


exports.getDeviceStatus = (address, creator, projectId) => {
  MyContract = new web3.eth.Contract(abi, address);
  console.log("address " + address);
  console.log("creator " + creator);
  console.log("projectId " + projectId);
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

  return Promise.all([promise1, promise2, promise3, promise4]).then(function (result) {
    console.log(result)
    return result;
  })

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

// exports.updateValue = (address, projectId, deviceValue) => {
//   console.log('projectId:', projectId);
//   console.log('deviceValue:', deviceValue);
//   web3.eth.contract(abi).at(address).update_values(projectId, deviceValue);
// }

exports.showResult = (value, title, citeria, obj,date) => {
  var result = [];
  if(title!=null)title = '"'+title+'"';
  //var obj = JSON.parse(fs.readFileSync('currentQuery.json', 'utf8'));
  //console.log(obj)
  for (var x = 0; x < obj.result.length; x++) {
    obj.result[x].date = obj.result[x].date.substring(obj.result[x].date.lastIndexOf('D') + 1);
    obj.result[x].id = obj.result[x].id.substring(obj.result[x].id.lastIndexOf('/')+1, obj.result[x].id.length);
    if(value!=null)obj.result[x].value = obj.result[x].value.substring(1, obj.result[x].value.length - 1);
    //obj.result[x].title = obj.result[x].title.substring(1, obj.result[x].title.length - 1);
    console.log(obj.result[x].date.includes(date))
    console.log(obj.result[x].date)
    console.log(date) 
  }
  //obj.result.removeValue('title',title);
  if(date!=null)obj.result = 
  obj.result.filter(function (el) { return el.date.includes(date); });
  if (title != null) obj.result =
    obj.result.filter(function (el) { return el.title == title; });
  //findAndRemove(obj.result, 'title', title);
  console.log(obj)
  if (value != null) {
    for (var i = 0; i < obj.result.length; i++) {
      //console.log()
      if (citeria == "Higher") {
        if (parseInt(obj.result[i].value) > value) {
          obj.result[i].value = '"'+obj.result[i].value+'/"'
          result.push(obj.result[i])
        }
      } else if (citeria == "Equal") {
        if (parseInt(obj.result[i].value) == value) {
          obj.result[i].value = '"'+obj.result[i].value+'/"'
          result.push(obj.result[i])
        }
      } else if (citeria == "Lower") {
        if (parseInt(obj.result[i].value) < value) {
          obj.result[i].value = '"'+obj.result[i].value+'/"'
          result.push(obj.result[i])
        }
      }
    }
  } else { result = obj.result }
  //console.log(result)
  return result;
}