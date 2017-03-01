var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {        //funcion de la raiz
  res.send('Bienvenido a la funcion de express.Router');
});

module.exports = router;    //exportamos router
