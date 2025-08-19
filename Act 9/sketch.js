let continents = ["Asia", "Africa", "Europe", "North America", "South America", "Oceania"];
let population = [4700, 1400, 740, 600, 440, 44]; // in millions
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(16);

  // Generate random colors for each continent
  for (let i = 0; i < continents.length; i++) {
    colors.push(color(random(100, 255), random(100, 255), random(100, 255)));
  }
}

function draw() {
  background(20);

  let total = population.reduce((a, b) => a + b, 0);

  // Draw interactive bar chart
  let barWidth = width / (continents.length * 2);
  for (let i = 0; i < continents.length; i++) {
    let barHeight = map(population[i], 0, 5000, 0, height * 0.6);
    let x = (i * 2 + 1) * barWidth;
    let y = height - barHeight - 50;

    // Highlight on hover
    if (mouseX > x - barWidth / 2 && mouseX < x + barWidth / 2 && mouseY < height - 50 && mouseY > y) {
      fill(255, 200, 0);
      rect(x - barWidth / 2, y, barWidth, barHeight);
      fill(255);
      text(continents[i] + ": " + population[i] + "M", x, y - 20);
    } else {
      fill(colors[i]);
      rect(x - barWidth / 2, y, barWidth, barHeight);
    }

    // Labels
    fill(255);
    text(continents[i], x, height - 25);
  }

  // Title
  textSize(22);
  fill(255);
  text("World Population by Continent (2023)", width / 2, 30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
