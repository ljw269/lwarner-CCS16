function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  fill(225,160,200)
  for(var x =0; x < windowWidth; x++){
    for(var y =0; y < windowHeight; y++){
 ellipse(x * 10,y * 10,20,20);
  }
}
}


