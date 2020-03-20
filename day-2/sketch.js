let img;

function preload() {
  img = loadImage('earth_no_background.png');
}

function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  
  // slow frame rate
  frameRate(15);

}

function draw() {
  background("black");
  
  //no stroke
  noStroke();
  // add stars
  for(i=0; i<200; i++){
    fill("white");
    ellipse(random(0, width), random(0, height), random(0, 5));
  }
  

  // move the image to the center of the canvas
  translate(width / 2, height / 2);
  
  // apply the final rotation
  rotate(radians(frameCount));
  
  // draw the image
  image(img, 0, 0, 400, 400);
  
}