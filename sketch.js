const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const body = Matter.body;
const World = Matter.World;
const Constraint = Matter.Constraint

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground,slingshot,polygon,polygonimage;
var engine, world;
function preload(){
polygonimage = loadImage("polygon.png");
}
function setup(){
createCanvas(1200,800);
engine = Engine.create();
world = engine.world;
polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot = new Slingshot(this.polygon,{x:100,y:200});
}
function draw(){
background("black");
Engine.update(engine);
imageMode(CENTER);
image(polygonimage,polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged()
{
	Matter.body.setPosition(polygon.body, {x:mouseX, y:mouseY}); 
}
function mouseReleased()
{
	slingshot.fly();
    //distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

































