let imgTiles;
function preload() {
  imgTiles = loadImage("assets/images/exit8tiles.jpg");
}

function setup() {
  createCanvas(400, 450);
}

function draw() {
  background(50);

  imageMode(CENTER);
  image(imgTiles, 200, 225, 250, 325);

  rectMode(CENTER);
  fill(140, 129, 67);
  noStroke();
  rect(200, 225, 160, 280);

  textAlign(CENTER, CENTER);
  fill(0);
  textSize(80);
  text("8", 200, 225);
}
