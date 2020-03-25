let to;
let from;
let interA;
let interB;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(191, 149, 132);
  noStroke();
  to = color(242, 155, 119);
  from = color(227, 68, 2)

  interA = lerpColor(from, to, 0.33);
  interB = lerpColor(from, to, 0.66);
  
  sky()
  mountains()
  hills()
  ground()
}

function sky(){
  fill(from);
  rect(0, 0, width, 60);
  fill(interA);
  rect(0, 20, width, 60);
  fill(interB);
  rect(0, 40, width, 60);
  fill(to);
  rect(0, 60, width, 60);
}

function mountains(){
  fill(168, 112, 89)
  triangle(20, 280, 58, 180, 120, 280); 
  triangle(60, 280, 98, 180, 140, 280); 
  triangle(100, 280, 158, 180, 200, 280); 
}

function hills(){
  fill(227, 68, 2)
  ellipse(300, 280, 50, 80);
}

function ground(){
  fill(to)
  rect(0, 280, width, height - 280)
}