var words;
var wordsArray = [];
var pos = [];

function preload(){
  //lines = loadStrings('captain_whitman2.txt')
}
function setup() {
  createCanvas(800,400);
  
  words = "O Captain! my Captain! our fearful trip is done, The ship has weather’d every rack, the prize we sought is won.";
  
  wordsArray= RiTa.tokenize(words, ",");
}

function draw() {
  background(255);
  text(wordsArray.join(" "), 0, 0, width/2, height)
  
  textSize(20);
  lexicon = new RiLexicon();
  
  pos = RiTa.getPosTags(words);
  text(pos.join(" "), 100, 100, width/2, height)
  
  
  
  
}