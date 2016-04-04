var waveLengthOne = 300.0;
var waveLengthTwo = 200.0;
var waveLengthThree = 350.0
var pointCount = 0;
var angle = 2.0;
var amplitude = 200;

function setup(){
  createCanvas(400,400);
}
function draw(){
  colorMode(HSB,360, 100, 100);
  background(220, 80, 60);
  if(pointCount > 3000){
    noLoop()
  }
    
  fill(220,80,80);
  strokeWeight(2);
  stroke(220,20,100);
  translate(width/2, height/2);
  
  beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * QUARTER_PI;
  var y = sin(angle) * amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle) * amplitude;
  
  //angle = i / waveLengthThree * PI
  //var z = cos(angle) * amplitude
  
  vertex(x, y);
  
  }
  endShape();
  pointCount++
}
