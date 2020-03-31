class Sensor{
    constructor(x,y){
        this.color = 0;
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
    }

    draw(){
        strokeWeight(1);
        fill(this.color);
        rect(this.x,this.y,this.width,this.height);
    }
    
    turn_on(){
        this.color = "red";
    }

    turn_off(){
        this.color = 0;
    }
}