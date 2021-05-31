
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var ball1, rope;

function preload() {

}
function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  roof = new Roof(400, 100, 500, 20)

  ball1 = new Bob(200, 500, 40, 40);
  ball2 = new Bob(300, 500, 40, 40);
  ball3 = new Bob(400, 500, 40, 40);
  ball4 = new Bob(500, 500, 40, 40);
  ball5 = new Bob(600, 500, 40, 40);

  rope1 = new Rope(ball1.body, roof.body, -200, 0)
  rope2 = new Rope(ball2.body, roof.body, -100, 0)
  rope3 = new Rope(ball3.body, roof.body, 0, 0)
  rope4 = new Rope(ball4.body, roof.body, 100, 0)
  rope5 = new Rope(ball5.body, roof.body, 200, 0)
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("green");
  roof.display()
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();

}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(ball1.body, ball1.body.position, { x: -50, y: -40 })
  }
}