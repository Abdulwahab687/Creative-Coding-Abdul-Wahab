function setup() {
  createCanvas(400, 400);
  background(255);

  // Face Box
  fill(255, 255, 204); // Light yellow
  stroke(0);
  rect(50, 50, 300, 300);

  // Eyes
  fill(0, 102, 204); // Blue
  ellipse(150, 150, 20, 40);
  ellipse(250, 150, 20, 40);

  // Smile
  noFill();
  stroke(255, 105, 180); // Pink
  strokeWeight(5);
  arc(200, 250, 150, 100, 0, PI);
}
let eyeOpen = true;
let smileAngle = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(10); // Slow blink
}

function draw() {
  background(255);

  // Face Box
  fill(255, 255, 204);
  stroke(0);
  rect(50, 50, 300, 300);

  // Eyes (blink every few frames)
  fill(0);
  if (frameCount % 20 < 10) {
    // Open eyes
    ellipse(150, 150, 20, 40);
    ellipse(250, 150, 20, 40);
  } else {
    // Closed eyes
    rect(140, 150, 20, 5);
    rect(240, 150, 20, 5);
  }

  // Smile animation (bobbing up and down)
  noFill();
  stroke(255, 105, 180);
  strokeWeight(5);
  let smileY = 250 + sin(frameCount * 0.1) * 5;
  arc(200, smileY, 150, 100, 0, PI);
}
