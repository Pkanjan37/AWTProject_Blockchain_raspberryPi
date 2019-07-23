// const fs = require("fs");
// const jsonld = require('jsonld');
// var rdflib = require('rdflib');
// const rdfstore = require('rdfstore');

// function getData(queryString2,callback){
//     var graph = new rdflib.IndexedFormula();
//    // queryString2 = "SELECT *  WHERE { ?s ?date ?o . ?o ?id ?result . ?result <http://xmlns.com/awt/0.1/value> ?newValue} ";
//     fs.readFile('extracted.rdf', function (err, data) {
//         var srcData = rdflib.parse(data.toString(), graph, "http://schema.org/", 'application/rdf+xml');
 
//         var targetData = rdflib.serialize(srcData, graph, "http://schema.org/", 'text/n3');
        
//     rdfstore.create(function(err, store){
//         store.load('text/n3', targetData, function(s,d){
//     store.execute(queryString2, function(success, results2){
//         callback(returnData(results2));
//     });
// });
// });
// });
// }

// function returnData(data){
//     //console.log(data.length); // 3
//     return data;
// }
// var out = getData("SELECT *  WHERE { ?s ?date ?o . ?o ?id ?result . ?result <http://xmlns.com/awt/0.1/value> ?newValue} ",function(q) {
//  //   console.log(q);
//     return q;
// });

// console.log(out);

var x={result:[]};
x.result.push({"x":"y"});
var newN=x.result[0]
newN["eiei"] = "hello";
console.log(x)