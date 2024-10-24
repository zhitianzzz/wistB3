var lineR, lineB, lineG;
var lineR1, lineB1, lineG1;
var alertShown = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(25, 0, 0);
  lineR = random(256);
  lineB = random(256);
  lineG = random(256);

  lineR1 = random(256);
  lineB1 = random(256);
  lineG1 = random(256);
  // frameRate(10);
}


function draw() {
  // lineR = random(256);
  // lineB = random(256);
  // lineG = random(256);

  lineR = mouseX/4;
  lineB = mouseY/4;
  lineG = mouseX/8 + mouseY/2;

  lineR1 = mouseX/8;
  lineB1 = mouseY/2;
  lineG1 = mouseX/2 + mouseY/4;
  // stroke(0, 0, 0);
  // strokeWeight(2);
  // fill(25, 0, 0);
  // line(0, 0, width, height);
  // noStroke();

  // fill(255, 255, 255);
  // rect(rectX, rectY, width/8, height/8);

  fill(lineR, lineB, lineG);
  // circle(mouseX, mouseY, height/8);
  // fill(0, 125, 205);
  // square(width/2, height/2, height/4);

  // stroke(lineR, lineB, lineG);
  // strokeWeight(10);
  // line(0, 0, mouseX, mouseY);
  
  // fill(255, 255, 255);
  noStroke();
  // strokeWeight(1);
  rect(0, 0, width/2, height/4);
  rect(width/8+50, height/4, width/6, height);

  fill(lineR1, lineB1, lineG1);
  triangle(width/2, height, width/2, 0, width/2+width/4, height/2);
  triangle(width, 0, width, height, width - width / 4, height / 2);

  if (!alertShown) {
    alert("Move the cursor to interact with the monogram");
    alertShown = true;
  }
}
