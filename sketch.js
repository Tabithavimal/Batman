const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var walkingImages;
var ground;
var thunderImages;
var man_walking,man,man_collided;
var maxDrops=100;
var drops=[];
var rand;
var thunderframe;
function preload()
{ thunder1 = loadImage("images/thunderbolt/1.png");
 thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
   thunder4 = loadImage("images/thunderbolt/4.png"); }


function setup(){
createCanvas(500,700)
engine = Engine.create();
  world = engine.world;
 
 //man=createSprite(590,200,200,20)
 //man.addImage("walking",man_walking)
 //man.addImage("collided",man_collided)
 
 
 umbrella = new Umbrella(200,500);
  //ground = new Ground(width/2,590,width,20);

  if(frameCount % 150 === 0)
     { 
       for(var i=0; i<maxDrops; i++)
       { 
         drops.push(new Rain(random(0,400), random(0,400)));
        } 
       }



}

function draw()
{
   Engine.update(engine);
    background(0);
    rand=Math.round(random(1,4))
 if(frameCount%60===0){
thunderframe=frameCount
thunder=createSprite(random(10,370),random(10,30),10,10)
switch(rand)
{

case 1:thunder.addImage(thunder1)
break;
case 2:thunder.addImage(thunder2)
break;
case 3:thunder.addImage(thunder3)
break;
case 4:thunder.addImage(thunder4)
break;
default:
  break;

}

thunder.scale=random(0.3,0.6)

 }
  
if(thunderframe+10===frameCount&&thunder){
thunder.destroy();

}

for(var i=0;i<maxDrops;i++){

drops[i].showDrop();
drops[i].updateY();

}

//ground.display();
umbrella.display();
drawSprites();

}   
