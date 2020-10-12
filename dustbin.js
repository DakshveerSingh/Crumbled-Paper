class Bin{
    constructor(){
      this.body1 = Bodies.rectangle((width/2)-110,590,20,100);
      World.add(world,this.body1);
      this.body2 = Bodies.rectangle((width/2)+110,590,20,100);
      World.add(world,this.body2);
      this.body3 = Bodies.rectangle(width/2,640,200,20);
      World.add(world,this.body3);
    }
    display(){
      var pos1 = this.body1.position;
      var pos2 = this.body2.position;
      var pos3 = this.body3.position;

      rectMode(CENTER);
      fill("red");
      stroke("red");
      rect(pos1.x,pos1.y);
      rect(pos2.x,pos2.y);
      rect(pos3.x,pos3.y);
    }
}