class Box {
    constructor(x,y,width,height){
        var options = {
            restitution: 1,
            friction: 0,
            density: 1.2
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);    
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("pink");
        rect(0,0,this.width,this.height);
        pop();
    }
}


