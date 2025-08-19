function setup() {
  createCanvas(400, 400);
  background(20);
  angleMode(DEGREES);
  noLoop();

  drawAlien();
}

function drawAlien() {
  push();
  translate(width / 2, height / 2); // Center the alien

  // Body
  fill(100, 255, 100);
  stroke(0);
  ellipse(0, 50, 80, 120);

  // Belt
  fill(50, 50, 50);
  rectMode(CENTER);
  rect(0, 80, 80, 10);

  // Head
  fill(100, 255, 100);
  ellipse(0, -50, 100, 100);

  // Eyes
  fill(255);
  ellipse(-20, -55, 20, 30);
  ellipse(20, -55, 20, 30);
  fill(0);
  ellipse(-20, -55, 10, 20);
  ellipse(20, -55, 10, 20);

  // Antennae using bezierVertex
  stroke(255, 0, 255);
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(-25, -90);
  bezierVertex(-40, -110, -30, -130, -10, -110);
  endShape();

  beginShape();
  vertex(25, -90);
  bezierVertex(40, -110, 30, -130, 10, -110);
  endShape();

  // Arms
  noFill();
  stroke(0, 255, 255);
  strokeWeight(4);
  beginShape();
  vertex(-40, 40);
  bezierVertex(-80, 50, -80, 90, -40, 100);
  endShape();

  beginShape();
  vertex(40, 40);
  bezierVertex(80, 50, 80, 90, 40, 100);
  endShape();

  // Legs using push/pop and rotate
  stroke(100, 255, 100);
  strokeWeight(6);
  for (let i = -1; i <= 1; i += 2) {
    push();
    translate(i * 20, 110);
    rotate(i * 15);
    line(0, 0, 0, 30);
    pop();
  }

  pop();
}
