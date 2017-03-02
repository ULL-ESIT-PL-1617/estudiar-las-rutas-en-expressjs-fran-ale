var express = require('express');
var router = express.Router();

router.use(function (req, res, next){ //ejemplo Middleware
  //codigo que se ejecuta cada vez que accedamos a localhost:puerto/router-example
  console.log('Middleware /router-example');
  next(); //para pasar al siguiente middleware/ruta
});

router.get('/', function(req, res, next){
  res.send('<h1> etiquetas html </h1> <br> <img src="/kitten.jpg"/>');
});

router.get('/:example', function(req, res) {        //funcion de la raiz
  res.send("This is an " + req.params.example);
});

module.exports = router;    //exportamos router
