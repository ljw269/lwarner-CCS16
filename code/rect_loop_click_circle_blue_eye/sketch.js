function setup() {
  createCanvas(600,600);
  noStroke();
 
  
}

function draw() {
  background(0);
  for (var y = 0; y <=height; y+=30){
    for (var x= 0; x <= width; x+=30){
      fill (255,140)
      rect (x, y, 40, 20);
      if (mouseIsPressed === true){
        rect (x, y, 20, 20);
        ellipse (300,300,100,100);
        fill(0,0,255)
        ellipse (280,290,5,5);
        fill(0)
        ellipse(320,290,5,5)
        line(280,350,320,350);
      }
    }
  }

