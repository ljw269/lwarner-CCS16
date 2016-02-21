function setup() {
  createCanvas(600,400);
  frameRate(10)
}

function draw() {
  background(112,random(60, 80),random(40,80));
  strokeWeight(4);
  stroke(255);
  
  for(var x = 0; x <= mouseX; x += 50) {
    for(var y = 0; y <= height; y +=50) {
      fill(random (200),random (200), random(255));
      ellipse(x, y, 25, 25);
    
      
  if(mouseX >=0 && mouseY >=0 === true) {
  fill(random(25),100,random(150));
  triangle(x, y, x - 50, y + 75, x + 50, y + 75)
  rect(x, y + 75, 25, 75);
    
      }
        
    }
  }
}