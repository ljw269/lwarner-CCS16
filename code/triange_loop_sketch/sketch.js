function setup() {
  createCanvas(windowWidth,windowHeight);
  background(155)
}

function draw() {
  for(var i =0; i < 20; i++){
    fill(93,157,179);
    strokeWeight(2);
    triangle(i * 25, 0, i, height * 2, width, height);

    if (mouseIsPressed === true){
      beginShape()
      fill(155)
      vertex(400,350)
      vertex(450,550)
      vertex(500,350)
      endShape(CLOSE)
      strokeWeight(2)
      fill(142,192,209)
      ellipse(450,450,75,75)
    }
  }
}