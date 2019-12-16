

/*
  Assignment: Drawing with Code
  Student: *ChaoJun Fan*
  Pasadena City College, Fall 2019
  Prof. Masood Kamandy
  Project Description: This program is a recreation of
  the painting [ambitious crop] with code.
  Last Modified: September 12, 2019
  */


function setup(){
  createCanvas(600, 600);
  noStroke();
}

function draw(){
  background(158,217,221);
  //beginning of left 1, row 1
  fill(255, 207, 6);
  quad(25, 25, 95, 25, 95, 315, 26, 410);

  fill(247,238, 49);
  quad(122, 25, 185, 25, 185, 190, 120, 280);

  beginShape();
  fill(0);
  vertex(210, 25);
  vertex(260, 25);
  vertex(260, 90);
  vertex(227, 133);
  vertex(210, 133);
  endShape();

  fill(0);
  triangle(283, 25, 305, 25, 283, 55);

  fill(255);
  beginShape();
  vertex(335, 25);
  vertex(397, 25);
  vertex(397, 135);
  vertex(283, 135);
  vertex(283, 100);
  endShape();

  fill(0);
  rect(420, 25, 110, 110);

  fill(25, 193, 232);
  rect(560, 25, 40, 110);

  // left 1, row 2
  fill(0);
  quad(25, 450, 95, 355, 95, 470, 25, 470);

  fill(255);
  quad(122, 320, 185, 230, 185, 470, 122, 470);

  fill(0);
  beginShape();
  vertex(210, 195);
  vertex(240, 160);
  vertex(260, 160);
  vertex(260, 470);
  vertex(210, 470);
  endShape();

  fill(255);
  rect(283, 160, 114, 310);

  fill(52, 51, 109);
  rect(420, 160, 114, 310);

  fill(25, 193, 232);
  rect(560, 160, 40, 540);

  // left 1, row 3
  fill(255);
  rect(25, 495, 70, 105);

  fill(131, 139, 141);
  rect(122, 495, 63, 105);
  rect(210, 495, 50, 105);

  fill(245, 121, 33);
  rect(283, 495, 114, 310);

  fill(25, 193, 232);
  rect(420, 495, 114, 310);

  fill(52, 51, 109);
  triangle(548, 480, 600, 412, 600, 550);



}
