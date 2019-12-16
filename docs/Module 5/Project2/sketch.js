/*
  Assignment: *Expanded Cinema*
  Student: *ChaojunFan*
  Pasadena City College, Term (F), 2019
  Prof. Masood Kamandy
  Project Description: *
  The inspiration came from my daily.
  Cliking the buttons to look through the images, there are some options
  you need to choose them so that the story will have a happy ending.
  If you choose some bad options,then you will go back to previous event.

  *I changed the story because I couldn't find the images to match up my last story.
  *If you see the button, it means you must choose one to continue.
  *You must notice the time, and void more than 10:00;


  Photo3-4 from Pixabay
  Photo5 by Acharaporn Kamornboonyarush from Pexels
  Photo100 by DarkWorkX from Pixabay
  Photo9 by Diego Fabian Parra Pabon from Pixabay
  Ohters from my album.


  *
  Last Modified: 11/03/19
  */

//Controll the all scene options
var scenceOptions = [1, 2, 3, 4, 5, 6, 8, 10];
var counter = 0;
var transition = 0;
var endCount = null;
var imgs = [];
var stop = false;
var positionX = 50;
var positionY = 50;
//time
var totalHour = 23;
var totalMinute = 0;

/*
1: first option starts(8:00), after this, each first option is branch1, each second ones is branch1.1
2: second option starts(9:00), same as ...
*/
var timeBranch = 0;

var sceneContents = [{
    "content": "I have an important exam tomorrow.\n The class begin at 10:00 a.m."
  }, {
    "content": "You finished homework until 11pm, you want to ....",
    "option1": "browse\nthe web",
    "option2": "TV Play",
    "option3": "video\ngame",
  }, {
    "content": "The next morning. Wake up.......",
    "option1": "get up",
    "option2": "----------",
    "option3": "sleep\nmore",
  }, {
    "content": "you already sleep more 30 minutes.....you want to....",
    "option1": "get up",
    "option2": "----------",
    "option3": "sleep\nmore!",
  }, {
    "content": "To eat breakfast, you want to....",
    "option1": "apple/\nbread",
    "option2": "----------",
    "option3": "make\nsandwich"
  }, {
    "content": "How to go to school, you want to....",
    "option1": "  Drving",
    "option2": "----------",
    "option3": "  Uber"
  }, {
    "content": "     In the traffic jam, you want to....",
    "option1": "left turn",
    "option2": "----------",
    "option3": "waiting"
  }, {
    // null
    "content": ""
  }, {
    "content": " there are almost no cars in the driveway. speed up...",
    "option1": "45mph",
    "option2": "----------",
    "option3": "55mph"
  }, {
    // null
    "content": ""
  }, {
    "content": "In the parking lot, you want to ...",
    "option1": "to buy \nticket",
    "option2": "----------",
    "option3": "   run!"
  }

]

var endContents = [{
  "content": "End 1: oversleep.",
}, {
  "content": "End 2: miss the class."
}, {
  "content": "End 3: you're late."
}, {
  "content": "End 4: safe arrival."
}, {
  "content": "End 5: wait too long."
}, {
  "content": "End 6: pull over!"
}, {
  "content": "End 7: only a few\n minutes"
}];


function preload() {
  for (var i = 1; i <= 11; i++) {
    imgs[i] = loadImage("imgs/" + str(i) + ".png");
  }

  // ending
  imgs[99] = loadImage("imgs/99.png");
  imgs[100] = loadImage("imgs/100.png");
}

function setup() {
  createCanvas(600, 600);
  button = createButton('Previous');
  button.mouseClicked(previousEvents);
  button.position(100, 530);
  button = createButton('Next');
  button.position(500, 530);
  button.mouseClicked(nextEvents);
}

function draw() {
  clear();
  background(0);

  //running
  sceneRun();

  var matched = matchs();
  if (matched != null) {
    sceneButton();
  }
  if (endCount != null) {
    endButton();
  }

  //content
  fill(255);
  textSize(15);
  if (transition != 0 && sceneContents[transition] != null && transition != 7) {
    text(sceneContents[transition]["content"], 100, 580);
  }

  // ending
  if (endContents[endCount] != null) {
    push();
    textSize(40);
    fill(255, 0, 0);
    strokeWeight(3);
    text(endContents[endCount]["content"], 130, 300);
    pop();
  }

  // show time
  push();
  textSize(30);
  if (totalMinute == 0) {
    text(str(totalHour + ":" + totalMinute + "0"), 50, 40);
  } else {
    var newMinute = totalMinute / 60;
    if (newMinute >= 1) {
      totalHour += ceil(newMinute);
      totalMinute = 0;
    }
    text(str(totalHour + ":" + totalMinute), 50, 40);
  }
  pop();

  // reminder in the 7
  if (transition == 7) {
    text("←←Previous   Next→→", 230 + random(0, 2), 580 + random(0, 2));
  }




  print("transition:" + transition + " " + "stop:" + stop + " " + "counter:" + counter + " " + "endCount:" + endCount);
  print("timeBranch: " + timeBranch);
}

function sceneRun() {
  var focus = 0;
  var matched = matchs();
  if (matched != null) {
    // here is total stop controll if meet the options.
    stop = true;
    focus = 3;
    counter = matched;
  } else {
    stop = false;
  }

  if (transition == 0) {
    //begin
    textSize(20);
    textLeading(30);
    text(sceneContents[0]["content"], 100, 300);

  } else {
    image(imgs[transition], positionX, positionY, 500 + random(focus), 500 + random(focus));
  }
}

function sceneButton() {
  noStroke();
  fill(255, 255, 255, 150);
  rect(150, 300, 80, 60);
  rect(260, 300, 80, 60);
  rect(360, 300, 80, 60);
  fill(0);
  text(sceneContents[counter]["option1"], 160, 325);
  text(sceneContents[counter]["option2"], 270, 335);
  text(sceneContents[counter]["option3"], 370, 325);
}

function endButton() {
  noStroke();
  fill(255, 0, 0, 150);
  rect(250, 360, 85, 60);
  fill(255);
  if (transition == 99) {
    text("Try Again", 255, 400);
  } else if (transition == 100) {
    text("Play Again", 255, 400);
  }

}




function previousEvents() {
  if (transition > 1 && transition < 13 && stop == false) {
    transition--;
  }
}

function nextEvents() {
  if (transition >= 0 && transition <= 12 && stop == false) {
    transition++;
  }
}

// to match option scenes
function matchs() {
  var matched = null;
  for (var i = 0; i <= scenceOptions.length; i++) {
    if (scenceOptions[i] == transition) {
      matched = transition;
      return matched;
    }
  }
  return matched;
  // var matched = matchAll(scenceOptions, str(transition));
  // if (matched.length > 0) {
  //   return transition;
  // } else {
  //   return null;
  // }
}

// After Bad Ending
function sceneBack() {

  switch (endCount) {
    case 0:
      transition = 1;
      stop = true;
      counter = 1;
      endCount = null;
      totalHour = 23;
      totalMinute = 0;
      break;
    case 1:
      transition = 3;
      stop = true;
      counter = 3;
      endCount = null;
      totalHour -= 2;
      break;
    case 2:
      transition = 4;
      stop = true;
      counter = 4;
      endCount = null;
      totalHour = 9;
      totalMinute = 30;
      break;
    case 3:
      transition = 0;
      stop = false;
      counter = 0;
      endCount = null;
      totalHour = 23;
      totalMinute = 0;
      break;
    case 4:
      totalHour -= 2;
      transition = 6;
      stop = true;
      counter = 6;
      endCount = null;
      break;
    case 5:
      transition = 8;
      stop = true;
      counter = 8;
      endCount = null;
      break;
    case 6:
      transition = 10;
      stop = true;
      counter = 10;
      endCount = null;
    default:
  }
}

// finished homework..
function scene1(button) {
  if (button == 1) {
    totalHour = 8;
    totalMinute = 0;
    timeBranch = 1;
  }
  if (button == 2) {
    totalHour = 9;
    totalMinute = 0;
    timeBranch = 2;
  }
  if (button == 3) {
    totalHour = 11;
    totalMinute = 0;
    transition = 99;
    endCount = 0; //end 1
    return;
  }
  // Next scene
  counter = 2;
  stop = false;
  nextEvents();
}
//wake up ...
function scene2(button) {
  if (button == 1) {
    counter = 4;
    stop = true;
    transition = 4;

  }
  if (button == 3) {
    totalMinute += 30;
    counter = 3;
    stop = false;
    if (timeBranch == 1) {
      timeBranch = 1.1;
    } else {
      timeBranch = 2.1;
    }
    nextEvents();

  }
}
// Branch2: 30 minutes later, get up ...
function scene3(button) {
  if (button == 1) {
    counter = 4;
    stop = true;
    transition = 4;
  }
  if (button == 3) {
    totalHour += 2;
    transition = 99;
    endCount = 1; //end 2

  }
}
// to eat breakfast...
function scene4(button) {
  if (button == 1) {
    counter = 5;
    totalMinute += 10;
    stop = false;
    nextEvents();

  }
  if (button == 3) {
    if (timeBranch == 2.1) {
      totalHour = 10;
      totalMinute = 0;
      transition = 99;
      endCount = 2; //end 3
      return;
    }
    counter = 5;
    totalMinute += 30;
    stop = false;
    nextEvents();
  }
}
//go to school
function scene5(button) {
  if (button == 1) {
    counter = 6;
    stop = false;
    nextEvents();
  }
  if (button == 3) {
    totalMinute += 19;
    transition = 100;
    endCount = 3; //end 4
  }
}

// in the traffic jam
function scene6(button) {
  if (button == 1) {
    // viod last scene options
    counter = 6.5;
    stop = false;
    nextEvents();
  }
  if (button == 3) {
    totalHour += 2;
    if (totalHour >= 10) {
      transition = 99;
      endCount = 4; //end 5
    }
  }
}

// speed up
function scene8(button) {
  if (button == 1) {
    counter = 10;
    stop = true;
    transition = 10;
    totalMinute += 15;
  }
  if (button == 3) {
    stop = false;
    counter = 8.5;
    nextEvents();
    setTimeout(function() {
      transition = 99;
      endCount = 5; //end 6
    }, 600);
  }
}

function scene10(button) {
  if (button == 1) {
    totalMinute += 5;
    if (totalHour >= 10 || (totalHour >= 9 && totalMinute >= 55)) {
      transition = 99;
      endCount = 6; //end 7
      return;
    }
    stop = false;
    counter = 10.5;
    transition = 11;
    setTimeout(function() {
      transition = 100;
      endCount = 3; //end 4
    }, 600);
  }
  if (button == 3) {
    transition = 100;
    endCount = 3; //end 4
  }
}


// Main Controll
function mouseClicked() {
  var button = 0;
  // option 1
  if ((mouseX > 150) && (mouseX < 150 + 80) && (mouseY > 300) && (mouseY < 300 + 60)) {
    button = 1;
  }
  // option 2
  else if ((mouseX > 260) && (mouseX < 260 + 80) && (mouseY > 300) && (mouseY < 300 + 60)) {
    button = 2;
  }
  // option 3
  else if ((mouseX > 360) && (mouseX < 360 + 80) && (mouseY > 300) && (mouseY < 300 + 60)) {
    button = 3;
  }
  // try again
  else if ((mouseX > 250) && (mouseX < 250 + 80) && (mouseY > 350) && (mouseY < 350 + 60)) {
    sceneBack();
  }

  if (button != 0 && endCount == null) {
    switch (counter) {
      case 1:
        scene1(button);
        break;
      case 2:
        scene2(button);
        break;
      case 3:
        scene3(button);
        break;
      case 4:
        scene4(button);
        break;
      case 5:
        scene5(button);
        break;
      case 6:
        scene6(button);
        break;
      case 7:
        // null
        break;
      case 8:
        scene8(button);
        break;
      case 9:
        // null
        break;
      case 10:
        scene10(button);
        break;
      default:
    }

  }
}
