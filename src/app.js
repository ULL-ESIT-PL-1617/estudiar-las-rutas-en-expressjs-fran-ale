var express = require('../node_modules/express');
var app = express();
var routerexample = require('./routerExample.js');

app.listen(process.env.PORT || 8080);
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response, next){
  response.send("Peiticion " + request.method + " a la" + request._parsedOriginalUrl.path);
});

app.post('/contact', function(request, response, next){
  //Peiticion post a la ruta contact
});

app.get('/abc?d', function (request, response, next) {
  //la 'c' es opcional en la ruta. tambien se pueden usar otra expresiones regulares +,*,[]..etc
  response.send("Ruta: " + request._parsedOriginalUrl.path);
});

app.use('/router-example', routerexample);

console.log('Running app at: ' + app.listen().address().port);
