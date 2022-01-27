var Ball;
var database;
var position;


function setup(){
  //initialize
  database = firebase.database();

  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  //read operation

  //first step - go to the location in database
  var ballLocation = database.ref("ball/position")
  ballLocation.on("value", readPosition)


}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+10);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref("ball/position").set({
    x : Ball.x + x,
    y : Ball.y + y
  })
}

function readPosition(data){
   position   =  data.val();
   Ball.x = position.x
   Ball.y = position.y
}

