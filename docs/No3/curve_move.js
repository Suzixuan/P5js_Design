function setup() {
  createCanvas(600, 600);
  background(102);
  frameRate(60);
}

// var x = 0;
// var y = 0;
// var px = 0;
// var py = 0;
// var easing = 0.05;
let a = 0.0;

function draw() {
  // frameRate(60);
  // var saturation = random(30, 100);
  // var brightness = random(80, 100);
  // var x = random(-width / 2, width / 2);
  // var yoff = random(10.00);
  // var yoffDelta = random(0.01, 0.05);
  // var xoffDelta = random(0.005, 0.02);
  // var vertexDeltaA = floor(random(1, 6));
  // var vertexDeltaB = floor(random(1, 6));

  stroke(255);
  // beginShape();
  // let xoff = 0.0;
  // for (let y = 0; y < height; y += vertexDeltaA) {
  //   curveVertex(map(noise(xoff, yoff), 0, 1, 0, width), y);
  //   xoff += xoffDelta;
  // }

  // let inc = TWO_PI / 25.0;
  // for (var i = 0; i < 10000; i++) {
  let offset = map(sin(a), -1, 1, 30, 70,true);
  ellipse(0 + millis() / 10, 300 + sin(a) * offset, 4, 4);
  // }
  a += 0.05;


  // var targetX = mouseX;
  // x += (targetX - x) * easing;
  // var targetY = mouseY;
  // y += (targetY - y) * easing;
  // var weight = dist(x, y, px, py);
  // strokeWeight(weight);
  // line(x, y, px, py);
  // py = y;
  // px = x;
  // }

  // endShape();

}
