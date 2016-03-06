var myFirstArray = []

function setup() {
  createCanvas(600,400);
  
  for(var i = 0; i < 5; i++){
    myFirstArray[i] = random(12);
    
  }
  
  print(myFirstArray);
  
  
  
}

function draw() {
  background(0);
  
  for(var i = 0; i < myFirstArray.length; i++){
    ellipse(width/2, height/2, myFirstArray[i] * 50 , myFirstArray[i] * 50);
  }
  
}