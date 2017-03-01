Middleware en express
==

Expresss utiliza una serie de funciones middleware las cuales tienen acceso al objeto de solicitud(req), al de respuesta(res) y a la siguiente función de middleware en el ciclo de solicitud/respuesta la cual se denota normalmente con la variable next.

~~~
var app = express();

app.use(function (req, res, next) {
  console.log('Probando middleware');
  next();
});
~~~

Estas funciones permiten ejecutar codigo, realizar cambios en la solicitud y objetos de respuestas, finalizar el ciclo de solicitud respuesta o invocar la siguiente funcion en pila;

Express utiliza diferentes tipos de middleware:

- De nivel de aplicación
- De nivel de direccionador
- De nivel de manejo de errores
- Incorporado
- De terceros

### Midleware de nivel de Aplicación

Consiste en una instancia del objeto de aplicación utilizando las funciones app.use() y app.METHOD(), en el que METHOD es el método HTTP que maneja la función de middleware.

En ejemplo siguiente encontramos una funcion sin ninguna ruta de montaje, por lo que se ejecuta cada vez que la aplicación recibe una solicitud.
~~~
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
~~~
La función next() deja el control a la siguiente función middleware.

~~~
app.get('/img', function (req, res, next) {
  res.send('Carpeta img');
});
~~~


A continuacion tenemos un ejemplo de uso de next('route'), el cual deje el control a la siguiente ruta.
~~~
app.get('/user/:id', function (req, res, next) {
  if (req.params.id == 0) next('route');
  else next();
}, function (req, res, next) {
  res.render('else');
});

app.get('/user/:id', function (req, res, next) {
  res.render('vista');
});
~~~

### Middleware de nivel de direccionador

Este midddleware funciona igual que el de nivel de Aplicación.
