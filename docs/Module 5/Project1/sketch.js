/*
  Assignment: *Typography with Functions*
  Student: *Chaojun Fan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *
  design: C,F,A. using some lines to make an animation.
  rewirite the codes and using class. I just confused about
  4th object that contains the 3 first objects. If do this,
  I need to initialize the class in the draw().
  I know this maybe is not good
  *
  Last Modified: 11/03/19
  */

let c, f, a, all;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

}

function draw() {
  var swing = random(-5, 5);
  var colors = int(random(200, 255));
  var offset = random(300, 500) - millis() / 5;
  if (offset < 0) {
    offset = 0;
  }

  all = new DrawAll(swing, offset, colors);
  all.show();
  all.contain();

}


class DrawAll {
  constructor(swing, offset, colors) {
    this.swing = swing;
    this.offset = offset;
    this.colors = colors;
  }


  show() {
    background(245, 245, 245);
    strokeWeight(1);
    fill(65, 80, 101, this.colors);
  }

  contain() {
    c = new DrawC(this.swing, this.offset);
    c.shape();
    c.move();
    f = new DrawF(this.offset);
    f.shape();
    f.move();
    a = new DrawA(this.offset);
    a.shape();
    a.move();
  }


}

class DrawC {
  constructor(swing, offset) {
    this.swing = swing;
    this.offset = offset;
  }

  shape() {
    arc(120, 300, 200, 200, 120 + this.swing, 300 - this.swing);
    stroke(236, 35, 94);
    strokeWeight(1);
  }

  move() {
    for (var i = 0; i <= 25; i += 5) {
      line(170 + i + this.offset, 215 + i, 45 + i + this.offset, 260 + i);
      if (i > 1) {
        line(45 + i * 1.2, 260 + i * 1.2 - 5 + this.offset, 70 + i * 1.2, 385 + i + this.offset);
      } else {
        line(45 + i, 260 + i + this.offset, 70 + i, 385 + i + this.offset);
      }
    }
  }
}

class DrawF {
  constructor(offset) {
    this.offset = offset;
  }

  shape() {
    noStroke();
    triangle(225, 205, 360, 205, 225, 300);
    strokeWeight(3);
    stroke(65, 80, 101);
    line(226, 300, 226, 410);
    strokeWeight(1);
    stroke(236, 35, 94);
  }

  move() {
    for (var i = 0; i <= 25; i += 5) {
      line(210 - this.offset, 290 + i, 360 + this.offset, 290 + i);
    }
  }
}

class DrawA {
  constructor(offset) {
    this.offset = offset;
  }

  shape() {
    noStroke();
    strokeWeight(3);
    triangle(490, 205, 550, 300 - this.offset, 430, 300 - this.offset);
    stroke(65, 80, 101);
    line(432, 300 + this.offset, 365, 415 + this.offset);
    line(548, 300 + this.offset, 610, 415 + this.offset);
    strokeWeight(1);
    stroke(236, 35, 94);
  }

  move() {
    for (var i = 0; i < 6; i += 1) {
      var p = i * 10;
      if (i < 3) {
        line(490, 200 + p, 360, 415 + p);
      } else {
        line(490, 170 + p, 635, 415 + p);
      }
    }
  }
}
