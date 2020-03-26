let to;
let from;
let interA;
let interB;
let mountainColor;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(140, 160, 250);
  noStroke();
  from = color(17, 2, 227)
  to = color(152, 34, 242);


  interA = lerpColor(from, to, 0.33);
  interB = lerpColor(from, to, 0.66);
  mountainColor = color(34, 72, 242);

  if (mouseY >= height / 2) {
    background(191, 149, 132);
    from = color(227, 68, 2)
    to = color(242, 155, 119);

    interA = lerpColor(from, to, 0.33);
    interB = lerpColor(from, to, 0.66);
    mountainColor = color(168, 112, 89);
  }

  sky()
  mountains()
  hills()
  ground()
}

function sky() {
  fill(from);
  rect(0, 0, width, 60);
  fill(interA);
  rect(0, 20, width, 60);
  fill(interB);
  rect(0, 40, width, 60);
  fill(to);
  rect(0, 60, width, 60);
}

function mountains() {
  fill(mountainColor);
  triangle(20, 280, 58, 180, 120, 280);
  triangle(60, 280, 98, 180, 140, 280);
  triangle(100, 280, 158, 180, 200, 280);
}

function hills() {
  fill(from)
  ellipse(300, 280, 55, 80);
  ellipse(360, 300, 50, 80);
}

function ground() {
  fill(to)
  rect(0, 280, width, height - 280)
}