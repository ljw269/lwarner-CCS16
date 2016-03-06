var mySecondArray = [];


function setup() {
  createCanvas(500,500);
  
  for(var i = 0; i < 5; i++){
    mySecondArray.push(random(15));
    
  
  print(mySecondArray);

  }
}

function draw() {
  background(0,100,200);
  for(var i = 0; i < mySecondArray.length; i++){
    rect(width/2, height/2, mySecondArray[i] * 10, mySecondArray[i] * 10);
    
  }
}

function mousePressed(){
  mySecondArray.push(random(22));
  print(mySecondArray.length);
}