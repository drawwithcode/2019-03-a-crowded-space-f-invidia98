var element = [];
var eleCounter = 999;
var count=0;
var tempele = []
var limit=105
var starsx = [];
var starsy = [];

function preload(){
  // put preload code here
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(60);





  for (var i = 0; i < eleCounter; i++) {
    element[i] = new Myelement();


  }
  for (var i = 0; i < 500; i++) {
    starsx[i] = random(0,width)
    starsy[i] = random(0,height)
  }


}

function draw() {
  background(0,0,40);


  for (var i = 0; i < 500; i++) {
    stroke(255);
    fill(255)
    if (random()>0.8) {
      strokeWeight(3)
    }else {
      strokeWeight(1)
    }
    ellipse(starsx[i],starsy[i],1)
  }
  stroke(0,0,0)
  strokeWeight(0)
  fill(0)
  ellipse(width/2, height/2, 139);


  for (var i = 0; i < count+1; i++) {
    element[i].display();

  }

  textSize(width/50);
  textAlign(CENTER, BOTTOM)
  noStroke();
  fill("white");
  text('Click to create a star, Spacebar to invert gravity', width/2, height-30);

}

function mouseClicked(){

  count+=1;
  element[count].coordinate();


}

function Myelement(){
  this.count=1

  this.coordinate = function(){
  this.count++
  this.x = -(windowWidth/2-mouseX);
  this.y = -(windowHeight/2-mouseY);
  this.raggio = sqrt((this.x*this.x)+(this.y*this.y))




  this.iteratorx = acos(this.x/this.raggio);
  this.variable = 1
  this.variabletwo = 1


  if (this.raggio<=limit) {

    this.raggio=limit-5
  }
  this.prova = (this.raggio+this.count*20)

  if (this.y<0) {
    this.variabletwo=-this.variabletwo
  }



  }

  this.transition = 50;
  angleMode(DEGREES)

  this.display = function(){
    push();
    this.iteratorx++
    this.variable+=0.01
    this.variabletwo+=0.02
    this.transition = 50
    //noise(this.variabletwo)*100;
    stroke("white")
    //strokeWeight(random(1,this.variabletwo+5))

    if (this.variabletwo>=10) {
      this.variabletwo=15;
    }

    if (keyIsPressed === true) {
    this.prova+=this.variable
  } else {
    this.prova-=this.variable
  }
    //this.prova-=this.variable

    if (this.prova<=limit) {
      this.prova=limit-5
    }


    this.mov = cos(this.iteratorx*this.variabletwo)*this.prova+(windowWidth/2)
    this.movi = sin(this.iteratorx*this.variabletwo)*this.prova+(windowHeight/2)
    // fill("red")
    fill(255,255,255,180)
    ellipse(this.mov,this.movi,this.transition)
    pop();
  }



}
