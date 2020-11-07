 
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;
 const Constraint = Matter.Constraint;

 var man;
 var ground,plat1,plat2; 
 var ground2;

 function preload(){
   back = loadImage("grass.png");
 }


function setup() {

  engine = Engine.create();
  world = engine.world;

 //Create the Bodies Here.

Engine.run(engine);

//creating a canvas
createCanvas(1900,400);



//ground
ground = new Ground(200,380,3500,10)
ground2 = new Ground(440,370,200,20);

// the pc 
man = new Player(200,300,20,20);

//over here plat is platform
plat1 = new Platform(400,315,35,35); 
plat2 = new Platform(460,315,35,35); 
plat3 = new Platform(800,350,35,50); 
plat4 = new Platform(1000,350,35,50); 

// over here obs refers to obstcale 
obs1 = new Obstacle(900,350,30,30);

 

console.log("plat1_options--->"+ plat1);
console.log(plat1);
console.log(man);


}

function draw() {

  background("green");  
  drawSprites();
  ground.display();
  ground2.display();

  man.display();

  plat1.display(); 
  plat2.display();
  plat3.display();
  plat4.display();

  obs1.display();

 text("welcome hope you enjoy our game!",200,200,500,500);

image(back,400,225,160,190)
image(back,340,225,160,190)

}

function keyPressed() {
if(keyCode===32){
  man.jump();

}

 
}





 


