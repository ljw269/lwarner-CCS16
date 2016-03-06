var myGeometry = []
var myFriendDonna = ["Donna", 240,120, "#ff2323"];


function setup() {
  createCanvas(600,400);
  
  for(var i = 0; i < 20; i++){
    myGeometry.push(random(20));
    
    
  print(myGeometry);
  }
  
}

function draw() {
  colorMode(HSB, 360,100,100);
  background(350,60,70);
  
  for(var i = 0; i < myGeometry.length; i++){
    
    
    frameRate(1.2);
    stroke(255);
    strokeWeight(3);
    fill(350, random(50,80), random(50,80))
    rectMode(CENTER);
    rect(width/1.5, height/1.5, myGeometry[i] * 10, myGeometry[i] * 15)
    
  }
  
}

function draw(){
  
  fill(myFriendDonna[myFriendDonna.length - 1])
  
  ellipse(width/2, height/2, myFriendDonna[1], myFriendDonna[2]);
}