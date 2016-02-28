function setup() {
  createCanvas(500,800);
  colorMode(HSB); 
  background(200,50,50)
  
}

function draw() {
  for(var x = 0; x <= width; x += 50){
    for(var y = 0; y <= height; y += 50){
    ellipse(x, y, 50, 50);
    }
  }
}
