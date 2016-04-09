var drop1;
var drop2;


function setup () {
  createCanvas(600,600);
  background(204);
  //create object and pass in parameters
  
  drop1 = new waterDrop(width/2, height/2, 20);
  drop2 = new waterDrop(width/2, height/5, 100);
  
}

function draw (){
  translate(width/4, height/4);
  drop1.move();
  drop1.display();
  drop2.move();
  drop2.display();
  
}

function waterDrop(tempX, tempY, tempDiameter){
  
  this.x = tempX
  this.y = tempY
  this.diameter = tempDiameter;
  this.speed = 10.5; //same for every instance
  
  
function move(){
  x+= random(-speed, speed);
  y+= random(-speed, speed);
}

this.move = function () {
  this.x += random(-this.speed, this.speed);
  this.y =+ random(-this.speed, this.speed)
  };

this.display = function(){
  noStroke();
  fill(random(100, 100), random(0, 255), random(200, 255))
  ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}