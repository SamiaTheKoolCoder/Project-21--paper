
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var left;
var right;
let engine;
let world;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	//createCanvas(400,400);
    engine = Engine.create();
	world = engine.world;

	ground =new Ground(200,500,2500,20);
	left = new Ground(1100,450,20,120);
	right = new Ground(950,450,20,120)
	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:1.2,
		friction:0,
		density:1.2
	};

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	//Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
 

}


function keyPressed(){
	if (keyCode === UP_ARROW)
	{
			Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:5});	
			
	}
}