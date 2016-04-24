var table;
var timeToWork = [];
var timeFromWork = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("Commute_times.csv", "csv", "header");
}
function setup() {
  createCanvas(400,400);
  textSize(24);
  //VERY IMPORTANT: to get row as array, we need to call
  //getRow(rowNumber).arr; // <--no parens
  var timeToWork = table.getRow("3");
}

function draw(){
  background(204);
  translate(0,height/2);
  //we loop from i=2 to aveTemperatureData.length-2
  //because our row contains more data than just monthly
  //temps
  for(var i = 0; i < timeToWork.length; i++){
    translate(25,0);
    push();
    rect(0,0,20,timeToWork[i] * 2.0);
    pop();

  } 
}