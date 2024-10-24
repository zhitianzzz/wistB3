var bigness = 120;
var fonty;
var alertShown = false;

// function preload(){
//     // fonty = loadFont("assets/SourceCodePro-Regular.otf");
// }

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fill(255);
    // textFont(fonty);
}

function draw() {
    textSize(bigness);
    // textAlign(CENTER, CENTER); // Center the text
    // text("Hello World", width / 2, height / 2);

    if (!alertShown) {
        alert("Type on the keyboard to Draw; Use the arrow keys to change the size of the text; Click to clear the screen");
        alertShown = true;
    }
}

function mousePressed(){
  background(0);
}

// function keyPressed(){
//     text(key, mouseX, mouseY);
// }

function keyTyped(){
    text(key, mouseX, mouseY);
}

function keyPressed(){
    if (keyCode === LEFT_ARROW){
        bigness = bigness - 20;
    } else if (keyCode === RIGHT_ARROW){
        bigness = bigness + 20;
    }
}