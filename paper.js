class Paper{
    constructor(x,y,radius){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.3
        }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(0);
        stroke(0);
        ellipse(pos.x,pos.y,20,20);

    }
}