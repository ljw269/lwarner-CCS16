var button1;
var ghoul;
var ghouls = [];

function setup() {
  createCanvas(400, 400);
  ghoul = new Ghoul(200, 200, random(255), 1.0); //4 parameters
  
  button1 = createButton("ghoul!");
  button1.mouseClicked(function() {
    ghouls.push(new Ghoul(random(0,400), 200, 200, 1.0));
    
  })
}

function draw() {
  background(255);
  //fill(particle.color);
  //noStroke();
  //ellipse(particle.pos.x,particle.pos.y, 100, 100);
  for (var i = 0; i < ghouls.length; i++){
    ghouls [i].display();
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
  
  println(this.x, this.y);
  
  //translate(this.x, this.y);
  push();
  
  scale(this._scale);
  stroke(this._hue);
  
  
  
  noStroke();
  fill(186, this._hue, 180);
  ellipse(200, 200, 60, 65);

  //head

  noStroke();
  fill(255);
  ellipse(290, 195, 7, 8);

  noStroke();
  fill(255);
  ellipse(310, 195, 7, 8);

  // eye whites


  noStroke();
  fill(0);
  ellipse(290, 196, 3, 4);

  noStroke();
  fill(0);
  ellipse(310, 196, 3, 4);

  //pupils

  stroke(0);
  curve(275, 190, 285, 185, 295, 190, 300, 190);

  stroke(0);
  curve(295, 189, 305, 189, 315, 190, 310, 195);

  //eyebrows


  fill(0);
  noStroke();
  arc(300, 210, 25, 25, 0, PI, HALF_PI + PI);

  //mouth

  fill(255);
  rect(302, 211, 3, 5);

  fill(255);
  rect(295, 211, 3, 4);

  //teeth

  
  fill(0);
  ellipse(width / 2, 176, 70, 10)

  fill(0);
  rect(280, 136, 40, 40)

  //hat


  fill(186, this._hue, 180);
  triangle(260, 175, 283, 183, 272, 185);
  triangle(345, 178, 320, 180, 325, 185);

  pop();
  //ears
    
  }
    
  
  
};

 
  






