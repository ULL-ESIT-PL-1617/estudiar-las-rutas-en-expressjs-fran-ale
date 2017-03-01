var express = require('express');
var path = require('path');
var app = express();

app.listen(process.env.PORT || 8080);
app.use(express.static(path.resolve('htmls')));

app.get('/', function(request, response){
  response.sendFile('htmls/index.html');
});

console.log('Running at localhost:'+ app.listen().address().port);
