var Ball, db;
var position;


function setup(){
  //initialize
  db = firebase.database();

  createCanvas(500,500);

  Ball = createSprite(250,250,10,10);
  Ball.shapeColor = "red";

  //read operation

  //first step - go to the location in database
  var ballLocation = db.ref("ball/position")
  ballLocation.on("value", readPosition)


}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  db.ref("ball/position").set({
    x : Ball.x + x,
    y : Ball.y + y
  })
}

function readPosition(data){
   position   =  data.val();
   Ball.x = position.x
   Ball.y = position.y
}

