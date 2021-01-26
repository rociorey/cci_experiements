let img;

function preload() {
  img = loadImage('sculpture.jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  image(img,0,0);
  let c = get(mouseX, mouseY);
  fill(c);
  circle(100, 100, 80);
   
}
