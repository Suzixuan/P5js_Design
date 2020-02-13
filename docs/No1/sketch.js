let cnv;
let w = 0;
let h = 0;
let img;

function preload() {
  img = loadImage("2020-02-12_153547.png");
}

function setup() {
  cnv = createCanvas(windowWidth - 25, windowHeight - 25);
  cnv.mouseWheel(changeSize);
}

function draw() {
  background(255);


  textStyle(BOLD);
  textSize(300);
  // noFill();
  fill(0);
  stroke(1);
  text('450', 500, 500);


  rectMode(RADIUS);
  fill(0);
  rect(360, 400, w, h, 50);

  rectMode(CENTER);
  fill(250);
  image(img, 240, 250);

  push();
  fill(255);
  noStroke();
  rect(790, 400, 600 - w, 300);
  pop();

  textStyle(BOLD);
  textSize(300);
  noStroke();
  if (w >= windowWidth / 2) {
    fill(0);
  } else {
    fill(255);
  }

  text('450', 500, 500);



}

function changeSize(event) {
  if (event.deltaY > 0) {
    w = w + 60;
    h = h + 80;

  } else {
    if (w <= 1 && h <= 1) {
      return;
    }
    w = w - 60;
    h = h - 80;
  }
}
