
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime
var  fruit;

var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite (80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width /2
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  
  background("white")
  
  fill ("black")
  text("survivalTime: "+ survivalTime, 300,50);
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if(keyDown("space")&& monkey.y >= 314 ) {
      monkey.velocityY = -14;
    }
  
  food();
  obstacles();
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)) {
     ground.velocityX = 0;
     monkey.velocityY = 0;
     obstacleGroup.setVelocityXEach(0);
     foodGroup.setVelocityXEach(0);
  }
  
  drawSprites();
}

function food() {
   if (frameCount % 80 === 0) {
    var fruit = createSprite(600,120,40,10);
    fruit.y = Math.round(random(200,120));
    fruit.addImage(bananaImage);
    fruit.velocityX = -3;
    fruit.scale = 0.09     
     
    foodGroup.add(fruit)
   }
}

function obstacles() {
  if (frameCount % 300 === 0){
   var obstacle = createSprite(300,320,50,20)
   obstacle.addImage(obstacleImage)
   obstacle.velocityX=-4
   obstacle.scale=0.2
    
   obstacleGroup.add(obstacle)
  }
}





