
var angle = 1.0;

function setup() {
  createCanvas(600,400);
  background(255);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  x=0
  y=0
  translate(width/2, height/2);
  rotate(radians(frameCount%360));
  for(var i = 1; i <= 50; i++){
    strokeWeight(2);
    stroke(x+10, y+10, 66)
    fill(x+200, 50, 66);
    //fill(random,random,random)
    ellipse(0, 0, width / 2, width / 2)
    scale(mouseX / 600, mouseY / 400)
    rotate(TWO_PI * i / 200);
    //angle += 0.1;
  }

  
}