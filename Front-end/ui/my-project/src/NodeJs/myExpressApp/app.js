var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const api = require('/home/p/Documents/AWT/Front-end/ui/my-project/src/NodeJs/API/api.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();
var fs = require('fs');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/blockchain/:deviceId/:value', function(req, res) {

  api.updateValue("0xb905665c381ce7ed2a859fefb65bd42117dfacfd","0xa1dc48f251089d9d7f177c123bf9a7fd750142db"
    ,req.params.deviceId,req.params.value);
  res.send("Complete");
});
app.get('/writeFile', function(req, res) {
  var path = "../API/"+req.query.file;
  console.log(path)
  console.log(req.query.json)
  fs.writeFile(path, req.query.json, 'utf8', function (e, r) {
    console.log(r)
  }); // write it back
  res.send("Complete");
});
app.get('/writeFile2', function(req, res) {
  var path = "../API/"+req.query.file;
  console.log(path)
  console.log(req.query.json)
  var newJson = req.query.json.replace(/@/g , "#")
  fs.writeFile(path, nweJson, 'utf8', function (e, r) {
    console.log(r)
  }); // write it back
  res.send("Complete");
});
app.post('/writeFile', function(req, res) {
  var path = "../API/"+req.body.file;
  console.log(path)
  console.log(req.body.json)
  fs.writeFile(path, req.body.json, 'utf8', function (e, r) {
    console.log(r)
  }); // write it back
  res.send("Complete");
});

app.get('/readFile', function(req, res) {
  console.log(req.query.file);
  var path = "../API/"+req.query.file;
  console.log(path);
  fs.readFile(path, 'utf8', function readFileCallback(err, data) {
    console.log(data)
    res.send(data);
  }); // write it back
  
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
