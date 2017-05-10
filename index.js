var app = require('express')();
var express = require ('express');
var http = require('http').Server(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

http.listen(8080, function(){
  console.log('listening on *:3000');

});

