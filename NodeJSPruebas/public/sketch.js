var socket;

function setup(){
  createCanvas(800,600);
  background(51);
  socket = io.connect('http://172.19.27.17:3000');
  socket.on('mouse_data',newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(255,0,100);
  square(data.x,data.y,36,36);
}

/**
* mouseDragged significa que mantengo el click y lo arrastro
**/
function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);
  var data = {
    x: mouseX,
    y: mouseY
  };

  socket.emit('mouse_data',data);//enviar datos al host, en server.js se recibe los datos con el nombre "mouse_data"
}

function draw(){
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,36,36);
}
