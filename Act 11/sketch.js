let particles = [];
let colorThemes;
let currentTheme = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
  // Define multiple color themes
  colorThemes = [
    [0, 30, 60],     // Warm reds/oranges
    [120, 180, 240], // Cool greens/blues
    [280, 320, 360]  // Purples/pinks
  ];
  
  // Create initial particles
  for (let i = 0; i < 400; i++) {
    particles.push(new Particle(random(width), random(height)));
  }
}

function draw() {
  background(0, 0.1); // faint trails
  translate(width / 2, height / 2);

  let hues = colorThemes[currentTheme];

  for (let p of particles) {
    p.update();
    p.show(hues);
  }
}

// Particle class
class Particle {
  constructor(x, y) {
    this.pos = createVector(x - width/2, y - height/2);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.acc = createVector(0, 0);
    this.size = random(2, 4);
    this.lifespan = 255;
  }

  update() {
    // Attract particles toward mouse
    let mouseVec = createVector(mouseX - width/2, mouseY - height/2);
    let dir = p5.Vector.sub(mouseVec, this.pos);
    dir.setMag(0.01);
    this.acc.add(dir);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    
    // Wrap around edges
    if (this.pos.x > width/2) this.pos.x = -width/2;
    if (this.pos.x < -width/2) this.pos.x = width/2;
    if (this.pos.y > height/2) this.pos.y = -height/2;
    if (this.pos.y < -height/2) this.pos.y = height/2;
  }

  show(hues) {
    noStroke();
    let c = color(random(hues), 255, 255, 0.7);
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

// On click: particle explosion
function mousePressed() {
  for (let i = 0; i < 50; i++) {
    let p = new Particle(mouseX, mouseY);
    p.vel = p5.Vector.random2D().mult(random(2, 6));
    particles.push(p);
  }
}

// On key press: change color theme
function keyPressed() {
  currentTheme = (currentTheme + 1) % colorThemes.length;
}
