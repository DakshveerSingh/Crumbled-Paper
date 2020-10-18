
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustBin;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	dustBin = new DustBin(700,570);
	paper = new Paper(100,650,70);

	Engine.run(engine);
  
}


function draw() {
	console.log(dustBin.position);
  background(201);
  
	ground.display();
	paper.display();
	dustBin.display();

	keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85});

	}
}