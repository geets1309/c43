class Game{
    constructorer (){

    }
    getState(){
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val();
}
)
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    

async start(){
    if(gameState===0){
player=new Player();
 var playerCountRef=await database.ref("playerCount").once("value")
if (playerCountRef.exists ())
{
    playerCount=playerCountRef.val()
    player.getCount()
}
        form=new Form()
        form.display();
    }
car1 = createSprite(100, 200)
car1.addImage("car1", car1_img);
car1.debug="true";

car2 = createSprite(300,200);
car2.addImage("car2", car2_img)
car2.debug="true";

car3 = createSprite(500, 200);
car3.addImage("car3", car3_img);
car3.debug="true";

car4 = createSprite(700, 200);
car4.addImage("car4", car4_img)
car4.debug="true";

cars= [car1, car2, car3, car4] ;
passedFinish="false";
}

play(){


form.hide();
textSize(30)
 text("game start", 120,100)
Player.getPlayerInfo();
player.getFinishedPlayers();

if(allPlayers!==undefined){
image(track, 0, -displayHeight *4, displayWidth , displayHeight *5);

  //  var display_position=130;
    var x = 200;
    var y;
    var index = 0;

    for(var plr in allPlayers){
        index=index+1;
        
        x=200+(index*200)+allPlayers[plr].xPos;
        y=displayHeight-allPlayers[plr].distance;
        

        cars[index-1].x = x;
                cars[index-1].y = y;
        textSize(20);
        textAlign(CENTER);
        text(allPlayers[plr].name, cars[index-1].x, cars[index-1].y+75);
        
        if(index===player.index){
        //fill ("red")
        cars[index-1].shapeColor="red";
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y;

if (cars[index-1].isTouching(obstacles)){
    s.play();
    yVel-=0.9;
}

        }
        else
        fill ("black")
   // display_position+=20;
    //textSize(20)
    //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
}}





if(player.distance<3690){
    

if(keyIsDown(38)  && player.index!==null){
yVel+= 0.9;

if(keyIsDown(37)){
xVel-= 0.2;
}
if(keyIsDown(39)){
xVel+= 0.2;
}}

else if(keyIsDown(38)&&yVel>0&&player.index!==null){
    yVel-=0.1;
    xVel*=0.9;
}

else{
    xVel*=0.985;
    yVel*=0.985;
}


}
else if(passedFinish===false){
    yVel*=0.7;
    xVel*=0.7;

    Player.updateFinishedPlayers();
    player.place=finishedPlayers;
    player.update();
    passedFinish="true";
}

else{
    yVel*=0.8
    xVel*=0.8
}




player.distance+=yVel;
yVel*=0.98;

player.xPos+=xVel;
xVel*=0.985;

player.update();

drawSprites();

}
/*end(){
var message=createElement("h2");
message.html("Congratulations!"+player.name);
message.position(displayWidth/2-70,displayHeight/4);
}*/
displayRanks()
{
    camera.postion.x = 0; 
 camera.position.y =0 ;
 Player.getPlayerInfo();  
imageMode(CENTER);
image (bronzeImg, displayWidth/-4, -100+displayWidth/9,100,100)
image (silverImg, displayWidth/4, -100+displayWidth/10,100,100)
image (goldImg, 0, -100, 100,100);

for(var plr in allPlayers){
    if(allPlayers[plr].place === 1){
        text("1st: " + allPlayers[plr].name, 0, 85);
    }else if(allPlayers[plr].place === 2){
        text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
    }else if(allPlayers[plr].place === 3){
        text("3rd: " + allPlayers[plr].name, displayWidth/-4, displayHeight/10 + 76);
    }else{
        textSize(30);
        text("Honorable Mention: " + allPlayers[plr].name, 0, 225);
    }
}
}


    
}