Aplicación expressJS
==

Los requisitos para hacer una aplicación en expressjs son:
* Un directorio */public* con los ficheros html,css..etc
* Un directorio */views* con para renderizar las vistas (html's dinámicos)
* La aplicación en sí **app.js**


## Enrutamiento

El enrutamiento determina cómo una aplicación responde ante las peticiones a ciertas rutas.

Las rutas siguen la siguiente estructura `app.METHOD(PATH, HANDLER)`:
- app es una instrancia de express.
- METHOD es alguno de los [métodos http](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
  - get
  - post
  - put
  - delete
  - ...etc
- PATH es la ruta en el servidor
- HANDLER es la funcion que se ejecuta cuando se va a esa ruta.

Por ejemplo....:

~~~
var express = require('express');
var path = require('path');
var app = express(); //Instancia de express
app.listen(process.env.PORT || 8080);

app.use(express.static(path.resolve('/public'))); //middleware

app.get('/', function(request, response){    //Responde con helloWorld
  response.send('Hello World!')              //en la pagina inicial
});

app.post('/', function (request, response) {
  res.send('Got a POST request')
});
~~~
