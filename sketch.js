var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;

function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);
  pin1=createSprite(200,300,20,20);
  pin2=createSprite(180,320,20,20);
  pin3=createSprite(220,320,20,20);
  pin4=createSprite(160,340,20,20);
  pin5=createSprite(200,340,20,20);
  pin6=createSprite(240,340,20,20);
  
  squariad.velocity.y = 10;
  squariad.velocity.x =4;
}
   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  squariad.bounceOff(pin1);
  squariad.bounceOff(pin2);
  squariad.bounceOff(pin3);
  squariad.bounceOff(pin4);
  squariad.bounceOff(pin5);
  squariad.bounceOff(pin6);
  pin1.bounceOff(edges);
  pin2.bounceOff(edges);
  pin3.bounceOff(edges);
  pin4.bounceOff(edges);
  pin5.bounceOff(edges);
  pin6.bounceOff(edges);
  pin1.bounceOff(pin2);
  pin1.bounceOff(pin3);
  pin1.bounceOff(pin4);
  pin1.bounceOff(pin5);
  pin1.bounceOff(pin6);

  pin2.bounceOff(pin3);
  pin2.bounceOff(pin4);
  pin2.bounceOff(pin5);
  pin2.bounceOff(pin6);

  pin3.bounceOff(pin4);
  pin3.bounceOff(pin5);
  pin3.bounceOff(pin6);


  pin4.bounceOff(pin5);
  pin4.bounceOff(pin6);
  
  pin5.bounceOff(pin6);

pin1.velocityX=10;
pin1.velocitY=10;

pin2.velocityX=4;
pin2.velocitY=0.5;

pin3.velocityX=4;
pin3.velocitY=0.5;

pin4.velocityX=4;
pin4.velocitY=0.5;

pin5.velocityX=4;
pin5.velocitY=0.5;

pin6.velocityX=4;
pin6.velocitY=0.5;
  drawSprites();
}