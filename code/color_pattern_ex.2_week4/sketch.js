/**
 * Rules based color palettes
 * 
 */
var h = 100;
var s = 100;
var b = 100;

//increase this number for more steps between colors
var rectStep = 10;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  //try uncommenting this line for HSB mode
  //colorMode(HSB, 360,100,100);
  for(var x=0; x < width; x += rectStep){
    noStroke();
    fill(h - x % 120 ,s + x % 140,b+x % 160);
    rect(x,0,rectStep,height);
  }
}

function keyPressed(){
  if(key === '1'){
    h = random(100);
  }
  else if(key === '2'){
    s = random(200);
  }
  else if(key === '3'){
    b = random(255);
  }
}