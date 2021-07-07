
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground (400,340,800,15);
    paper = new Ball(100,330);
    
	
    
    dustbin = new Dustbin(600,305)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

 paper.display();
 dustbin.display();
 ground.display();
 
 
 
 
}

function keyPressed(){
    if (keyCode === UP_ARROW ) {

       Matter.Body.applyForce(paper.body,paper.body.position,{x:36,y:-36});

    }
}

