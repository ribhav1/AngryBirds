const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, log1, log2, log3, log4, bird, pig1, pig2, ground;

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,height - 25, 50,50);
    box2 = new Box(700,height - 25,50,50);
    box3 = new Box(600,height - 60 ,50,50);
    box4 = new Box(700,height - 60,50,50);
    box5 = new Box(650,height - 85, 50, 50);

    log1 = new Log(650, height - 50, 150, 10, 0);
    log2 = new Log(650, height - 65, 150, 10, 0);
    log3 = new Log(675, height - 85, 100, 10, PI / 4);
    log4 = new Log(625, height - 85, 100, 10, -(PI / 4));

    bird = new Bird(mouseX, mouseY);

    pig1 = new Pig(650, height - 25, 40, 40);
    pig2 = new Pig(650, height - 60, 40, 40);

    ground = new Ground(400,height,800,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    pig1.display();
    pig2.display();
    ground.display();
}