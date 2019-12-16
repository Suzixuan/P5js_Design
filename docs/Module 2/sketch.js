/*
  Assignment: *animated and interactive*
  Student: *ChaojunFan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description:
  1. When the cursor is on the first and second quad, these quads and bottom quads will combine to from two rectangles.
     Other figures will shake.
  2. When the left mouseButton is pressed on the red ellipse, nearby rectangles will combine to from a big rectangle.
  3. When LEFT_ARROW,RIGHT_ARROW,a and d are pressed, the triangle will move.

  Last Modified: 9/22/19

*/

function setup() {
  createCanvas(600, 600);
  // noStroke();
  stroke(158, 217, 221);
  ellipseMode(RADIUS);
  modules = new Module();
}

class Module {

  weight(rm) {
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    if (rm == false) {
      strokeWeight(0);
    } else {
      strokeWeight(weight);
    }
  }

  /**
  gap = 0 to x1
  max_height == y4
  w == x2
  y == y3
  **/
  quad_position(x1, y1, w, h, gap, max_height, offset, order, color) {
    // print(mouseX + "   " + mouseY);
    // separate rect from quad
    if ((mouseX > x1) && (mouseX < w) && (mouseY > y1) && (mouseY < h)) {
      fill(color);
      order == 1 ? quad(25, 25 + offset, 95, 25 + offset, 95, 315 + offset, 25, 410 + offset) : null;
      order == 2 ? quad(122, 25 + offset, 185, 25 + offset, 185, 190 + offset, 120, 280 + offset) : null;
      modules.weight();

      // separate triangle from quad
    } else if ((mouseY >= h && mouseY <= max_height) && mouseX <= w / 2 + gap && mouseX >= gap) {
      fill(color);
      order == 1 ? quad(25, 25 + offset, 95, 25 + offset, 95, 315 + offset, 26, 410 + offset) : null;
      order == 2 ? quad(122, 25 + offset, 185, 25 + offset, 185, 190 + offset, 120, 280 + offset) : null;
      modules.weight();
    } else {
      order == 1 ? quad(25, 25, 95, 25, 95, 315, 26, 410) : null;
      order == 2 ? quad(122, 25, 185, 25, 185, 190, 120, 280) : null;
      modules.weight(false);
    }

  }
}


var triangle_x = 600;

function draw() {
  background(158, 217, 221);
  //beginning of left 1, row 1
  // if(mouseIsPressed){

  fill(255, 207, 6);
  // quad(25, 25, 95, 25, 95, 315, 26, 410)
  modules.quad_position(25, 25, 95, 310, 25, 410, 40, 1, 0);


  fill(247, 238, 49);
  // quad(122, 25, 185, 25, 185, 190, 120, 280);
  modules.quad_position(122, 25, 185, 190, 100, 280, 40, 2, 255);


  fill(152,45,28);
  var d = dist(mouseX, mouseY, 410, 145);
  var count = 0;
  var offsetX = 10 + mouseX - 410;
  var offsetY = 10 + mouseY - 145;
  if(d > 10){
    ellipse(410, 145, 10, 10);
    count = 0;
  }else{
    ellipse(410, 145, 50, 50);
    if(mouseIsPressed){
      count = 1;
      fill(101,120,68);
      rect(283 + offsetX , 25 + offsetY, 397-283, 135-25);
      rect(420 - offsetX, 25 + offsetY, 114, 110);
      rect(283 + offsetX, 160 - offsetY, 114, 310);
      rect(420 - offsetX, 160 - offsetY, 114, 310);
      modules.weight();
    }
  }

  if(count == 0){
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
    // left 1, row 2
    fill(255);
    rect(283, 160, 114, 310);
    fill(52, 51, 109);
    rect(420, 160, 114, 310);
  }



  beginShape();
  fill(0);
  vertex(210, 25);
  vertex(260, 25);
  vertex(260, 90);
  vertex(227, 133);
  vertex(210, 133);
  endShape();



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

  // fill(255);
  // rect(283, 160, 114, 310);

  // fill(52, 51, 109);
  // rect(420, 160, 114, 310);

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
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW || key == "a"){
      triangle_x -= 5;
    }else if(keyCode == RIGHT_ARROW  || key == "d"){
      triangle_x += 5;
    }
    triangle(triangle_x - 52, 480, triangle_x, 412, triangle_x, 550);
  }else{
    triangle(triangle_x - 52, 480, triangle_x, 412, triangle_x, 550);
  }


}
