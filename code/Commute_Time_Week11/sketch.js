var table;
var timeWorkAvg = [];


function preload() {

  table = loadTable("Commute_times2.csv", "csv", "header");
}
function setup() {
 createCanvas(400,400);
 textSize(10);
 timeWorkAvg = table.getColumn("AVERAGE");
 
 
}

function draw(){
  background(220);
  translate(0, height/2);
  text("To Work", 40, 0);
  text("To Home", 80, 0)
  text("Average Commute Time for the Week of 4/18", width/3, height/3)
  text("30 min", 10, 150);
  text("35 min", 43, 175);
  for (var i = 0; i < timeWorkAvg.length; i++){
    
    translate(40,0);

    
    push();
    rect(0, 0, -40, timeWorkAvg[i] * 5.0);
   
    pop();

    
    

    
  }
}