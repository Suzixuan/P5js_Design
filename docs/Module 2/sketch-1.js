/*
  Assignment: *grid of circles*
  Student: *ChaojunFan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description:
  1.these circles are shake automatically, a simple visual effect.
  2.When the cursor is on one of the circles, this circle will move quikly, nearby circles will move on the basis of degrees.
  Last Modified: 9/22/19
*/
function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  var mouse_x = mouseX;
  var mouse_y = mouseY;
  let r1 = random(-0.3, -4.3);
  let r = random(-0.1, -60.6);
  let r2 = random(0, 360);
  // print(mousex+"   "+mousey);
  background(0);
  for (var y = 12; y < height; y += 25) {
    for (var x = 12; x < width; x += 25) {
      if (dist(x, y, mouse_x, mouse_y) <= 10) {
        fill(213,82,73); //why do I use alpha value, right and bottom colors are different.
        ellipse(x - r, y + r, 20 + r, 20 + r);
        arc(x, y - 25, 25, 25, 0, r2); //top
        arc(x - 25, y, 25, 25, 0, r2); //left
        arc(x + 25, y, 25, 25, 0, r2); //right
        arc(x, y + 25, 25, 25, 0, r2); //bottom

      } else {
        fill(255, 140);
        ellipse(x, y, 20 + r1, 20 + r1);
      }
    }
  }

}
