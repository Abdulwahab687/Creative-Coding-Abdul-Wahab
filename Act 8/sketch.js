let trails = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 40); // Fading background for smooth trails

  // Add new trail point at mouse position
  let newTrail = {
    x: mouseX,
    y: mouseY,
    size: random(10, 30),
    col: color(random(150, 255), random(100, 255), random(200, 255), 200),
    life: 255
  };
  trails.push(newTrail);

  // Display and update all trails
  for (let i = trails.length - 1; i >= 0; i--) {
    let t = trails[i];

    fill(red(t.col), green(t.col), blue(t.col), t.life);
    ellipse(t.x, t.y, t.size);

    // Shrink and fade
    t.size *= 0.95;
    t.life -= 4;

    // Remove if fully faded
    if (t.life <= 0) {
      trails.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
