var ship, ship2
var seaImg
var sea
function preload(){
ship2=loadAnimation("ship-1.png","ship-2.png");
seaImg=loadImage("sea.png");



}

function setup(){
  createCanvas(400,400);
sea = createSprite(200,200);
sea.addImage("sea.png",seaImg);
sea.scale = -13;
ship = createSprite(200,350);
ship.addAnimatio("flutuando",ship2);
ship = -13;
}

function draw() {
  background("blue");
    drawSprites();
sea.velocityX = -4;
 if (sea.x < 0){
sea.x = sea.width/2;
}
}
