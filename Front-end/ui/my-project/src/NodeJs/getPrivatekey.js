var keyth=require('keythereum');
var keyobj=keyth.importFromFile('0x7a117acd5cf0a0d80c74d3e9b0006d07f0e4e9e9','/home/p/AWTBlockchain');
var privateKey=keyth.recover('12345',keyobj)
privateKey.toString('hex')
console.log(privateKey.toString('hex'))