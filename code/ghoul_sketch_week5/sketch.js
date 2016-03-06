function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(155)
  for(var x = 0; x < width + 70; x += 70){
  ghoul(x - 300, 0);
  

  }
  

}



function ghoul(x, y) {

  push();
  translate(x, y);
  
  
  noStroke();
  fill(186, 209, 180);
  ellipse(width / 2, height / 2, 60, 65);

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


  fill(186, 209, 180);
  triangle(258, 175, 280, 183, 270, 185);
  triangle(345, 178, 320, 180, 325, 185);

  pop();
  //ears
  
}
















  
