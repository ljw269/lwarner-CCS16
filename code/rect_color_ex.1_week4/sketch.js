function setup() {
  createCanvas(600,400);
}

function draw() {
  colorMode(HSB, 350, 100, 100);
  rectMode(CENTER);
  background(350, mouseX%100, 100);
  noStroke();
  fill(350, 100-mouseY%100, 100);
  rect(width/2,height/2,mouseY+1,mouseY+1);
}