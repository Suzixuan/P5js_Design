
/*
  Assignment: *Collage: Birds of the world*
  Student: *Chaojun Fan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *
  The topic is birds play around the tree, fly in the sky.

  tree by Annalise Batista from Pixabay
  Image1-4 by DashaDee from Pixabay
  Image5 Gordon Johnson from Pixabay
  Image6-8 OpenClipart-Vectors from Pixabay
  Image9-10 Денис Марчук在Pixabay from Pixabay

  *
  Last Modified: 10/06/2019
*/


var imgs = [];
var b_1_p = [{
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
var b_2_p = [{
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
var b_3_p = [{
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
var b_4_p = [{
  "x": "232",
  "y": "500",
  "size": "60"
}]
var b_5_p = 20;
var c_1_p = 20;
var c_2_p = 580;

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
}

function setup() {
  createCanvas(600, 600);
  frameRate(1);
}

function draw() {

  background(135, 202, 254);

  //grassland
  stroke(0);
  strokeWeight(2);
  fill(59,183,100);
  beginShape();
  curveVertex(0, 500);
  curveVertex(0, 400);
  curveVertex(600, 400);
  curveVertex(600, 500);
  vertex(600,600);
  vertex(0,600);
  endShape(CLOSE);


  //first bird
  var index_1 = random([0, 1]);
  image(imgs[1], b_1_p[index_1]["x"], b_1_p[index_1]["y"], b_1_p[index_1]["size"], b_1_p[index_1]["size"]);
  //second bird
  var index_2 = random([0, 1, 2]);
  image(imgs[2], b_2_p[index_2]["x"], b_2_p[index_2]["y"], b_2_p[index_2]["size"], b_2_p[index_2]["size"]);
  //third bird
  var index_3 = random([0, 1]);
  image(imgs[3], b_3_p[index_3]["x"], b_3_p[index_3]["y"], b_3_p[index_3]["size"], b_3_p[index_3]["size"]);
  //fourth bird
  var index_4 = random([0]);
  image(imgs[4], b_4_p[index_4]["x"], b_4_p[index_4]["y"], b_4_p[index_4]["size"], b_4_p[index_4]["size"]);


  if (c_1_p >= 600 || c_2_p <= 0){
    c_1_p = 0;
    c_2_p = 580;
  }
  //cloud
  image(imgs[9], (c_1_p += 5), 40, 200, 100);
  image(imgs[10], (c_2_p -= 8), 25, 200, 100);

  if (b_5_p >= 600){
    b_5_p = 0;
  }
  //birds fly
  image(imgs[5], (b_5_p += 20), 20, 100, 100);

  //tree
  rotate(random(-5, 5) / PI / 180.0);
  image(imgs[0], 100, 100, 500, 500);

  //birds on the grassland
  image(imgs[6], 500 + random([1,10]), 480 + random([1,10]), 50, 50);
  image(imgs[7], 50 + random([1,10]), 380 + random([1,10]), 30, 30);
  image(imgs[8], 30 + random([1,10]), 300 + random([1,10]), 30, 30);


}
