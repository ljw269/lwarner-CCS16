var bgcolor;
var button1;
var button2;
var button3;
var circleColor;
var slider
var changecircleStroke


function setup() {
  
  colorMode(HSB, 360, 100, 100);
  
  canvas = createCanvas(400,400);
  bgcolor = color(200);
  circleColor = color(255);
  changecircleStroke = color(0,0,100);
  //button1 = createButton("change background");
  button2 = createButton("change circle color");
  //button3 = createButton("add circles")
  //button1.mousePressed(changebgColor);
  button2.mousePressed(changecircleColor);

  //button1.position(width/3, height/2);
  button2.position(250,10);
  button3 = createButton("change border")
  button3.position(150,10);
  
  
  slider = createSlider(80, 160, 0);
  slider.position(10,10);
  slider.style('width', '100px');
 
 
  
}

function changebgColor() {
  bgcolor = color(140, random(50,80), random(60,75));
}

function changecircleColor() {
  circleColor = color(140, random(40, 90), random(50,80));
}

function changeBorder() {
  changecircleStroke = color(random(65,20), random(40,90), random(50,80));
}

//function addCircles() {
  //fill(255);
  //ellipse(30, 30, 20, 20);
  
  
//}



function draw() {
  
  var val = slider.value();
  
  
 //if button1.mousePressed === true){
  
  //background(bgcolor)
 // } else {
  background(val, (20,80), (50,80));
  //}
  
  for(var x = 0; x <=width; x += 50){
    for(var y = 0; y<=height; y+=50){
    
    fill(circleColor);
    stroke(changecircleStroke);
    strokeWeight(5);
    ellipse(x + 1, y + 1, 50, 50)
    ellipse(x, y, 30, 30)
    }
  }
  
}