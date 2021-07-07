const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1;
var rect1;
var ball1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane  = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box1   = new Box(600,320,50,100);
    rect1  = new Rect(800,300,50,70);
    ball1  = new Rubber(500,300,50);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box1.display();
    rect1.display()
    ball1.display();

    
 
}