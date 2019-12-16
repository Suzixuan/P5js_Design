/*
  Assignment: *Collage Engine II: Birds of the world*
  Student: *Chaojun Fan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *
  The topic is birds play around the tree, fly in the sky.
  Watch the sunrise and sunset.
  The car is Climbing;

  tree by Annalise Batista from Pixabay
  Image1-4 by DashaDee from Pixabay
  Image5 Gordon Johnson from Pixabay
  Image6-8 OpenClipart-Vectors from Pixabay
  Image9-10 Денис Марчук在Pixabay from Pixabay
  Image car Pettycon from Pixabay

  *
  Last Modified: 10/20/2019
*/


var imgs = [];
var b_1 = [{
    "x": "402",
    "y": "455",
    "size": "100"
  },
  {
    "x": "270",
    "y": "280",
    "size": "50"
  }
]
var b_2 = [{
    "x": "200",
    "y": "350",
    "size": "80"
  },
  {
    "x": "410",
    "y": "320",
    "size": "60"
  },
  {
    "x": "180",
    "y": "180",
    "size": "90"
  }
]
var b_3 = [{
    "x": "360",
    "y": "370",
    "size": "40"
  },
  {
    "x": "240",
    "y": "430",
    "size": "50"
  }
]
var b_4 = [{
    "x": "232",
    "y": "500",
    "size": "60"
  },
  {
    "x": "230",
    "y": "450",
    "size": "55"
  }
]
var b_5 = 20;
var c_1 = 20;
var c_2 = 580;

function preload() {
  imgs[0] = loadImage("tree.png");
  imgs[1] = loadImage("birds-1.png");
  imgs[2] = loadImage("birds-2.png");
  imgs[3] = loadImage("birds-3.png");
  imgs[4] = loadImage("birds-4.png");
  imgs[5] = loadImage("birds-5.png");
  imgs[6] = loadImage("birds-6.png");
  imgs[7] = loadImage("birds-7.png");
  imgs[8] = loadImage("birds-8.png");
  imgs[9] = loadImage("clouds-1.png");
  imgs[10] = loadImage("clouds-2.png");
  imgs[11] = loadImage("car.png");
}

function setup() {
  createCanvas(600, 600);
  // setTimeout(birds, 1000);
  // birdss();

}

function draw() {
  newStuff();
  originalStuff();
  birds();
  // setInterval(originalStuff,1000);
}

var angle = 0;
var scalar = 25;
var speed = 0.025;
var count = 0;

function newStuff() {

  if (cos(angle) >= 0) {
    background(49, 52, 57);
  } else {
    background(135, 202, 254);
  }


  //sun
  push();
  var x = 300 + sin(angle) * 300;
  var y = 280 + cos(angle) * 300;
  fill(237, 211, 82);
  noStroke();
  // xe += (x - xe) * easing;
  // ye += (y - ye) * easing;
  // print(cos(angle));
  if (x >= 0 && x <= 500) {
    // ellipse(x,y,0,0);
  } else {
    ellipse(x, y, 60, 60);
  }
  ellipse(x, y, 60, 60);
  pop();

  //grassland
  stroke(0);
  strokeWeight(2);
  if (cos(angle) >= 0) {
    fill(64, 113, 80);
  } else {
    fill(59, 183, 100);
  }
  beginShape();
  curveVertex(0, 500);
  curveVertex(0, 400);
  curveVertex(600, 400);
  curveVertex(600, 500);
  vertex(600, 600);
  vertex(0, 600);
  endShape(CLOSE);

  //car
  push();
  // rotate(6 * PI/180);
  var y = sin(angle) * scalar;
  translate(count, y);
  angle += speed;
  count = -(millis() / 10) % 600;
  scale(map(count, 0, -600, 1.5, 1));
  image(imgs[11], 550, 350, 100, 100);
  pop();



  //tree
  // rotate(random(-5, 5) / PI / 180.0);
  image(imgs[0], 100, 100, 500, 500);
}


function originalStuff() {


  if (c_1 >= 600 || c_2 <= 0) {
    c_1 = 0;
    c_2 = 580;
  }
  //cloud
  image(imgs[9], (c_1 += 0.5), 40, 200, 100);
  image(imgs[10], (c_2 -= 0.8), 25, 200, 100);

  if (b_5 >= 600) {
    b_5 = 0;
  }
  //birds fly
  image(imgs[5], (b_5 += 0.5), 20, 100, 100);

  // birds();
}


var i = 1;
var imgCount = 1;
var b_index = 0;
function birds() {

  //controll Rate
  if (frameCount >= i * 60) {
    b_index = random([0, 1]);
    imgCount = random([1, 2, 3, 4]);
    print(frameCount); // first bird
    i += 1;
  }
  image(imgs[1], b_1[b_index]["x"], b_1[b_index]["y"], b_1[b_index]["size"], b_1[b_index]["size"]);
  //second bird
  // var index_2 = random([0, 1]);
  image(imgs[2], b_2[b_index]["x"], b_2[b_index]["y"], b_2[b_index]["size"], b_2[b_index]["size"]);
  // //third bird
  // // var b_index_3 = random([0, 1]);
  image(imgs[3], b_3[b_index]["x"], b_3[b_index]["y"], b_3[b_index]["size"], b_3[b_index]["size"]);
  // //fourth bird
  // // var b_index_4 = random([0, 1]);
  image(imgs[4], b_4[b_index]["x"], b_4[b_index]["y"], b_4[b_index]["size"], b_4[b_index]["size"]);

  //birds on the grassland
  image(imgs[6], 500 + map(b_index,0,1,0,10), 480 + map(b_index,0,1,0,10), 50, 50);
  image(imgs[7], 50 + map(b_index,0,1,0,10), 380 + map(b_index,0,1,0,10), 30, 30);
  image(imgs[8], 30 + map(b_index,0,1,0,10), 300 + map(b_index,0,1,0,10), 30, 30);

}
