
var r = 255;
var g = 255;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b
var circ;

function setup(){

  createCanvas(1200,800);
  circ=createSprite(600,600,50,50);
  circ.shapeColor="white";
}


function draw(){
background(r,g,b);
circ.x=World.mouseX;
circ.y=World.mouseY;
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  if (circ.x>0&&circ.x<300){
    r=50;
    g=100;
    b=250;
  }
  if (circ.x>300&&circ.x<600){
    r=70;
    g=170;
    b=210;
  }
  if (circ.x>600&&circ.x<900){
    r=100;
    g=250;
    b=200;
  }
  if (circ.x>900&&circ.x<1200){
    r=112;
    g=30;
    b=220;
  }
  drawSprites();
}