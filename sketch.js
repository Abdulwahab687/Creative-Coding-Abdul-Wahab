function setup() {
  createCanvas(600, 400);
  background(220);
  drawCar(150, 250);
}

function drawCar(x, y) {
  // Car body
  fill(66, 135, 245); // blue
  rect(x, y, 300, 50, 10); // main body with rounded edges
  rect(x + 50, y - 40, 200, 40, 10); // cabin

  // Windows
  fill(180);
  rect(x + 60, y - 35, 50, 30, 5); // front window
  rect(x + 140, y - 35, 50, 30, 5); // rear window

  // Wheels (tire + rim)
  fill(0); 
  ellipse(x + 60, y + 50, 60, 60); // tire
  ellipse(x + 60, y + 50, 25, 25); // rim
  ellipse(x + 240, y + 50, 60, 60); // tire
  ellipse(x + 240, y + 50, 25, 25); // rim

  // Headlights & tail lights
  fill(255, 255, 100); // yellow headlight
  ellipse(x + 295, y + 15, 15, 10); 
  fill(255, 0, 0); // red tail light
  ellipse(x + 5, y + 15, 15, 10); 

  // Front grill
  fill(50);
  rect(x + 285, y + 25, 10, 20);
  rect(x + 290, y + 25, 2, 20);

  // Door handle
  fill(0);
  rect(x + 130, y + 10, 30, 5, 3);

  // Spoiler
  fill(66, 135, 245);
  rect(x - 10, y - 10, 15, 5);
  rect(x - 15, y - 20, 25, 10, 3);
  
  // Window divider
  stroke(0);
  line(x + 110, y - 40, x + 110, y); 
  noStroke();
}
