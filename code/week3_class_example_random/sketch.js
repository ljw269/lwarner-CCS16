


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(115);
  frameRate(2);
  
}

function draw() {
  background(115,10);
  var r = random(windowWidth);
  
  if (r>=100){
    fill(r,r,r);
  } else {
    fill(255,0,0);
  }
  ellipse(windowWidth/2,windowWidth/2,r,r);

}