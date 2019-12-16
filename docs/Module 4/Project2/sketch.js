/*
  Assignment: *Typography with Functions*
  Student: *Chaojun Fan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *design: C,F,A. using some lines to make an animation.*
  Last Modified: 10/19/19
  */




function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  drawAll();
}

var offset = 0;
function drawAll() {
  var swing = int(random(-5, 5));
  var color = int(random(200, 255));
  offset = random(300, 500) - millis() / 5;
  if (offset < 0) {
    offset = 0;
  }
  background(245, 245, 245);
  strokeWeight(1);
  // text(str(mouseX), 10, 10);
  // text(str(mouseY), 300, 10);
  fill(65, 80, 101, color);
  drawC(swing, offset);
  drawF(offset);
  drawA(offset);
}


function drawC(swing, offset) {
  arc(120, 300, 200, 200, 120 + swing, 300 - swing);
  stroke(236, 35, 94);
  strokeWeight(1);
  for (var i = 0; i <= 25; i += 5) {
    line(170 + i + offset, 215 + i, 45 + i + offset, 260 + i);
    if (i > 1) {
      line(45 + i * 1.2, 260 + i * 1.2 - 5 + offset, 70 + i * 1.2, 385 + i + offset);
    } else {
      line(45 + i, 260 + i + offset, 70 + i, 385 + i + offset);
    }
  }
}


function drawF(offset) {
  noStroke();
  triangle(225, 205, 360, 205, 225, 300);
  // push();
  strokeWeight(3);
  stroke(65, 80, 101);
  line(226, 300, 226, 410);
  // pop();
  strokeWeight(1);
  stroke(236, 35, 94);
  for (var i = 0; i <= 25; i += 5) {
    line(210 - offset, 290 + i, 360 + offset, 290 + i);
  }
}

function drawA(offset) {
  noStroke();
  strokeWeight(3);
  triangle(490, 205, 550, 300 - offset, 430, 300 - offset);
  stroke(65, 80, 101);
  line(432, 300 + offset, 365, 415 + offset);
  line(548, 300 + offset, 610, 415 + offset);
  strokeWeight(1);
  stroke(236, 35, 94);
  for (var i = 0; i < 6; i += 1) {
    var p = i * 10;
    if (i < 3) {
      line(490, 200 + p, 360, 415 + p);
    } else {
      line(490, 170 + p, 635, 415 + p);
    }

  }
}
