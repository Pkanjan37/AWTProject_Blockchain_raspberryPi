const api = require('./api');
const Web3 = require('web3');
const moment = require('moment');
const { abi, dataContract } = require('./contract');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const query = require('./api.js');
const fs = require('fs');
const deploy = async () => {
  try {
    const contract = await api.deploy();
    //const projectId = await api.createDevice(contract, api.getDeployerAccount(), 'testproject','description',400,'');
   // const projectId = await api.createDevice("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe", api.getDeployerAccount(), 'testproject','description',400,'');
    //api.logBalances();
    console.log('done');
  } catch (err) {
    console.error(err);
  }
}

const queryNaja =()=>{
  query.queryRDF(null,null,null,null,null);
}
const showTable=()=>{
  var obj = JSON.parse(fs.readFileSync('currentQuery.json', 'utf8'));
 var x= query.showResult(null,null,null,obj,"2018-07-13")
 console.log(x)
}
//"2018-07-12T22:39:08.058Z"
//"2018-07-13T15.17"


const test = async () => {
  try {
    
    const contract = await api.createDevice("0xd6b921cae259d3deec788912a2a55c901a5aad70","0xa1dc48f251089d9d7f177c123bf9a7fd750142db"
    ,"LED_2","LED_Des_2","Open",0);
    //const projectId = await api.createDevice(contract, api.getDeployerAccount(), 'testproject','description',400,'');
    //const projectId = await api.createDevice("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe", api.getDeployerAccount(), 'testproject','description',400,'');
    //api.logBalances();
    console.log('done');
    console.log(contract);
  } catch (err) {
    console.error(err);
  }
}
const GetData = async () => {
  try {
    // MyContract = new web3.eth.Contract(abi,"0xb905665c381ce7ed2a859fefb65bd42117dfacfd");
    // MyContract.methods.get_title(0).call().then(function(e,r) {
    //   console.log(e,r);
    //   title = r;
    // });
      result = await api.getDeviceStatus("0xd6b921cae259d3deec788912a2a55c901a5aad70","0xa1dc48f251089d9d7f177c123bf9a7fd750142db",0);

   
      console.log(result[1])
    //const contract = await api.getDeviceStatus(MyContract,0);
    //const projectId = await api.createDevice(contract, api.getDeployerAccount(), 'testproject','description',400,'');
    //const projectId = await api.createDevice("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe", api.getDeployerAccount(), 'testproject','description',400,'');
    //api.logBalances();
    //console.log(contract);
  } catch (err) {
    console.error(err);
  }
}
const SetData = async () => {
  try {
    const contract = await api.updateValue("0xd6b921cae259d3deec788912a2a55c901a5aad70","0xa1dc48f251089d9d7f177c123bf9a7fd750142db"
    ,0,"Close");
    //const projectId = await api.createDevice(contract, api.getDeployerAccount(), 'testproject','description',400,'');
    //const projectId = await api.createDevice("0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe", api.getDeployerAccount(), 'testproject','description',400,'');
    //api.logBalances();
    console.log('done');
    console.log(contract);
  } catch (err) {
    console.error(err);
  }
}
// MyContract = new web3.eth.Contract(abi,'0x1Cb464fEC730ebfb9BC3ECB44c42D9f0F9bdA9e6');
// MyContract.methods.create_device("title",
//   "description",
//   "0.01",
// 1,"WTF DUDEEEEEE").send({from:'0x53bd1a1e4264a54c76ae9fd83c35c4f1787b0a53'}).then(function(e,r) {
//       console.log("Complete");
//   console.log(e,r);
// });

// MyContract = new web3.eth.Contract(abi,'0xfFa4Aa97888e427d41a4656abFa00Eb6CE9D3026');
// MyContract.methods.set_greet("Hello eiei3").send({from: '0x53bd1a1e4264a54c76ae9fd83c35c4f1787b0a53'}).then(function(e,r) {
//   console.log(e,r);
// });

//test();
//MyContract = new web3.eth.Contract(abi,'0x6fc54eda611290b2a80dc0bb1a8aa7e21f0a03b8');
// MyContract.events.DeviceAdded({}
// , function(error, event){ console.log(event); })
// .on('data', function(event){
//     console.log(event); // same results as the optional callback above
// })
// .on('changed', function(event){
//     // remove event from local database
// })
// .on('error', console.error);
// MyContract.methods.create_device("T2","D2","values2",0,"call").send({from:"0x53bd1a1e4264a54c76ae9fd83c35c4f1787b0a53"}).then(function(e,r) {
//         console.log("Complete");
//     console.log(e,r);
//   });
//queryNaja();
//showTable();
GetData();
//SetData();
//test();
console.log("test")
//deploy();