var drops = [];


function setup () {
  createCanvas(600,400);
  background(204);
  
  for(var i = 0; i < 50; i++){
    var x = random(width);
    var y = random(height);
    var r = i + 2;
    drops[i] = new waterDrop(x, y, r);
  }
}

function draw () {
  frameRate(10);
  for (var i = 0; i < drops.length; i++) {
    drops [i].move();
    drops [i].display();
  }
}
  
function waterDrop(tempX, tempY, tempDiameter){
  
  this.x = tempX
  this.y = tempY
  this.diameter = tempDiameter;
  this.speed = 10.5; //same for every instance
  
  
function move(){
  this.x = this.x + random(-1,1);
  this.y = this.y + random(-1,1);
  
  //x+= random(-speed, speed); /jitterbug bounce motion
  //y+= random(-speed, speed); /jitterbug bounce motion
}

this.move = function () {
  
  
  
  this.x = this.x + random(-1,1);
  this.y = this.y + random(-1,1);
  
 

  
  //this.x += random(-this.speed, this.speed); /jitterbug bounce motion
  //this.y =+ random(-this.speed, this.speed) /jitterbug bounce motion
};

this.display = function(){
  noStroke();
  fill(random(100, 100), random(0, 255), random(200, 255))
  
  var x = random(width);
  var y = random(height);
  
  ellipse(x, y, this.diameter, this.diameter);
  };
}