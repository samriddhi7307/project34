const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(900,700);
  //rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  /*let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options ={
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);*/
    roof1 = new roof (370,300,200,20);

    Pendulum1 = new Pendulum(230,400,10);
    Pendulum2 = new Pendulum(291,400,10);
  	Pendulum3 = new Pendulum(352,400,10);
	  Pendulum4 = new Pendulum(413,400,10);
	  Pendulum5 = new Pendulum(473,400,10);
    
    sling1 = new Sling(Pendulum1.body,roof1.body,-120,0);
    sling2 = new Sling(Pendulum2.body,roof1.body,-60,0);
    sling3 = new Sling(Pendulum3.body,roof1.body,0,0);
    sling4 = new Sling(Pendulum4.body,roof1.body,60,0);
    sling5 = new Sling(Pendulum5.body,roof1.body,120,0);

   // dot1 = new slingshot(Pendulum1.body,roof1.body)
  //	Engine.run(engine);
  
}

function draw() {
  background(15);
  Engine.update(engine); 
  rectMode(CENTER);
  

  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();
  
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
   
 // dot1.display();
}

function mouseDragged()
 { 
      Matter.Body.setPosition(Pendulum1.body,{x: mouseX , y:mouseY}); 
   } 

