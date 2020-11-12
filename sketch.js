
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400)
  
  monkey=createSprite(90,315)

  monkey.addAnimation('moving',monkey_running)
  monkey.scale=0.1
  ground=createSprite(300,350,1200,10)
  ground.velocityX=-4
  
  survivalTime=0
  
  FoodGroup=new Group()
  obstacleGroup=new Group()
}


function draw() {

  background(255)


  
 if(keyDown("space")&& monkey.y >= 161.5) {
        monkey.velocityY = -12;
 }
    
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  if(ground.x<0  )
    {
  ground.x=ground.width/2
  } 
  
  
  monkey.collide(ground)
  
  spawnFood();
  
  spawnObstacles();
  
  
  
  drawSprites();

  stroke('black')
  textSize('20')
  fill(0)
  survivalTime=Math.ceil(frameCount/frameRate())
  text('Survival Time '+survivalTime ,100,50)
}

function spawnFood() {
  //write code here to spawn the clouds
 if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  //write code here to spawn the clouds
 if (frameCount % 200 === 0) {
    var obstacle = createSprite(800,320,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    

    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}

