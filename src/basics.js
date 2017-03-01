var express = require('../node_modules/express');
var path = require('../node_modules/path');
var cookieParser = require('../node_modules/cookie-parser');

var app = express();

app.listen(process.env.PORT || 3000);

app.all('/', function (req, res, next) {
  res.send('Peticiónn all');
})

// app.get('/get', function (req, res) {
//   res.send('Petición get');
// })

app.post('/get', function (req, res) {
  res.send('Petición post')
})


app.get('/ab?cd', function (req, res) {
    res.send(req.params.uid);       //responde a abcd acd
});

app.get('/ab*cd', function (req, res) {
    res.send(req.params.uid);    //responde a  abbbbcd
})

app.get('/users/:uid', function (req, res) {
  res.send(req.params.uid);
});
