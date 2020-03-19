let img;

function preload() {
  img = loadImage('assets/earth_no_background.png');
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  
  // slow frame rate
  frameRate(5);
  
  // add stars
  for(i=0; i<200; i++){
    fill("white");
    ellipse(random(0, width), random(0, height), random(0, 5));
  }
  
  image(img, -50, 150, 700, 700);
  
}