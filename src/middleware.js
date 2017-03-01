var express = require('../node_modules/express');
var app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static('src'));     //ejemplo de middleware estáticos

app.get('/user/:id', function (req, res, next) {
  if (req.params.id == 0) {        //ejemplo de uso de middlewares de Aplicación
    res.send("id = 0") ;
    next('route');                 //salta a la siguiente ruta de la aplicacion
  }
  else next();                    //salta a la siguiente función
}, function (req, res, next) {    //función else
  res.send('función else');
});                       //siguiente función middleware

app.get('/', function (req, res, next) {
  res.send('<h2> Accediendo a la raiz "\/"\ ');            //
});

// // cargando el middleware cookieSesion
var cookieParser = require('../node_modules/cookie-parser');
app.use(cookieParser());


//manejo de errores
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Error');
});
