const Web3 = require('web3');
var contract = require("truffle-contract");
const MyEthContract_artifiacts = require('/home/p/Documents/AWT/NodeJs/Blockchain/MyTest.json');

const MyContract = contract(MyEthContract_artifiacts);
MyContract.defaults({from: "0xa1dc48f251089d9d7f177c123bf9a7fd750142db"}) 
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log("here1");
MyContract.setProvider(web3.currentProvider);
MyContract.setNetwork("987");
console.log("here2");
if (typeof MyContract.currentProvider.sendAsync !== "function") {
  MyContract.currentProvider.sendAsync = function() {
        return MyContract.currentProvider.send.apply(
          MyContract.currentProvider, arguments
        );
    };
}
console.log("here3")
  account =  "0xa1dc48f251089d9d7f177c123bf9a7fd750142db";
  //console.log(MyContract)
  var test;
  meta = MyContract.at("0x652af1e4b07951ef94a826839055cd8d550d80af").then(function(instance) {
    console.log("here4");
    test = instance;
    //   instance.get_title(0, {from: account}).then(function(value) {
    //       console.log("Printing value: value of....");
    //       console.log(value.valueOf());
    //   });
    return test.insert_device.estimateGas("T2","LightSensor2","1.20",12,{from: account}).then(function(result) {
        console.log(result)
      });
      //   return test.update_title(0,"NewTitle").then(function(result) {
      //   console.log(result)
      // });
    // return test.set_greet("Fuc U 2").then(function(result) {
    //     console.log(result)
    //   });
  }).catch(function(e) {
      console.error(e);
  });


// var deployed;
// MyContract.deployed().then(function(instance) {
//   var deployed = instance;
//   return instance.greet();
// }).then(function(result) {
//   // Do something with the result or continue with more transactions.
// });


//instance.then(function(value){ console.log(value)})
//console.log(instance)