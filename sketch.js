
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree, ground;
var engine, myWorld;
var boyImage
var mango1,mango2,mango3,mango4,mango5;
var slingShot,stone;

function preload(){
	img = loadImage("tree.png");
	boyImage = loadImage("boy1.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	myWorld = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,670);
	mango1 = new Mango(690,300);
	mango2 = new Mango(550,250);
	mango3 = new Mango(430,350);
	mango4 = new Mango(530,368);
	mango5 = new Mango(770,343);
	stone = new Stone(170,520)
	slingShot = new SlingShot(stone.body,{x:170,y:520})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground.display();
  imageMode(CENTER);
  image(img,600,430,480,500);
  image(boyImage,250,600,250,250);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}


function mouseDragged(){
Body.setPosition(stone.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){
	slingShot.fly();
}

function detectCollision(stone,mango){
mangoP = mango.body.position
stoneP = stone.body.position

var distance = dist(stoneP.x,stoneP.y, mangoP.x, mangoP.y)
if(distance<= mango.r+stone.r){
Body.setStatic(mango.body,false);
}
}