var app = require('express')();
var express = require ('express');
var http = require('http').Server(app);
var ip = require("ip");

app.get('/', function (req, res) {
  res.send('Hello World!       '+ip.address());
});

http.listen(8080, function(){
  console.log('listening on *:8080');

});

