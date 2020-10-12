class Ground{

    constructor(){
        var options = {isStatic : true}
        this.body = Bodies.rectangle(width/2,780,width,20,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill(255);
        rectMode(CENTER);
        rect(pos.x,pos.y,width,20);
    }
}