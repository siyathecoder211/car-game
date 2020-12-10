var car, wall, road;
var speed, weight;

function setup() {
  createCanvas(800,400);
  
  road = createSprite(400,200,800,150);
  road.shapeColor = "gray";

  lanes();

  car = createSprite(660,200,70,40);
  car.shapeColor = "blue";

  wall = createSprite(10,200,20,height/2);
  wall.shapeColor = "darkred";

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed * -1;

}

function draw() {
  background("lightblue");  

  carCrash();

  drawSprites();
}