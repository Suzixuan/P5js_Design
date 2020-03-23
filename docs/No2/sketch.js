
let fontName;

function setup() {
  createCanvas(800, 600);
  fontName = new FontName();
  frameRate(5);
}

function draw() {
  background(10);

  let sec = new Date().getSeconds();
  let millsec = new Date().getMilliseconds() % 60;
  fontName.show(sec, millsec);
}

class FontName {
  constructor() {

  }
  show(sec, millsec) {
    let thisSec;
    let thisMillsec;
    let point = ":";
    textStyle(BOLD);
    stroke(0, 0, 0, 50);
    fill(240, 133, 113, 240);
    textSize(150);
    text(point, 350, 340);


    if (sec >= 10) {
      thisSec = sec;
    } else {
      thisSec = "0" + sec;
    }
    text(thisSec, 150, 350);
    text(millsec, 400, 350);

    push();
    stroke(207, 75, 87, 150);
    noFill();
    for (var j = 0; j < 4; j++) {
      textSize(150 + j * 20);
      text(thisSec, 150 - j * 30, 350 + j * 5);
      text(point, 350 - j * 3, 340 + j * 6);
      text(millsec, 400 + j * 5, 350 + j * 5);
    }
    pop();
  }
}

/*
https://blog.csdn.net/A757291228/article/details/60779495
*/
