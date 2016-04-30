var button1;
var button2;
//var ghoul;
var ghouls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //var ghoul = new Ghoul(200, 200, random(255), 1.0); //4 parameters
  
  button1 = createButton("ghoul!");
  button1.position(0,0);
  button1.mouseClicked(function() {
    var g = new Ghoul(random(0,windowWidth), random(0,windowHeight), random(160,220), random(.75,3.0));
    ghouls.push(g);
    //console.log("new Ghoul : %o", g)
    //print(g);
    //print(windowWidth,windowHeight);
  
  button2 = createButton("")
  
  })
}

function draw() {
  background(204);
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
  fill(186, this._hue, 180);
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
  line(this.x-6,this.y-12, this.x-30,this.y-15)
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
  ellipse(this.x,this.y-25, 70, 10)

  fill(0);
  rect(this.x-20, this.y-65, 40, 40)

  //hat


  fill(186, this._hue, 180);
  triangle(this.x+12, this.y-18, this.x+35, this.y-22, this.x+22, this.y+8);
  triangle(this.x-12, this.y-10, this.x-35, this.y-25, this.x-20, this.y+18);

  pop();
  //ears
    
  }
    
  
  
};