//background: 60,60,60
//LettersShape: 250,210,210
//let ip = "http://172.19.31.34:3000";
let name = 'DENISSE';
let particles = [];
let c = 0;
function loadParticles(pointsArr){
  for(let i = 0;i<pointsArr.length;i++){
    let pt = pointsArr[i];
    particles.push(new Particle(pt.x,pt.y));

  }
}

function preload(){
  font = loadFont('Wonder_Boys.ttf');
}

function mouseClicked(){
  if(mouseX <= (width/2)+100 && mouseY <= (height/2)+100)
    c=1;

}

function setup(){
  //socket = io.connect(ip);
  var cnv = createCanvas(1000,600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  textFont(font);
  let pointsArr = font.textToPoints(name,(width-(name.length*75))/2,350,175);
  loadParticles(pointsArr);

}

function draw(){
  background(60,60,60);
  fill(90,220,241);
  if(c != 0)
    fill(60,60,60);
  noStroke();
  circle(width/2,height/2,100);
  for(let i = 0;i<particles.length;i++){
    let ptcle = particles[i];
    ptcle.show();
    ptcle.move();
    if(c!=0)
      ptcle.steer();
  }
}
