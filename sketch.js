const {Engine, World, Bodies, Body, Constraint} = Matter;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var roof = new Roof(width/2, height/2 -100, 30, 20)

	var bob3 = new Bob(width/2, height/2 + 100, 8);
	var bob2 = new Bob(bob3.body.position.x-16, bob3.body.position.y, 8);
	var bob1 = new Bob(bob2.body.position.x-16, bob2.body.position.y, 8);
	var bob4 = new Bob(bob3.body.position.x + 16, bob3.body.position.y, 8);
	var bob5 = new Bob(bob4.body.position.x + 16, bob4.body.position.y, 8)

	var string1 = new String(bob1.body.position.x, roof.y, bob1);
	var string2 = new String(bob1.body.position.x, roof.y, bob2);
	var string3 = new String(bob1.body.position.x, roof.y, bob3);
	var string4 = new String(bob1.body.position.x, roof.y, bob4);
	var string5 = new String(bob1.body.position.x, roof.y, bob5);

	Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	}
}


function draw() {
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}