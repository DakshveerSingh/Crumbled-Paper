class DustBin{
    constructor(x,y){
      var options = {isStatic : true}
      this.body1 = Bodies.rectangle(x-110,y-40,20,100,options);
      World.add(world,this.body1);
      this.body2 = Bodies.rectangle(x+110,y-40,20,100,options);
      World.add(world,this.body2);
      this.body3 = Bodies.rectangle(x,y,200,20,options);
      World.add(world,this.body3);
    }
    display(){
      var pos1 = this.body1.position;
      var pos2 = this.body2.position;
      var pos3 = this.body3.position;

      rectMode(CENTER);
      fill("red");
      stroke("red");
      rect(pos1.x,pos1.y,20,100);
      rect(pos2.x,pos2.y,20,100);
      rect(pos3.x,pos3.y,200,20);
    }
}