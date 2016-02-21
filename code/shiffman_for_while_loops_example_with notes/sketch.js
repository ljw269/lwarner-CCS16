function setup() {
  createCanvas(600,400);
  background(0)
}

function draw() {
  
  var x = 0;
  //init
  
  while(x <= width) {
  //boolean test
  fill(0, 100, 255);
  ellipse(x, 200, 25, 25);
   x = x + 50;
   //incrementation
   
   //all together: for(var=0; x < width; x = x + 50);
  }
  
  for (var x = 0; x <= width; x = x + 50) {
  fill(100, 200, 255);
  ellipse(x, 300, 25, 25);
  }
}

//note: x=x+50 also equals x+=50
//x=x+1 also equals x++



