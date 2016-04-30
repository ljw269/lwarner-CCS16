var ghoul1;
var button_presses = 0

function setup() {
  createCanvas(windowWidth,windowHeight);
  ghoul1 = new Ghoul(windowWidth/2, windowHeight/2, random(160,220), 4.0, 3.0);
  //print(ghoul1);
  button1 = createButton("Move Faster!");
  button1.position(0,0);
  button1.mouseClicked(function() {
    button_presses = button_presses + 1;
    
  })
  button2 = createButton("Slow Down!");
  button2.position(100,0);
  button2.mouseClicked(function(){
    button_presses = button_presses - 1
    
  })
  
}

function ghoulScale() {
  return ((button_presses % 3) + 1);
}

//function ghoulScale2(){
 // return ((button_presses % 3) - 1);
//}

function draw() {
  background(204);
  //ghoul1();
  ghoul1.display();
  ghoul1.bounce();
  
}
  

function Ghoul(x, y, _hue, _scale, speed){
  this.speed = 1.0;
  this.y = y
  this._hue = _hue;
  this._scale = _scale;
  this.x = x;

}

Ghoul.prototype = {
  
  constructor : Ghoul,
  
  bounce : function(){
    
    
    if (this.y > windowHeight || this.y < 0){
      this.speed *= -1;
    }
    
    this.y = this.y + this.speed * button_presses;
  },
  
  display : function(){
  
  scale(ghoulScale() * this.y/windowHeight);
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
 
    
  
    
  
}



  
  
  
  
  
  
  
  
  
  
  