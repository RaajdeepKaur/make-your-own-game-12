var hr;
var mn;
var sc;
var border1, border2, border3, border4;
var question;
var bubble;

function preload(){
   bubble = loadImage("bubble.jpg");
}

function setup() {
  createCanvas(1200,800);
  angleMode(DEGREES);
 // createSprite(400, 200, 50, 50);

 circle1 = new Circle(350,400,150,"red");
 circle1.bubble.addImage(bubble);
 circle1.scale = 0.15;
 circle2 = new Circle(100,300,150,"green");
 circle2.bubble.addImage(bubble);
 circle2.scale = 0.15;
 circle3 = new Circle(880,250,150,"blue");
 circle3.bubble.addImage(bubble);
 circle3.scale = 0.15;
 circle4 = new Circle(700,150,150,"red");
 circle4.bubble.addImage(bubble);
 circle4.scale = 0.15;
 circle5 = new Circle(650,225,150,"black");
 circle5.bubble.addImage(bubble);
 circle5.scale = 0.15;
 circle6 = new Circle(750,400,150,"green");
 circle6.bubble.addImage(bubble);
 circle6.scale = 0.15;
 circle7 = new Circle(500,300,150,"brown");
 circle7.bubble.addImage(bubble);
 circle7.scale = 0.15;
 circle8 = new Circle(450,750,150,"blue");
 circle8.bubble.addImage(bubble);
 circle8.scale = 0.15;
 circle9 = new Circle(300,600,150,"yellow");
 circle9.bubble.addImage(bubble);
 circle9.scale = 0.15;
 circle10 = new Circle(750,700,150,"pink");
 circle10.bubble.addImage(bubble);
 circle10.scale = 0.15;

   border1 = createSprite(1000,0,10,2000);
   border1.shapeColor = "black" ;
   border2 = createSprite(0,600,2000,10);
   border2.shapeColor = "black" ;
   border3 = createSprite(-200,0,10,2000);
   border3.shapeColor = "black" ;
   border4 = createSprite(0,-200,2000,10);
   border4.shapeColor = "black" ;

   question = Math.round(random(1,10));
   
   if(mn == 4){
     playSound("zapsplat_household_alarm_clock_digital_beeps_001_60068.mp3");
   }
}

function draw() {
  background(255,255,255);  

  circle1.bubble.bounceOff(border1);
  circle2.bubble.bounceOff(border1);
  circle3.bubble.bounceOff(border1);
  circle4.bubble.bounceOff(border1);
  circle5.bubble.bounceOff(border1);
  circle6.bubble.bounceOff(border1);
  circle7.bubble.bounceOff(border1);
  circle8.bubble.bounceOff(border1);
  circle9.bubble.bounceOff(border1);
  circle10.bubble.bounceOff(border1);

  circle1.bubble.bounceOff(border2);
  circle2.bubble.bounceOff(border2);
  circle3.bubble.bounceOff(border2);
  circle4.bubble.bounceOff(border2);
  circle5.bubble.bounceOff(border2);
  circle6.bubble.bounceOff(border2);
  circle7.bubble.bounceOff(border2);
  circle8.bubble.bounceOff(border2);
  circle9.bubble.bounceOff(border2);
  circle10.bubble.bounceOff(border2);

  circle1.bubble.bounceOff(border3);
  circle2.bubble.bounceOff(border3);
  circle3.bubble.bounceOff(border3);
  circle4.bubble.bounceOff(border3);
  circle5.bubble.bounceOff(border3);
  circle6.bubble.bounceOff(border3);
  circle7.bubble.bounceOff(border3);
  circle8.bubble.bounceOff(border3);
  circle9.bubble.bounceOff(border3);
  circle10.bubble.bounceOff(border3);

  circle1.bubble.bounceOff(border4);
  circle2.bubble.bounceOff(border4);
  circle3.bubble.bounceOff(border4);
  circle4.bubble.bounceOff(border4);
  circle5.bubble.bounceOff(border4);
  circle6.bubble.bounceOff(border4);
  circle7.bubble.bounceOff(border4);
  circle8.bubble.bounceOff(border4);
  circle9.bubble.bounceOff(border4);
  circle10.bubble.bounceOff(border4);
  
  if(question == 1){
    text(circle1.ans,200,200);
 }
 if(question == 2){
   text(circle2.ans,200,200);
 }
 if(question == 3){
   text(circle3.ans,200,200);
 }
 if(question == 4){
    text(circle4.ans,200,200);
 }
 if(question == 5){
    text(circle5.ans,200,200);
 }
 if(question == 6){
   text(circle6.ans,200,200);
 }
 if(question == 7){
    text(circle7.ans,200,200);
 }
 if(question == 8){
   text(circle8.ans,200,200);
 }
 if(question == 9){
   text(circle9.ans,200,200);
 }
 if(question == 10){
    text(circle10.ans,200,200);
 }



  hr = hour();
  mn = minute();
  sc = second();

  translate(200,200);

 var scAngle = map(sc, 0, 60, 0, 360);
 var mnAngle = map(mn, 0, 60, 0, 360);
 var hrAngle = map(hr %12, 0, 12, 0, 360);

 
 
 push();
 rotate(hrAngle);
 stroke(255,0,0);
 strokeWeight(7);
 line(0,0,0,-50);
 pop();

 push();
 rotate(mnAngle);
 stroke(0,255,0);
 strokeWeight(7);
 line(0,0,0,-50);
 pop();

 push();
 rotate(scAngle);
 stroke(0,0,255);
 strokeWeight(7);
 line(0,0,0,-50);
 pop();

 strokeWeight(10);
 stroke(255,0,0);
 noFill();
 arc(0,0,200,200,270,270 + hrAngle);
 
 stroke(0,255,0);
 strokeWeight(10);
 noFill();
 arc(0,0,180,180,270,270 + mnAngle);

 stroke(0,0,255);
 strokeWeight(10);
 noFill();
 arc(0,0,160,160,270,270 + scAngle);
 

  drawSprites();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  circle6.display();
  circle7.display();
  circle8.display();
  circle9.display();
  circle10.display();
}