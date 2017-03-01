var express = require('../node_modules/express');
var path = require('../node_modules/path');
var cookieParser = require('../node_modules/cookie-parser');

var app = express();

app.listen(process.env.PORT || 8080);
app.use(express.static(path.resolve('public')));

app.get('/', function(request, response, next){

  response.send("hola");
  
});


console.log('Running app at: 8080')
