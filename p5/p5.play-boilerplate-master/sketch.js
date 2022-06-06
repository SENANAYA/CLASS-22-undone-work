const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var object;

function setup() {
  createCanvas(400,400);
// object= createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  object=Bodies.rectangle(200,200,50,50);
  World.add(world,object);
}

function draw() {
  Engine.update(engine);
  background("black");  
  rect(object.position.x,object.position.y,50,50);
 // rect(200,200,50,50);
  drawSprites();
}