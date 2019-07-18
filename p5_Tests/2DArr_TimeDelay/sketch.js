//Colored 2D Array with a time delay in ms

let ip = 'http://192.168.100.124:3000';
let rows;
let columns;
let delay = 100; //time sleep en ms
let slider;
function setup(){
  //createP('Hola Josue :D');
  socket = io.connect(ip);
  createCanvas(600,600);
  rows = 30;
  columns = 30;
  slider = createSlider(0, 1000, 500);
  slider.position(20, 650);
  background(0);
  setTimeout(drawColoredArray,delay);
}

function drawColoredArray(){
  for(let i = 0;i<rows;i++){
    for(let j = 0;j<columns;j++){
      let x = i*30;
      let y = j*30;
      stroke(255);
      strokeWeight(2);
      fill(random(255),random(255),random(255));
      rect(x,y,30,30);
    }
  }
  setTimeout(drawColoredArray,delay);
}

function draw(){
  delay = 1000 - slider.value();
}
