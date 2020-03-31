const circuit_size = 0.8
let sensor;
let c = 0;
function setup(){
    createCanvas(800,600);
    background(100);
    drawCircuit();
}

function draw(){
    sensor = new Sensor(width/2,height/2);
    sensor.draw();
    //console.log(mouseX + " " + mouseY);
    if(c == 1){
        sensor.turn_on();
        c = 0;
    }
    console.log(sensor.color);
        
}

function mouseClicked(){
    c++;
}

function drawCircuit(){
    stroke(255);
    strokeWeight(5);
    noFill();
    ellipse(width/2,height/2,width*circuit_size,height*circuit_size);
}