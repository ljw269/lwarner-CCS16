var hSlider;
var sSlider;
var bSlider;




function setup() {
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,360,100,100);
  background(90,5,70);
  
  hSlider = createSlider(0, 360, 0);
  hSlider.position(20, 20);
  sSlider = createSlider(0, 100, 100);
  sSlider.position(20, 50);
  bSlider = createSlider(0, 100, 80);
  bSlider.position(20, 80);
}



function draw() {
  
  var h = hSlider.value();
  var s = sSlider.value();
  var b = bSlider.value();
  
  fill(h,80,b)
  noStroke();
  quad(10, 10, 490, 10, 490, 300, 15, 300);
  quad(20,300, 485, 300, 480, 460, 10, 460);
  //red background
  
  fill(h,s,50);
  quad(30, 30, 450, 30, 450, 430, 30, 430);
  //brown quad
  
  fill(h,s,b);
  quad(50, 50, 430, 65, 430, 80, 50, 80)
  //pink quad
  
  fill(h, 75, b);
  quad(50, 100, 430, 100, 430, 110, 50, 110);
  //purple thin quad
  
  fill(h, 75, b)
  quad(50, 120, 430, 120, 430, 200, 50, 200);
  //purple large quad
  
  fill(h, 75, b)
  quad(120, 130, 420, 130, 420, 190, 120, 190 );
  //blue center
  
  fill(h,100,b);
  quad(50, 220, 430, 235, 425, 265, 50, 255)
  
  fill(h,100,b);
  quad(50, 265, 430, 285, 430, 295, 50, 295);
  
  fill(h, 75, b);
  quad(50, 300, 430, 300, 430, 350, 50, 350);
  
  fill(h, 75, b);
  quad(100, 305, 430, 310, 430, 340, 100, 347);
  
  fill(h, 75, b);
  quad(50, 360, 430, 360, 430, 420, 50, 420);
  
  fill(h, 75, b);
  quad(100, 365, 430, 365, 430, 410, 100, 418);
}
  
  