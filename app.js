var express = require('express');
var path = require('path');
var app = express();

app.listen(process.env.port || '8080');
app.use(express.static(__dirname + "/htmls"));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

console.log('Running at localhost:'+ app.listen().address().port);
