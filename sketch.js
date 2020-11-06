
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
var ground,paper,dustbin1,dustbin2,dustbin3







function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,350,800,230)

paper=new Paper(200,250,50)
dustbin1=new Dustbin(600,450,70,20)
dustbin2=new Dustbin(575,450,20,70)
dustbin3=new Dustbin(625,450,70,20)
	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



