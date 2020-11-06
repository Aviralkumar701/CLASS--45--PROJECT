var player1,player1_image,player2,player2_image,goalkeeper1,goalkeeper2,ball,ball_image,field;

function preload(){
  ball_image = loadImage("ball.png")
  player1_image = loadImage("player1.png")
  player2_image = loadImage("player2.png")
  field  = loadImage("field.jpg")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
  player1 = createSprite(windowWidth/2-70,windowHeight/2,20,20)

  player2 = createSprite(windowWidth/2+70,windowHeight/2,20,20)

  goalkeeper1 = createSprite(windowWidth/2-500,windowHeight/2,20,20)

  goalkeeper2 = createSprite(windowWidth/2+500,windowHeight/2,20,20)

  ball = createSprite(windowWidth/2,windowHeight/2,20,20)
  ball.velocityX = random(-4,4) 
  ball.velocityY = random(-4,4)
  ball.addImage(ball_image)
  ball.scale = 0.10
  player1.addImage(player1_image)
  player1.scale = 0.3
  player2.addImage(player2_image)
  player2.scale = 0.3

}

function draw() {
  background(field);  
  
  edges = createEdgeSprites()

  ball.bounceOff(edges[0])
  ball.bounceOff(edges[1])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
  ball.bounceOff(player1)
  ball.bounceOff(player2)
  ball.bounceOff(goalkeeper1)
  ball.bounceOff(goalkeeper2)


  if (keyDown("UP_ARROW")) {
   player1.y = player1.y - 5
   }
  
  if (keyDown("DOWN_ARROW")) {
     player1.y = player1.y + 5
  }

  if (keyDown("LEFT_ARROW")) {
    player1.x = player1.x - 5
  }
   
  if (keyDown("RIGHT_ARROW")) {
      player1.x = player1.x + 5
  }

 
 
  if (keyDown("W")) {
    player2.y = player2.y - 5
    }
   
   if (keyDown("S")) {
      player2.y = player2.y + 5
   }
 
   if (keyDown("A")) {
     player2.x = player2.x - 5
   }
    
   if (keyDown("D")) {
       player2.x = player2.x + 5
  }

    if (player1.isTouching(edges[0])) {
      textSize(50);
      text("Yellow card player1!",windowWidth/2-150,windowHeight/2)
      
  }

  if (player1.isTouching(edges[1])) {
    textSize(50);
    text("Yellow card player1!",windowWidth/2-150,windowHeight/2)
   
  }

  if (player1.isTouching(edges[2])) {
    textSize(50);
    text("Yellow card player1!",windowWidth/2-150,windowHeight/2)
    
  }

  if (player1.isTouching(edges[3])) {
    textSize(50);
    text("Yellow card player1!",windowWidth/2-150,windowHeight/2)
  
  }

  if (player2.isTouching(edges[0])) {
    textSize(50);
    text("Yellow card player2!",windowWidth/2-150,windowHeight/2)
  
  }

  if (player2.isTouching(edges[1])) {
    textSize(50);
    text("Yellow card player2!",windowWidth/2-150,windowHeight/2)
   
  }

  if (player2.isTouching(edges[2])) {
    textSize(50);
    text("Yellow card player2!",windowWidth/2-150,windowHeight/2)
    
  }

  if (player2.isTouching(edges[3])) {
    textSize(50);
    text("Yellow card player2!",windowWidth/2-150,windowHeight/2)
   
  }

  if (player1.isTouching(player2)) {
    textSize(50)
    text("You loose!",windowWidth/2,windowHeight/2)
    ball.visible(0)
  }

  if (keyDown("ENTER")) {
    ball.velocityX = random(6,10)
    ball.velocityY = random(6,10)
  }

  if (keyDown("SHIFT")) {
    ball.velocityX = random(-4,4)
    ball.velocityY = random(-4,4)
  }

  



 
 
  drawSprites();

  }
