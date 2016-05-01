var button1;
var button2;
//var ghoul;
var ghouls = [];
var hSlider;
var sSlider;
var bSlider;
var img;

function preload(){
  img = loadImage('wall.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //var ghoul = new Ghoul(200, 200, random(255), 1.0); //4 parameters
  colorMode(HSB, 360, 100, 100);
  hSlider = createSlider(0, 360, 0);
  hSlider.position(500, 20);
  sSlider = createSlider(0, 100, 100);
  sSlider.position(500, 50);
  bSlider = createSlider(0, 100, 80);
  bSlider.position(500, 80);
  
  
  button1 = createButton("ghoul!");
  button1.position(500,110);
  button1.style('width', '130px');
  button1.mouseClicked(function() {
    var g = new Ghoul(random(0,windowWidth), random(0,windowHeight), random(160,220), random(.75,3.0));
    ghouls.push(g);
    //console.log("new Ghoul : %o", g)
    //print(g);
    //print(windowWidth,windowHeight);
  
  
  
  })
}

function draw() {
  background(img);
  
  
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
  
  //fill(particle.color);
  //noStroke();
  //ellipse(particle.pos.x,particle.pos.y, 100, 100);
  for (var i = 0; i < ghouls.length; i++){
    ghouls [i].display();
    //noLoop();
  }
  

  
}

function Ghoul(x, y, _hue, _scale) {

this.x = x;
this.y = y;
this._hue = _hue;
this._scale = _scale;

//in constructor, just set properties
}
Ghoul.prototype = {
  
  constructor : Ghoul,
  display : function () {
  
  //println(this.x, this.y);
  
  //translate(this.x, this.y);
  push();
  
  scale(this._scale);
  stroke(this._hue);
  
  
  
  noStroke();
  fill(107, 18, 72);
  ellipse(this.x,this.y, 60, 65);
  
  noStroke();
  fill(255);
  ellipse(this.x-8,this.y-8, 7, 8);

  noStroke();
  fill(255);
  ellipse(this.x+11, this.y-8, 7, 8);

  // eye whites


  noStroke();
  fill(0);
  ellipse(this.x-8,this.y-6, 4, 4);

  noStroke();
  fill(0);
  ellipse(this.x+11,this.y-6, 4, 4);

  //pupils

  stroke(0);
  //curve(this.x+8, this.y-10, this.x+30, this.y-5, this.x+20, this.y-15, this.x+2, this.y+20);
  line(this.x+6,this.y-12, this.x+30,this.y-15);

  stroke(0);
  line(this.x-6,this.y-12, this.x-30,this.y-15);
  //curve(this.x+295, this.y+189, this.x+305, this.y+189, this.x+315, this.y+190, this.x+310, this.y+195);

  //eyebrows


  fill(0);
  noStroke();
  arc(this.x,this.y+10, 25, 25, 0, PI, HALF_PI + PI);

  //mouth

  fill(255);
  rect(this.x+2, this.y+11, 3, 5);

  fill(255);
  rect(this.x-5, this.y+11, 3, 4);

  //teeth

  
  fill(0);
  ellipse(this.x,this.y-25, 70, 10);

  fill(0);
  rect(this.x-20, this.y-65, 40, 40);

  //hat


  fill(107, 18, 72);
  triangle(this.x+12, this.y-18, this.x+35, this.y-22, this.x+22, this.y+8);
  triangle(this.x-12, this.y-10, this.x-35, this.y-25, this.x-20, this.y+18);

  pop();
  //ears
    
  }
    
  
  
};