class Particle{
  constructor(x,y){
    this.desire = createVector(x,y);
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.maxspeed = 2;
  }

  //Seek Desire encuentra mi vector del deseo con respecto a la posicion de mi particula
  seekDesire(desire){
    let desiredVector = p5.Vector.sub(desire,this.pos);
    let magnitudeDVector = desiredVector.mag();
    let speed = this.maxspeed;
    if(magnitudeDVector <= this.maxspeed+0.1){
      speed = 0;
    }
    desiredVector.setMag(speed);
    return desiredVector;
  }

  //calcSteering calcula el steering force con la formula: deseo - velocidad (deseo es con respecto a la particula)
  calcSteering(desire){
    let steering = p5.Vector.sub(this.seekDesire(desire),this.vel);
    return steering;
  }

  //aplica el steering force a la aceleracion (principio fisico del comportamiento)
  applySteering(){
    this.acc.add(this.calcSteering(this.desire));
  }

  show(){
    stroke(250,210,210);
    strokeWeight(7);
    point(this.pos.x,this.pos.y);
  }

  move(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0)
      this.vel = p5.Vector.random2D();
  }

  steer(){
    this.acc.mult(0);
    this.applySteering();
  }
}
