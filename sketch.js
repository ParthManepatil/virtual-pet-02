//Create variables here
var dog,happyDog,foodS,FoodStock;
var database;
function preload()
{
  dog1=loadImage("images/dogImg.png")
  //load images here
 happyDog=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dog1);
  dog.scale=0.2;
  FoodStock=database.ref("food");
  FoodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog); 
 }
    drawSprites();
    textSize(20);
    text("food remaining"+foodS,170,200);
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
x=0;
  }
  else{
x=x-1;
  }
  database.ref("/").update({
    food:x 
  });
}



