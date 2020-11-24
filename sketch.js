//Create variables here
var  database,dog,happyDog,foodS,foodStock,Dog;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  Dog=createSprite(250,250,25,25);
  Dog.addImage(dog);
  Dog.scale=0.2;
}


function draw() {  
background(46,139,87);

writeStock();

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  Dog.addImage(happyDog)
}
  drawSprites();
  //add styles here

}

function readStock(data){
 foodS=data .val();
}

function writeStock(x){


  database.ref('/').update({
    
    Food:x
  })
}

