
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,10,10);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.15;

  ground = createSprite(200,380,400,42);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
}


function draw() {
  background(rgb(240,255,240));
  
  //jump when the space key is pressed
  if(keyDown("space")&& monkey.y >= 100) 
  {
    monkey.velocityY = -12;
  }
  //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground); 
  
  stroke("black");
  textSize = 30;
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:" + survivalTime,100,100);
  
  
  
  createObstacles();
  createBanana();
  drawSprites();
}

 function createBanana()
{
  if(frameCount % 80 === 0)
  {
    banana = createSprite(400,200,10,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -9;
    banana.y = Math.round(random(120,200))
    banana.lifeime = 100; 
    banana.debug = false;
    banana.lifetime = 100;
    bananaGroup.add(banana);
  }
  
}

function createObstacles()
{
  if(frameCount % 300 === 0)
     {
     obstacle = createSprite(400,332,10,10);
     obstacle.addImage(obstacleImage);
     obstacle.scale = 0.15;
     obstacle.velocityX = -9;
     obstacleGroup.add(obstacle);
     }
  
}


