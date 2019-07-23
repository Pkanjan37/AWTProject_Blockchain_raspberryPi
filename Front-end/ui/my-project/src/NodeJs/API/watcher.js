/* eslint-disable */
const Web3 = require('web3');
const moment = require('moment');
const { abi, dataContract } = require('./contract');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
const api = require('./api.js');

var fs = require('fs');

var valueLast=0;
var path = "watcher.json"
if (fs.existsSync(path)) {
    valueLast = fs.readFileSync("watcher.json", 'utf8');
    console.log("V"+valueLast)
}
var http = require("http");
var address = "0xd6b921cae259d3deec788912a2a55c901a5aad70";
//var myVar = setInterval(myTimer, 10000);
var myVar2 = setInterval(myTimer2, 3000);
//var myVar3 = setInterval(myTimer3, 30000); 
MyContract = new web3.eth.Contract(abi, address);

function myTimer() {


    var Call = MyContract.getPastEvents('ChangeValue', {
        fromBlock: 0,
        toBlock: 'latest'
    }, function(error, events){ console.log(events);
   
        for(var i=events.length-1;i>0;i--){
            if(events[i].returnValues.id==0){
            if(valueLast!=events[i].returnValues.values){
                fs.writeFile(path, valueLast, 'utf8', function(e,r){
                    console.log(e,r)
                  });
                console.log(events[events.length-1].returnValues.id)
                console.log(events[events.length-1].returnValues.values)
                require('http').get('http://localhost:5002/turnOnLight/'+events[events.length-1].returnValues.values, (res) => {})
                   
            }
            break;
        }}
        // if(valueLast!=events[events.length-1].returnValues.values&&events[events.length-1].returnValues.id==0){
        //     console.log(events.length);
        //     valueLast = events[events.length-1].returnValues.values;
        //     fs.writeFile(path, valueLast, 'utf8', function(e,r){
        //         console.log(e,r)
        //       });
        //     console.log(events[events.length-1].returnValues.id)
        //     console.log(events[events.length-1].returnValues.values)
        //     require('http').get('http://localhost:5002/turnOnLight/'+events[events.length-1].returnValues.values, (res) => {})
        //               }
        
         //var obj = JSON.parse(events);

        // if(valueLast < Object.keys(obj).length){
        //     console.log("Data change")
        // }
    })
    .then(function(events){
        //console.log(events) // same results as the optional callback above
    });
    console.log(Call);
}
function myTimer2() {

var option = ["temp","pressure","humi"]
for (const val in option){
    console.log(option[val])
    require('http').get('http://localhost:5002/sensorData/'+option[val], (res) => {
    res.setEncoding('utf8');
    res.on('data', function (data2) {
        console.log(data2);
        api.updateValue(address,"0xa1dc48f251089d9d7f177c123bf9a7fd750142db"
        ,val+1,data2);
    })});

}    }


function myTimer3() {
    var obj = JSON.parse(fs.readFileSync('jsonLD.json', 'utf8'));

var convert = require('xml-js');
console.log(JSON.stringify(obj) + " <<<<<<<<<<<<<<<")
var resultC = convert.json2xml(obj, { spaces: 4 });
console.log(resultC)
fs.writeFile("extracted.rdf", resultC, 'utf8', function (e, r) {
  console.log(e,r)
}); // write it back 
}