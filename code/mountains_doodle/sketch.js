function setup() {
  createCanvas(600,400);
  frameRate(12)
  background(random(140,200), random(55, 70), random(60,80));
  
}

function draw() {
  for(var x = 0; x <= width; x += 50){
    for(var y = 0; y <= height; y +=50){
      
  fill(0);
  beginShape(TRIANGLES);
  vertex(x,y);
  vertex(x - 40, y + 30);
  vertex(x + 40, y + 30);
  endShape(CLOSE);
  
  stroke(100,100,0);
  strokeJoin(ROUND);
  fill(random(170,200), random(130,160), random(0,10));
  ellipse(x + 17.5, y + 55 , 25, 25);
    }
  }
}
