var fixedRect;
var movingRect;

function setup() {
  createCanvas(800,400);
  movingRect  = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -3;
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 3;
}

function draw() {
  background("black"); 
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY
  
  //console.log(movingRect.x-fixedRect.x);
  //collide();
  bounceOff();
  drawSprites();
}