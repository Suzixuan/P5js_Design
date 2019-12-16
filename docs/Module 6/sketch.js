  /*
  Assignment: 6.7 Team Project: High Score
  Student: Brittany Ingenthron, Chaojun Fan, Michael Petaway
  Pasadena City College, Fall 2019
  Prof. Masood Kamandy
  Project Description: We created Pong from scratch. Our vision is to keep the style minimal while adding a layer of complexity through obstacles and a second ball.

  Jun: Added difficulty, menu control, and obstacles. Jun also fixed an issue with medal counting and game over, as well as made a count for said object.

  Michael: Put together the base code for the game and bug fixed. Declared the original variables for the project that are not labeled. Wrote code to allow the paddles to start in centered possession and the ball to start and reset in the center of the paddles after a key is pressed. 
  Michael fixed the bug in obstacle. Michael fixed automatic start at the beginning of the game by adding if((key=='w') || (key=='W') || (key=='s') || (key=='S')) function.

  Brittany: Added a working key function for the paddles and did general bug fixes/tweaks to code such as color/position/strokes. Added second ball.

  Last Modified: November 17, 2019
  */

  var w; //pong
  var wb; // Brittany: Variable for second ball
  var s; //score
  var d;
  var f;
  var p; //paddle
  var o; //obstacle

  var logo;
  var started = false;
  var difficulty = 0;
  var roundover = false;
  var gameover = false;
  var played = false;

  function preload() {
    //    logo = loadImage('1/png');
  }

  function setup() {
    createCanvas(600, 600);
    w = new Pong();
    wb = new Pong();
    p = new Paddle();
    s = new Score();
    o = new Obstacle();
  }


  function draw() {
    background(0);

    //Jun：difficulty
    if (difficulty != 0 && roundover == false && gameover == false) {

      played = false;

      //ball
      w.move(difficulty);
      w.bounce();
      w.display();

      // Brittany: Second ball added
      wb.move(difficulty);
      wb.bounce();
      wb.display();

      //paddle
      p.pad();
      p.movepad();
      p.pad2();
      p.movepad2();

      //after paddle object
      w.hitpaddle(p);
      //Brittany: Added second ball hit paddle variable
      wb.hitpaddle(p);

      //score
      s.score();
      s.player1score(w);
      s.player2score(w);

      // Brittany: Second ball variables
      s.player1score(wb);
      s.player2score(wb);

      //obstacle
      o.display();
      o.bounce(w);

      // Brittany: Second ball variables
      o.bounce(wb);


    } else if (roundover) {
      textSize(50);
      fill(244, 210, 111);
      var content = "Round " + s.roundScreen() + " is over";
      text(content, 120, 220);
      setTimeout(function() {
        roundover = false;
      }, 1000);
    } else if (gameover) {
      textSize(50);
      fill(255, 0, 0);
      text("Game over!", 130, 220);
      setTimeout(function() {
        gameover = false;
        roundover = false;
        started = false;
        difficulty = 0;
        played = false;
      }, 1000);
    } else {
      textSize(20);
      fill(255, 255, 255, 150);
      if (started) {
        push();
        text("Easy", 260, 220);
        text("Normal", 245, 270);
        text("Hard", 260, 320);
        rect(240, 195, 80, 40);
        rect(240, 245, 80, 40);
        rect(240, 295, 80, 40);
        pop();
      } else {
        //start
        push();
        text("Start", 260, 400);
        rect(240, 373, 80, 40);
        pop();
      }

    }
  }

  class Score {
    constructor() {
      this.player1 = 0;
      this.player2 = 0;
      this.player1Medal = 0;
      this.player2Medal = 0;
      this.round = 0;
    }
    score() {
      text('SCORE', 270, 30); // Brittany: Fixed score position
      textSize(20);

      // Brittany: Added color to score numbers
      stroke(0, 0, 255);
      fill(0, 0, 255);
      text(this.player1, 250, 40);
      stroke(255, 0, 0);
      fill(255, 0, 0);
      text(this.player2, 352, 40);

      if (this.player1Medal > 0) {
        for (var i = 1; i <= this.player1Medal; i++) {
          noStroke(); // Brittany: Fixed color and stroke for both player1 and player 2 medals
          fill(244, 210, 111);
          ellipse(230 - i * 10, 30, 5, 5);
        }
      }

      if (this.player2Medal > 0) {
        for (var i = 1; i <= this.player2Medal; i++) {
          noStroke();
          fill(244, 210, 111);
          ellipse(382 + i * 10, 30, 5, 5);
        }
      }
    }

    player1score(ball) {
      if (ball.x > width + ball.diameter) {
        //      if (keyIsPressed) {
        ball.x = -ball.diameter + 20;
        if (this.medalCounter(this.player1Medal)) {
          gameover = true;
          return;
        }
        if (this.roundCounter(this.player1)) {
          this.player1Medal += 1;
          this.player1 = 0;
          this.player2 = 0;
          this.roundScreen();
          return;
        }
        this.player1 += 1;
        //      }
      }
    }

    player2score(ball) {
      if (ball.x < 0 + ball.diameter) {
        //      if (keyIsPressed) {
        ball.x = width - 60;
        if (this.medalCounter(this.player2Medal)) {
          gameover = true;
          return;
        }
        if (this.roundCounter(this.player2)) {
          this.player2Medal += 1;
          this.player1 = 0;
          this.player2 = 0;
          this.roundScreen();
          return;
        }
        this.player2 += 1;
        //      }
      }
    }

    roundCounter(player) {
      if (player >= 9) {
        this.round += 1;
        return true;
      }
    }

    medalCounter(medals) {
      if (medals >= 3) {
        this.player1Medal = 0;
        this.player2Medal = 0;
        this.round = 0;
        this.player1 = 0;
        this.player2 = 0;
        return true;
      }
    }

    roundScreen() {
      roundover = true;
      return this.round;
    }

    gameoverScreen() {
      gameover = true;
      return;
    }
  }

  class Paddle {
    constructor() {
      this.x1 = 20;
      this.y1 = 0;
      this.pw1 = 20;
      this.ph1 = 100;
      this.x2 = 560;
      this.y2 = 0;
      this.pw2 = 20;
      this.ph2 = 100;
    }

    // Brittany: Flipped the paddles to make sense with their controls
    pad() {
      noStroke(); // Brittany: Added no stroke to paddle
      fill(255);
      this.y1 = constrain(this.y1, 0, 500);
      rect(this.x1, this.y1, this.pw1, this.ph1);
    }

    movepad() {
      // Brittany: Fixed bug where both players sometimes can't move paddles at same time
      // Brittany: 87 is the keycode for 'w'
      if (keyIsDown(87)) {
        this.y1 -= 10;
      }

      // Brittany: 83 is the keycode for 's'
      else if (keyIsDown(83)) {
        this.y1 += 10;
      }
    }

    pad2() {
      noStroke(); // Brittany: Added no stroke to paddle
      fill(255);

      this.y2 = constrain(this.y2, 0, 500);

      rect(this.x2, this.y2, this.pw2, this.ph2);
    }

    movepad2() {
      if (keyIsDown(UP_ARROW)) {
        this.y2 -= 10;
      } else if (keyIsDown(DOWN_ARROW)) {
        this.y2 += 10;
      }
    }
  }

  class Pong {
    constructor() {

      this.x = 60;
      this.y = random(height);
      this.diameter = 10;
      this.radius = this.diameter / 2; // Brittany: Added to fix the ball bug
      this.xspeed = 2;
      this.yspeed = 4.2;
      this.xdirection = 1;
      this.ydirection = 1;

    }

    move(difficlty) {
      // if (key) {
      if (difficulty == 1) {
        this.xspeed = 2;
        this.yspeed = 4.2;
      } else if (difficulty == 2) {
        this.xspeed = 4;
        this.yspeed = 6.2;
      } else if (difficulty == 3) {
        this.xspeed = 6;
        this.yspeed = 8.2;
      }
      this.x += this.xspeed * this.xdirection;
      this.y += this.yspeed * this.ydirection;
      // }

    }

    // Brittany: Rewrote function to fix bug where half the ball goes inside wall
    bounce() {
      if ((this.y - this.radius) + (this.yspeed * this.ydirection) < 0 ||
        (this.y + this.radius) + (this.yspeed * this.ydirection) > height) {
        this.ydirection = -this.ydirection;
      }
    }

    hitpaddle(paddle) {
      // right
      if ((this.x > paddle.x2) && (this.x < paddle.x2 + paddle.pw2) &&
        (this.y > paddle.y2) && (this.y < paddle.y2 + paddle.ph2)) {
        fill(255, 0, 0);
        this.xdirection = -this.xdirection;
        rect(paddle.x2, paddle.y2, paddle.pw2, paddle.ph2);

      }
      // left
      if ((this.x > paddle.x1) && (this.x < paddle.x1 + paddle.pw1) &&
        (this.y > paddle.y1) && (this.y < paddle.y1 + paddle.ph1)) {
        fill(0, 0, 255);
        this.xdirection = -this.xdirection;
        rect(paddle.x1, paddle.y1, paddle.pw1, paddle.ph1);
      }
    }

    display() {
      rectMode(CORNER);
      ellipseMode(RADIUS);
      // noCursor();

      // Brittany: Added a white color to the ball and removed stroke
      noStroke()
      fill(255);
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }

  }


  //Jun
  class Obstacle {
    constructor() {
      this.x = [123, 155, 332, 421];
      this.y = [133, 223, 450, 311];
    }

    display() {
      fill(255);
      noStroke();
      for (var i = 0; i <= 3; i++) {
        rect(this.x[i], this.y[i], 20, 20);
      }

    }

    bounce(ball) { //Michael fixed bug added ball.ydirection
      // BUG HERE
      for (var i = 0; i <= 3; i++) {
        if ((ball.x > this.x[i]) && (ball.x < this.x[i] + 20) &&
          (ball.y > this.y[i]) && (ball.y < this.y[i] + 20)) {
          fill(0, 0, 255);
          ball.xdirection = -ball.xdirection;
          ball.ydirection = -ball.ydirection;
          return;
        }
      }
    }
  }

  //Jun:Menu Control
  function mouseClicked() {
    if (!played) {
      if ((mouseX > 240) && (mouseX < 240 + 80) && (mouseY > 373) && (mouseY < 373 + 40)) {
        started = true;
      }

      //easy
      if ((mouseX > 240) && (mouseX < 240 + 80) && (mouseY > 195) && (mouseY < 195 + 40)) {
        difficulty = 1;
      }
      //normal
      if ((mouseX > 240) && (mouseX < 240 + 80) && (mouseY > 245) && (mouseY < 245 + 40)) {
        difficulty = 2;
      }
      //hard
      if ((mouseX > 240) && (mouseX < 240 + 80) && (mouseY > 295) && (mouseY < 295 + 40)) {
        difficulty = 3;
      }
    }
  }
