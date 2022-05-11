


function preload() {
  //load title images



}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  frameRate(60);

}

function draw() {
  background(255, 161, 213);


  //switch states
  switch (state) {
    case 'Front':
      title();
      break;
    case 'nextPage':
      nextPage();
      break;
}

  //developer tool
  coordinates();


}

//------------------------

function title() {

  fill(252, 235, 136);
  rect(200, 270, 210, 70);


  fill(117, 209, 224);
  textFont(standardFont);
  textSize(50);
  text('Text', 260, 320);


function nextPage(){

}


//------------------------------


}



//developer tool
function coordinates() {
  textSize(15);
  fill(255, 0, 0);
  noStroke();
  text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
}
