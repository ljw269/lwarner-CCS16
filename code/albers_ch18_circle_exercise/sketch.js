function setup() {
  createCanvas(500,800);
  colorMode(HSB, 360,100,100);
  frameRate(.5);

}

function draw() {
  
  fill(200,150,150);
  rect(0,0,500,200);
  //segment 1
  
  fill(200,75,100);
  rect(0,200,500,200)
  //segment 2
  
  fill(200,100,75);
  rect(0,400,500,200);
  //segment 3
  
  fill(200,50,50);
  rect(0,600,500,200);
  //segment 4
  
  for(var x = 0; x <= width; x += 50){
    for(var y = 0; y <= height; y += 50){
      noStroke()
      fill(200,random(75,100),random(25,100))
      ellipse(x, y, 50, 50);
      
      //circles
    }
  }
}
