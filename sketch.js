let ground;
let lander;
var lander_img;
var bg_img;
var meteorito;
var meteorito2
var p1,p2,p3,p4;
var meteorit0;
var meterit02;

var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("COHETE_normal.png");
  bg_img = loadImage("FONDO.png");
  meteorit0 = loadAnimation("METEORo1.png");
  meterit02 = loadAnimation("METEORo2.png");
}

function setup() {
  createCanvas(900,720);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.07;

  meteorito = createSprite(430,250,65,65);
  meteorito.setVelocity(0.25,0.25);
  meteorito.addAnimation("meteorito_normal",meteorit0);
  meteorito.scale = 0.015;

  meteorito2 = createSprite(700,260,65,65);
  meteorito2.setVelocity(-0.33,-0.33);
  meteorito2.addAnimation("mete2",meterit02);
  meteorito2.scale =0.019;

  p1 = createSprite(430,180,100,4);
  p1.visible = false;
  p2 = createSprite(430,325,100,4);
  p2.visible = false;
  p3 = createSprite(490,250,4,100);
  p3.visible = false;
  p4 = createSprite(365,250,4,100);
  p4.visible = false;

  p1v2 = createSprite(700,170,135,4);
  p1v2.visible = false;
  p2v2 = createSprite(700,365,135,4);
  p2v2.visible = false;
  p3v2 = createSprite(800,260,4,135);
  p3v2.visible = false;
  p4v2 = createSprite(595,260,4,135);
  p4v2.visible = false;

  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Velocidad vertical: "+round(vy),700,75);
  pop();

  meteorito.bounceOff(p1);
  meteorito.bounceOff(p2);
  meteorito.bounceOff(p3);
  meteorito.bounceOff(p4);
  
  meteorito2.bounceOff(p1v2);
  meteorito2.bounceOff(p2v2);
  meteorito2.bounceOff(p3v2);
  meteorito2.bounceOff(p4v2);

  // caída
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


