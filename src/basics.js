var express = require('../node_modules/express');
var path = require('../node_modules/path');
var cookieParser = require('../node_modules/cookie-parser');
var router = express.Router();

var app = express();

app.listen(process.env.PORT || 3000);

app.all('/', function (req, res, next) {
  res.send('Peticiónn all');
})

app.get('/get', function (req, res) {
  res.send('Petición get');
})

app.post('/post', function (req, res) {
  res.send('Petición post')
})

app.get('/ab?cd', function (req, res) {
    res.send('<h1> ab?cd ruta ');       //responde a abcd acd
});

app.get('/ab*cd', function (req, res) {
    res.send('abbbbcd');    //responde a  abbbbcd
})

app.get('/users/:uid', function (req, res) {
  res.send('tu uid es: ' + req.params.uid);
});
