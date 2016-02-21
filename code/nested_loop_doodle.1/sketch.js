function setup() {
  createCanvas(600,400);
  
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  for(var x = 0; x <= mouseX; x += 50) {
    for(var y = 0; y <= height; y +=50) {
      fill(random (255),0, random(255));
      ellipse(x, y, 25, 25);
      
  if(mouseX >=300 && mouseY >=200 === true) {
  fill(random(255),0,random(255));
  triangle(x, y, x + 50, y + 150, x + 100, y + 100);
      }
        
    }
  }
}