
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var dustbin1,dustbin2,dustbin3;
var environment , backgroundImg;
function preload()
{
	backgroundImg = loadImage("summer-city-park-background-vector-21066601.jpg");	
}

function setup() {
	var canvas = createCanvas(800, 700);
	
	environment = createSprite(400,400,800,700);
	environment.addImage(backgroundImg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,500);
	dustbin1 = new Dustbin(540,600,20,100);
	dustbin2 = new Dustbin(650,629,200,20);
	dustbin3 = new Dustbin(750,600,20,100);
	ground = new Ground(400,650,800,20);

	Engine.run(engine);
  
}


function draw() {
  background("lightblue");
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 
  if(keyDown(UP_ARROW)){
	keypressed();
  }
}
function keypressed(){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-20});
}

