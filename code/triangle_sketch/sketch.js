function setup() {
  createCanvas(600,600);
}

function draw() {
  noStroke()
  background(180)
  fill(93,157,179)
  beginShape(TRIANGLES)
  vertex(10,90);
  vertex(90,10);
  vertex(10,10);
  endShape(CLOSE)
  
}