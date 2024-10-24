var alertShown = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  //frameRate(20);
  //noStroke();
}


function draw() {
  stroke(255);
  strokeWeight(10);
  // line(mouseX, mouseY, pmouseX, pmouseY);
  
  if (mouseIsPressed === true) {
    push();
      noStroke();
      fill(0);
      circle(mouseX, mouseY, 100);
    pop();
  } else {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (!alertShown) {
    alert("Move the cursor to draw; click and drag to erase");
    alertShown = true;
  }
}

