var database;
var form,player,game;
var gameState=0;
var playerCount;
var distance = 0;
var allPlayers;
var car1, car2, car3, car4;
var cars;
 var xVel;
var yVel;
var finishedPlayers;
var f2;
var f1;
var w,h;
var obstacles;
var i;
var s;

var car1_img,  car2_img, car3_img, car4_img;
var track;
var goldImg, silverImg, bronzeImg;
var passedFinish;

function preload(){
  car1_img= loadImage("images/car1.png")
  car2_img= loadImage("images/car2.png")
  car3_img= loadImage("images/car3.png")
  car4_img = loadImage("images/car4.png")
  track= loadImage("images/track.jpg");
  f2=loadImage("images/f1.png");
   s=loadSound("sounds/sliding.mp3");
   goldImg=loadImage("images/gold.png")
   silverImg=loadImage("images/silver.png")
bronzeImg=loadImage("images/bronze.png");
}



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight);
  finishedPlayers = 0;

  obstacles = createGroup();
 
 game=new Game();
 game.getState()
 game.start();
yVel= 0;
xVel= 0;

for (i = 0; i<5; i++){
  w=random(200,950);
    h=random(-height*4,height-300);
    f1=createSprite(w,h);
    f1.addImage("f1",f2);
    obstacles.add(f1);
   }

}

function draw(){

  if (playerCount === 4 && finishedPlayers===0 ) {
    game.update(1);
  }





if (gameState===1){
  clear()
  game.play()
}



if (finishedPlayers===4) {
  
  game.update(2);
}
if(gameState===2 &&finishedPlayers===4){
  game.displayRanks();
 
}



}

