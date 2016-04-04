var lines = [];//we declare lines as an empty array 
//preload gets called BEFORE setup
function preload(){
  //loadStrings returns an array of Strings from our text file
  //you must have a local file in order for this function to work
  lines = loadStrings('janeEyre.txt');
  
}

function setup() {
  createCanvas(400,400);
  //renders the contents of our lines array
  
  startsWith(CHAPTER I);
  text(lines, 0,0,width,height);
}