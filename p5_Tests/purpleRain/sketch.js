let ip = 'http://192.168.100.124:3000';
let rain = [];
let n = 800;
let isWind = true;
function setup(){
  socket = io.connect(ip);
  createCanvas(800,600);
  for(let i = 0;i<n;i++)
    rain[i] = new Drop(isWind);
}

function draw(){
  background(255,220,250);
  for(let i = 0;i<n;i++){
    rain[i].show();
    rain[i].fall();
  }
}
