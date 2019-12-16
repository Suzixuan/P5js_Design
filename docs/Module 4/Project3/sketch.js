/*
  Assignment: *Expanded Cinema*
  Student: *ChaojunFan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *
  The inspiration came from Tom and Jerry.
  Cliking the buttons to look through the images, there are some options
  you need to choose them so that the story will have a happy ending.
  If you choose some bad options,then you will go back to previous event.

  Q: Why can't I remove the button when I need to change transition?

  *
  Last Modified: 10/20/19
  */


var counter = 0;
var transition = 1;
var scenceOptions = "2,4,6";
var imgs = [];
var stop = false;
var stopCounter = 0;
var positionX = 50;
var positionY = 50;
var button, button1, button2;
var buttonContent = [{
  "left": "ignore",
  "right": "go and see"
}]
var content = [
  "plump!!",
  "When Jerry see someone who throw something in the river.",
  "3", "4", "5"

];

function preload() {
  for (var i = 1; i <= 29; i++) {
    imgs[i] = loadImage("imgs/" + str(i) + ".png");
  }
}

function setup() {
  createCanvas(600, 600);
  button = createButton('previous');
  button.mouseClicked(previousEvents);
  button.position(100, 530);
  button = createButton('next');
  button.position(500, 530);
  button.mouseClicked(nextEvents);


  // options

}

function draw() {
  clear();
  background(0);
  switch (counter) {
    case 0:
      scene1();
    case 1:
    case 2:
    case 3:
    default:
  }

  //content
  fill(255);
  textSize(15);
  text(str(content[transition - 1]), 100, 580);


  options();
  print(transition + " " + stop + " ");
}

function scene1() {
  var focus = 0;
  var matched = matchs();
  if (matched.length > 0) {
    stop = true;
    focus = 5;
    stopCounter = 0;
  } else {
    stop = false;
  }
  image(imgs[transition], positionX, positionY, 500 + random(focus), 500 + random(focus));
}

function previousEvents() {
  if (transition > 1 && transition < 29) {
    transition--;
    options();
  }
}

function nextEvents() {
  // && stop == false
  if (transition >= 0 && transition <= 29) {
    transition++;
    options();
  }
}

function matchs() {
  var matched = matchAll(scenceOptions, str(transition));
  return matched;
}

function options() {
  var matched = matchs();
  if(matched.length > 0){button1.remove();}
  button1 = createButton(str(buttonContent[stopCounter]["left"]));
  button1.position(220, 530);

  button1 = createButton(str(buttonContent[stopCounter]["right"]));
  button1.position(350, 530);


}

function mouseClicked() {
  // clear();
}
