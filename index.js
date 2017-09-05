var app = require('express')();
var express = require ('express');
var http = require('http').Server(app);
var ip = require("ip");

//MySQL (Deltas)
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//   //host     : process.env.RDS_HOSTNAME,
//   host : 'podia.cvyyr7fp78yy.us-west-2.rds.amazonaws.com',
//   //user     : process.env.RDS_USERNAME,
//   user : 'robert',
//   //password : process.env.RDS_PASSWORD,
//   password : 'asianpat69',
//   //port     : process.env.RDS_PORT
//   port : 3306
// });

app.get('/', function (req, res) {
  res.send('Hello World! captech      '+ip.address());
});
// app.get('/test', function(req,res){
// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   else{
//   	console.log("connected");
//     res.send("Connected successfully");
//   }
//   // connected! 
// });
// console.log("HIT HERE");
// });

http.listen(8080, function(){
  console.log('listening on *:8080');

});

