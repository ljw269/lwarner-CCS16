function setup() {
  createCanvas(800, 600);
}


function draw() {
  background(200);
  stroke(255);
  translate(width/2,height/2);
  fill(0);
  rotate(radians(frameCount%360));
  for(var i =0; i < 50; i++){
    push();
    rotate(TWO_PI * i / 20);
    scale(mouseX / 150, mouseY / 150);
    noFill();
    //ellipse(frameCount % (width/2),0,50,50);
    ellipse(0, 0, 50, 50);
    ellipse(0, 0, 50, 80);
    ellipse(0, 0, 80, 80);
    ellipse(0, 0, 30, 80);
    pop();
  }
}
