let pg;
let w = 1;
let h = 1;
let gWidth = 800;
let gHeight = 600;
let cnv;

function setup() {
  cnv = createCanvas(800, 600);
  pg = createGraphics(gWidth, gHeight);
  cnv.mouseWheel(changeSize);
}

function draw() {

  background(255);
  textSize(250);
  fill(255);
  textAlign(CENTER, CENTER);
  text("落 命", 300, 300);

  fill(0);
  rect(0, 0, w, h);

  pg.background(230);
  pg.erase();
  pg.textSize(250);
  // pg.fill(255);
  pg.textAlign(CENTER, CENTER);
  pg.text("落 命", 300, 300);
  // pg.width = w;
  // pg.height = h;
  pg.noErase();
  // pg.fill(0);
  // pg.rect(0, 0, w, h);
  image(pg, 0, 0);


  // textSize(250);
  // fill(255);
  // textAlign(CENTER, CENTER);
  // text("落 命", 300, 300);

}

function changeSize(event) {
  print(w + "/" + h);
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

/*
https://www.openprocessing.org/sketch/841950
https://www.openprocessing.org/sketch/842288
http://blog.livedoor.jp/reona396/archives/55824524.html
https://cloud.tencent.com/developer/ask/154807

*/
