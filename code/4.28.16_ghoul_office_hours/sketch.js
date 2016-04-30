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
    var g = new Ghoul(random(-200,400), random(-200,400), random(160,220), random(.75,3.0));
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
  

  //particle.bounce();
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
  ellipse(this.x+300,this.y+200, 60, 65);

  //head

  noStroke();
  fill(255);
  ellipse(this.x+290,this.y+195, 7, 8);

  noStroke();
  fill(255);
  ellipse(this.x+310, this.y+195, 7, 8);

  // eye whites


  noStroke();
  fill(0);
  ellipse(this.x+290,this.y+196, 3, 4);

  noStroke();
  fill(0);
  ellipse(this.x+310,this.y+196, 3, 4);

  //pupils

  stroke(0);
  curve(this.x+275, this.y+190, this.x+285, this.y+185, this.x+295, this.y+190, this.x+300, this.y+190);

  stroke(0);
  curve(this.x+295, this.y+189, this.x+305, this.y+189, this.x+315, this.y+190, this.x+310, this.y+195);

  //eyebrows


  fill(0);
  noStroke();
  arc(this.x+300,this.y+210, 25, 25, 0, PI, HALF_PI + PI);

  //mouth

  fill(255);
  rect(this.x+302, this.y+211, 3, 5);

  fill(255);
  rect(this.x+295, this.y+211, 3, 4);

  //teeth

  
  fill(0);
  ellipse(this.x+300,this.y+176, 70, 10)

  fill(0);
  rect(this.x+280, this.y+136, 40, 40)

  //hat


  fill(186, this._hue, 180);
  triangle(this.x+260, this.y+175, this.x+283, this.y+183, this.x+272, this.y+185);
  triangle(this.x+345, this.y+178, this.x+320, this.y+180, this.x+325, this.y+185);

  pop();
  //ears
    
  }
    
  
  
};

 
  






