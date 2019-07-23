/* eslint-disable */
//const fs = require("fs");
const jsonld = require('jsonld');
var rdflib = require('rdflib');
const rdfstore = require('rdfstore');

exports.queryRDF = (subject, date, id, value, title) => {
  //console.log(Object.prototype.toString.call("2018-07-12T22:39:08.058Z"))
  var isDateSet = false;
  var graph = new rdflib.IndexedFormula();
  if (subject == null) subject = '?subject';
  if (date == null) { date = '?date' } else {
    date = "<http://xmlns.com/awt/0.1/D" + date + ">"
    isDateSet = true;
  };
  if (id == null) { id = '?id' } else { id = "<http://xmlns.com/awt/0.1/" + id + ">" };
  if (value == null && title == null) { value = '?value'; console.log("hHEREEREEREREREE") } else if (title != null && value == null) { value = title; value = "'" + value + "'"; } else { value = "'" + value + "'"; };
  //if (title==null){title = '?value'}else {title = "'"+title+"'"};
  fs.readFile('extracted.rdf', function (err, data) {
    var srcData = rdflib.parse(data.toString(), graph, "http://schema.org/", 'application/rdf+xml');

    var targetData = rdflib.serialize(srcData, graph, "http://schema.org/", 'text/n3');
    var returnData = { result: [] };
    console.log(targetData)
    rdfstore.create(function (err, store) {
      store.load('text/n3', targetData, function (s, d) {
        var queryString = "SELECT *  WHERE { ?s " + date + " ?o . ?o " + id + " ?result . ?result ?n " + value + "} ";
        console.log(queryString);
        store.execute(queryString, function (success, results) {
          var i;
          console.log(results);

          //  fs.writeFile("currentQuery.json", returnData, 'utf8', function (e, r) {
          //   console.log(e, r)
          // }); // write it back
          //,"date":"","id":"","description":"","value":""
          returnData.result.push({ "column": results[0].o.value });
          var currentTranID = 0;
          for (i = 0; i < results.length; i++) {
            //console.log(results[i]);
            console.log("ALL Column 1:" + JSON.stringify(returnData))
            var addedeCol = false;

            for (var index = 0; index < returnData.result.length; index++) {
              console.log(index)
              if (returnData.result[index].column == results[i].o.value) {
                currentTranID = index;
                addedeCol = true;
              } else {
                console.log("Index" + index)


              }
            }
            console.log("Current Index" + currentTranID);

            if (addedeCol == false) {
              returnData.result.push({ "column": results[i].o.value })
              console.log("Change" + currentTranID);
              currentTranID = currentTranID + 1;
              console.log("Change to" + currentTranID);
              console.log("ID change from" + returnData.result[currentTranID].column)
              console.log("ID change to" + results[i].o.value)

            }
            console.log("ALL Column :" + JSON.stringify(returnData))


            var referIndex = returnData.result[currentTranID];
            var currentData = {};
            if (date == "?date") {
              console.log("Date : " + JSON.stringify(results[i].date.value));
              newDate = "<" + results[i].date.value + ">";
              currentData["date"] = JSON.stringify(results[i].date.value);
              referIndex["date"] = JSON.stringify(results[i].date.value);
            }
            else { console.log("Date : " + date); currentData["date"] = date; newDate = date; referIndex["date"] = date }
            if (id == "?id") {
              console.log("ID : " + JSON.stringify(results[i].id.value));
              newId = "<" + results[i].id.value + ">";
              currentData["id"] = JSON.stringify(results[i].id.value);
              referIndex["id"] = JSON.stringify(results[i].id.value);
            }
            else { console.log("ID : " + id); currentData["id"] = id; newId = id; referIndex["id"] = id }
            if (value == "?value") {

              if (results[i].n.value == "http://xmlns.com/awt/0.1/value") {
                console.log("WTFFFFFFFFFFFFFFFFFFFFFFFFFf")
                console.log("Value : " + JSON.stringify(results[i].value.value));
                currentData["value"] = JSON.stringify(results[i].value.value);
                referIndex["value"] = JSON.stringify(results[i].value.value);
              }
              else
                if (results[i].n.value == "http://xmlns.com/awt/0.1/title") {
                  console.log("Title : " + JSON.stringify(results[i].value.value));
                  currentData["title"] = JSON.stringify(results[i].value.value);
                  referIndex["title"] = JSON.stringify(results[i].value.value);
                } else if (results[i].n.value == "http://xmlns.com/awt/0.1/description") {
                  console.log("Description : " + JSON.stringify(results[i].value.value));
                  currentData["description"] = JSON.stringify(results[i].value.value);
                  referIndex["description"] = JSON.stringify(results[i].value.value);
                }
            } else {
              if (title != null) {
                console.log("Title : " + value);
                currentData["title"] = value;
                referIndex["title"] = value;
                var queryString2 = "SELECT *  WHERE { ?s " + newDate + " ?o . ?o " + newId + " ?result . ?result ?n ?newValue} ";
                console.log(queryString2)
                store.execute(queryString2, function (success, results2) {

                  console.log(results2)
                  for (var k = 0; k < results2.length; k++) {
                    if (results2[k].n.value == "http://xmlns.com/awt/0.1/value") {
                      console.log("Val" + results2[k].newValue.value)
                      currentData["value"] = JSON.stringify(results2[k].newValue.value);
                      referIndex["value"] = JSON.stringify(results2[k].newValue.value);
                    } else if (results2[k].n.value == "http://xmlns.com/awt/0.1/description") {
                      console.log("Des" + results2[k].newValue.value)
                      currentData["description"] = JSON.stringify(results2[k].newValue.value);
                      referIndex["description"] = JSON.stringify(results2[k].newValue.value);
                    }
                  }

                  console.log("Response 3:================== ")
                  console.log(returnData);
                  console.log("========================================= ")

                });
                console.log(currentData)
              } else {
                console.log("Here"); console.log("Value : " + value);
                currentData["value"] = value;
                referIndex["value"] = value;
                var queryString2 = "SELECT *  WHERE { ?s " + newDate + " ?o . ?o " + newId + " ?result . ?result ?n ?newValue} ";
                console.log(queryString2)
                store.execute(queryString2, function (success, results2) {

                  console.log(results2)

                  for (var k = 0; k < results2.length; k++) {
                    if (results2[k].n.value == "http://xmlns.com/awt/0.1/value") {
                      console.log("tiTle" + results2[k].newValue.value)
                      currentData["title"] = JSON.stringify(results2[k].newValue.value);
                      referIndex["title"] = JSON.stringify(results2[k].newValue.value);
                    } else if (results2[k].n.value == "http://xmlns.com/awt/0.1/description") {
                      console.log("Des" + results2[k].newValue.value)
                      currentData["description"] = JSON.stringify(results2[k].newValue.value);
                      referIndex["description"] = JSON.stringify(results2[k].newValue.value);
                    }
                  }

                  // currentData["title"] = JSON.stringify(results2[0].newValue.value);
                  // referIndex["title"] = JSON.stringify(results2[0].newValue.value);
                  // console.log(currentData)

                  console.log("Response 2:================== ")
                  console.log(returnData);
                  console.log("========================================= ")

                });
              }

            }
            // console.log("ID : "+results[i].id)
            //console.log("Value : "+results[i].value.value)



            // console.log(currentData)
            //    returnData.result.push(currentData);

          }
          console.log("Response 1:================== ")
          fs.writeFile("currentQuery.json", JSON.stringify(returnData), 'utf8', function (e, r) {
            console.log(e, r)
          }); // write it back
          console.log(returnData);
          console.log("========================================= ")



        });

      });
    });
  });

  //return returnData;
}

// function getData(queryString2, callback) {
//   var graph = new rdflib.IndexedFormula();
//   // queryString2 = "SELECT *  WHERE { ?s ?date ?o . ?o ?id ?result . ?result <http://xmlns.com/awt/0.1/value> ?newValue} ";
//   fs.readFile('extracted.rdf', function (err, data) {
//     var srcData = rdflib.parse(data.toString(), graph, "http://schema.org/", 'application/rdf+xml');

//     var targetData = rdflib.serialize(srcData, graph, "http://schema.org/", 'text/n3');

//     rdfstore.create(function (err, store) {
//       store.load('text/n3', targetData, function (s, d) {
//         store.execute(queryString2, function (success, results2) {
//           callback(returnData(results2));
//         });
//       });
//     });
//   });
// }

function returnData(data) {
  //console.log(data.length); // 3
  return data;
}

exports.showResult = (value, title, citeria, obj) => {
  var result = [];
  //var obj = JSON.parse(fs.readFileSync('currentQuery.json', 'utf8'));
  //console.log(obj)
  for (var x = 0; x < obj.result.length; x++) {
    obj.result[x].date = obj.result[x].date.substring(obj.result[x].date.lastIndexOf('D') + 1);
    obj.result[x].id = obj.result[x].id.substring(obj.result[x].id.lastIndexOf('/') + 1, obj.result[x].id.length - 1);
    obj.result[x].value = obj.result[x].value.substring(1, obj.result[x].value.length - 1);
    obj.result[x].title = obj.result[x].title.substring(1, obj.result[x].title.length - 1);
    //console.log(title==obj.result[x].title)
    //console.log(obj.result[x].title) 
  }
  //obj.result.removeValue('title',title);
  if (title != null) obj.result =
    obj.result.filter(function (el) { return el.title == title; });
  //findAndRemove(obj.result, 'title', title);
  //console.log(obj)
  if (value != null) {
    for (var i = 0; i < obj.result.length; i++) {
      //console.log()
      if (citeria == "H") {
        if (parseInt(obj.result[i].value) > value) {
          result.push(obj.result[i])
        }
      } else if (citeria == "EQ") {
        if (parseInt(obj.result[i].value) == value) {
          result.push(obj.result[i])
        }
      } else if (citeria == "L") {
        if (parseInt(obj.result[i].value) < value) {
          result.push(obj.result[i])
        }
      }
    }
  } else { result = obj.result }
  //console.log(result)
  return result;
}
