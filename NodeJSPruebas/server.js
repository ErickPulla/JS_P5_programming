
//Comienzo del express
/*Express es una aplicacion web que nos permite hacer un web server que hostee nuestro proyecto (codigos)*/
var express = require('express'); //No olvidar de instalar express con: npm install express --save
var app = express();
var server = app.listen(3000);//Mi programa estara en el sgte link -> localhost:3000
//var server = app.listen(3000,'http://192.168.100/');

app.use(express.static('public'))

console.log("My server is running")

//Comienzo del socket
/*Los sockets nos permiten la comunicacion entre 2 entidades (pueden ser procesos, computadores, etc) en un servidor*/
var socket = require('socket.io');//No olvidar de instalar express con: npm install socket.io --save
var io = socket(server);

//Dentro de la funcion .on, necesitamos un evento y un handler que maneje al evento. En este caso, el evento es 'connection' y el handler es la funcion newConnection
io.sockets.on('connection',newConnection);
function newConnection(socket){
  console.log('New Connection: '+ socket.id);
  socket.on('mouse_data',mouseMsg);//Recibo el mensaje llamado "mouse_data" y activo la funcion mouseMsg

  function mouseMsg(data){//funcion que carga los datos recibidos de una computadora
    socket.broadcast.emit('mouse_data',data);//emito los datos de "mouse_data" de vuelta a las computadoras
    //io.sockets.emit('mouse_data',data); //otra forma de escribir el emit
    //console.log(data);//imprimir las direccio X y Y de mouse
  }
}
