class Drop{
  constructor(isWind){
    this.x = random(width);
    this.y = random(-100,height);
    this.z = random(2);
    this.fallSpeed = random(3,8);
    this.wind = 0;
    if(isWind)
      this.wind = 2;
  }

  show(){
    stroke(230,20,240);
    strokeWeight(this.z);
    line(this.x,this.y,this.x+this.wind,this.y+5);
    if(this.y+5 > height)
      this.y = random(-100,0);
    if(this.x+this.wind > width)
      this.x = random(-100,0);
  }

  fall(){
    this.y = this.y + this.fallSpeed;
    this.x = this.x + this.wind;
  }
}
