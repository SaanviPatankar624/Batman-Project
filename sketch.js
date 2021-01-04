const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rain;
var umbrella_img, umbrella;

function preload(){
 
    umbrella_img = loadImage("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png",
    "walking_6.png", "walking_7.png", "walking_8.png");
    
}

function setup(){
    createCanvas(500, 700);
   
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    umbrella = new Umbrella(100, 200, 20, 20)
  
    rain = new Drops(100, 100);

    
   
}

function draw(){
    background("grey");

    Engine.update(engine);

    umbrella.display();
    
    rain.updaterain();

}   

