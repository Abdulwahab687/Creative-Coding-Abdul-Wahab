function setup() {
  createCanvas(400, 400);
  background(20);
  noLoop(); // Only draw once (generative art style)
}

function draw() {
  let gridSize = 40;
  noFill();
  strokeWeight(2);

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      push();
      translate(x + gridSize / 2, y + gridSize / 2);

      // Random rotation
      rotate(random(TWO_PI));

      // Random stroke color
      stroke(random(100, 255), random(100, 255), random(100, 255));

      // Random shape selection
      let shapeType = int(random(3));
      if (shapeType === 0) {
        line(-10, 0, 10, 0); // line
      } else if (shapeType === 1) {
        ellipse(0, 0, 15, 15); // circle
      } else {
        triangle(-8, 8, 8, 8, 0, -8); // triangle
      }

      pop();
    }
  }
}

