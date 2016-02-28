function setup() {
  createCanvas(600,400);
  frameRate(10)
}

function draw() {
  background(0);
  strokeWeight(4);
  
  
  for(var x = 0; x <= mouseX; x += 50) {
    for(var y = 0; y <= height; y +=50) {
      fill(random (200),random (200), random(255));
      ellipse(x, y, 25, 25);
    
      
  if(mouseX >=0 && mouseY >=0 === true) {
  fill(random(50),50,random(200));
  triangle(x, y, x - 50, y + 75, x + 50, y + 75);
  rect(x, y, x + 95, y + 95, x + 95, y + 95);
      }
        
    }
  }
}
