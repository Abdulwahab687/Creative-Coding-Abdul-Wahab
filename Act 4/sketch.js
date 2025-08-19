let img;

function preload() {
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/640px-PNG_transparency_demonstration_1.png');
}

function setup() {
  createCanvas(400, 400);
  img.resize(400, 400);
  image(img, 0, 0);
  loadPixels();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = pixels[index];
      let g = pixels[index + 1];
      let b = pixels[index + 2];
      
      // Invert colors
      pixels[index] = 255 - r;
      pixels[index + 1] = 255 - g;
      pixels[index + 2] = 255 - b;
    }
  }

  updatePixels();
}
