
var angle = 1.0;

function setup() {
  createCanvas(600,400);
  background(255);
}

function draw() {
  translate(width/2, height/2);
  rotate(radians(frameCount%360));
  for(var i = 1; i <= 50; i++){
    strokeWeight(2);
    fill(random,random,random)
    ellipse(0, 0, width / 2, width / 2)
    scale(mouseX / 500, mouseY / 400)
    rotate(TWO_PI * i / 200);
    //angle += 0.1;
  }

  
}