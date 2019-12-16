/*
 Assignment: *Final Project: Interactive story of the Three Kingdoms *
 Student: *Chaojun Fan*
 Pasadena City College, Term (F), 2019
 Prof. Masood Kamandy
 Project Description: *
  Including technical Research, Content research, and statement.
  You can look thought the instructions before you start to read.
  Also, Including a txt file with instructions on how to use the file.
 *
 Last Modified: 12/08/19


 scroll: by 1847503 from Pixabay
 Jindestroywu.png: https://upload.wikimedia.org/wikipedia/commons/7/7a//Jindestroywu.png
 */



var imgs = [];

//Province
var province_imgs = [];
var provincePoints;
var province_name = "";
var province_show = false;

//battleScene
var battle_years = [190, 200, 201, 208, 209, 207, 219, 220, 227234, 263, 280];
var years_transition =0;
var battle_years_imgs = [];
var battle_sign_img;
var scroll_img;
var note_img;
var light;
var battle_man, battle_man1;
var battleScene;
var battle190, battle200, battle208, battle219, battle227_234, battle263, battle280;
var events, event207, event220, event223;
let timer_x = 0;
let timer_y = 0;
var timeout;
var reset = false;
var finished = false;
var step_finished = false;
var sixth_step_finished = false;
var seventh_step_finished = false;
var man = [];

// event
var event_show = false;

// LeftRightControl
var leftRightControl;

function preload() {
  for (var i = 0; i < 1; i++) {
    imgs[i] = loadImage("imgs/" + str(i) + ".png");
  }

  for (var i = 0; i <= 13; i++) {
    province_imgs[i] = loadImage("imgs/zhou/" + str(i) + ".png");
  }

  for (var i = 0; i < battle_years.length; i++) {
    battle_years_imgs[i] = loadImage("imgs/" + str(battle_years[i]) + ".png");
  }

  // others
  battle_sign_img = loadImage("imgs/battle_sign.png");
  battle_man = loadImage("imgs/man2.png");
  battle_man1 = loadImage("imgs/man.png");
  light = loadImage("imgs/light.png");
  scroll_img = loadImage("imgs/scroll.jpg");
  note_img = loadImage("imgs/note.png");
  img_280 = loadImage("https://upload.wikimedia.org/wikipedia/commons/7/7a/Jindestroywu.png");


}


function setup() {
  createCanvas(600, 600);
  frameRate(10);
  provincePoints = new ProvincePoints(province_points);
  leftRightControl = new LeftRightControl();
  battleScene = new BattleScene();
  battle190 = new Battle190();
  battle200 = new Battle200();
  battle208 = new Battle208();
  battle219 = new Battle219();
  battle227_234 = new Battle227_234();
  battle263 = new Battle263();
  battle280 = new Battle280();
  events = new Events();
  event207 = new Event207();
  event220 = new Event220();
  event223 = new Event223();

  // man
  for (var i = 0; i < 30; i++) {
    man[i] = new Man();
  }
}

function draw() {
  background(0);
  //map
  push();
  scale(0.45);
  image(imgs[0], -30, 60, 1534, 962);
  pop();
  if (province_show) {
    push();
    scale(0.45);
    //province
    image(province_imgs[0], 27, 340, 690, 585);
    image(province_imgs[1], 28, 340, 977, 589);
    image(province_imgs[2], 330, 380, 1003, 627);
    image(province_imgs[3], 905, 385, 428, 422);
    image(province_imgs[4], 820, 300, 254, 170);
    image(province_imgs[5], 965, 258, 354, 221);
    image(province_imgs[6], 855, 245, 236, 124);
    image(province_imgs[7], 840, 117, 493, 212);
    image(province_imgs[8], -30, 60);
    image(province_imgs[9], -30, 59);
    image(province_imgs[10], -30, 59);
    image(province_imgs[11], -30, 59);
    image(province_imgs[12], -30, 59);
    image(province_imgs[13], -30, 59);
    pop();

    push();
    fill(255);
    //province point
    for (var i = 0; i < province_points.length; i++) {
      rect(province_points[i]["x"], province_points[i]["y"], 12, 12);
    }
    pop();

    // show province name
    if (province_name != "") {
      textSize(20);
      fill(255);
      text(province_name, 410, 480);
    }
  }


  if (!province_show) {
    // show battle of the years
    battleScene.show(years_transition);
    // leftRightControl
    leftRightControl.show();
  }

  //show province button
  provincePoints.show();

  // Description1
  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  strokeJoin(BEVEL);
  rect(145, 465, 190, 120);
  pop();

  // Description2
  push();
  noFill();
  stroke(255);
  strokeWeight(2);
  strokeJoin(BEVEL);
  rect(365, 435, 220, 150);
  pop();


  // test
  // textSize(30);
  // fill(255);
  // text(str(mouseX + ":" + mouseY), 30, 230);
}

class ProvincePoints {
  constructor(position) {
    this.position = position;
  }

  show() {
    //Menu button
    fill(255);
    rect(19, 549, 110, 40);
    textSize(13);
    fill(0);
    text("Province Name", 24, 575);
  }

  pointClicks() {
    for (var i = 0; i < this.position.length; i++) {
      if ((mouseX > this.position[i]["x"]) && (mouseX < this.position[i]["x"] + 12) &&
        (mouseY > this.position[i]["y"]) && (mouseY < this.position[i]["y"] + 12)) {

        province_name = this.position[i]["name"];
      }
    }
  }

  menuClick() {
    if ((mouseX > 19) && (mouseX < 19 + 110) &&
      (mouseY > 549) && (mouseY < 549 + 40)) {
      if (province_show == false) {
        clearTimeout(timeout);
        province_show = true;
      } else {
        province_show = false;
      }
    }
  }
}

class LeftRightControl {
  constructor() {}

  show() {
    fill(255);
    rect(19, 500, 110, 40);
    // rect(80, 500, 50, 40);
    textSize(10);

    fill(0);
    if (finished == false) {
      text("————————", 30, 525);
      // text(" ---", 85, 525);
    } else {
      // text("<<<", 20, 525);
      text("Next battle/event", 30, 525);
    }
  }
  // left() {
  //   if ((mouseX > 19) && (mouseX < 19 + 50) &&
  //     (mouseY > 500) && (mouseY < 500 + 40) && finished == true) {
  //
  //     clearTimeout(timeout);
  //     reset = true;
  //     finished = false;
  //     years_transition >= 0 ? years_transition-- : years_transition = 0;
  //   }
  // }
  right() {
    if ((mouseX > 19) && (mouseX < 19 + 110) &&
      (mouseY > 500) && (mouseY < 500 + 40) && finished == true) {

      // clearTimeout(timeout);
      // reset = true;
      finished = false;
      years_transition >= 9 ? years_transition = 0 : years_transition++;
    }
  }
}

class BattleScene {
  constructor() {
    this.years = "";
    this.title = "";
  }

  show(years) {
    switch (years) {
      case 1:
        battle200.show();
        this.years = battle200.years;
        this.title = battle200.title;
        break;
      case 2:
        battle208.show();
        this.years = battle208.years;
        this.title = battle208.title;
        break;
      case 3:
        event207.show();
        this.years = event207.years;
        this.title = event207.title;
        break;
      case 4:
        battle219.show();
        this.years = battle219.years;
        this.title = battle219.title;
        break;
        break;
      case 5:
        event220.show();
        this.years = event220.years;
        this.title = event220.title;
        break;
      case 6:
        event223.show();
        this.years = event223.years;
        this.title = event223.title;
        break;
      case 7:
        battle227_234.show();
        this.years = "";
        this.title = "";
        break;
      case 8:
        battle263.show();
        this.years = battle263.years;
        this.title = battle263.title;
        break;
      case 9:
        battle280.show();
        this.years = battle280.years;
        this.title = battle280.title;
        break;
      default:
        battle190.show();
        this.years = battle190.years;
        this.title = battle190.title;
    }

    // Year
    fill(255);
    textSize(40);
    text(this.years, 30, 50);
    textSize(12);
    text("Years", 40, 70);

    // Title
    textSize(20);
    text(this.title, 150, 40);
  }

}

class Battle190 {
  constructor() {
    this.years = "190";
    this.title = "Campaign against Dong Zhuo";
  }

  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[0], -30, 56);
    pop();

    // way
    this.way();

    // place
    this.place();

    // content
    this.content();

    // name/color
    nameList(data_190);

  }

  way() {
    push();
    stroke(182, 227, 249, 200);
    strokeWeight(2);
    line(380, 160, 485, 156);
    line(380, 160, 455, 85);
    line(350, 180, 380, 160);
    line(400, 230, 380, 160);
    line(390, 290, 380, 160);
    line(380, 160, 540, 115);
    line(380, 160, 504, 55);

    // man 1-5
    let mag = man[0].move((450 - 380), (152 - 83));
    image(battle_man, 435 - mag[0], 55 + mag[1], 50, 50); //TaoQian

    let mag1 = man[1].move((485 - 380), 158);
    image(battle_man, 475 - mag1[0], 126, 50, 50); //YuanShao

    let mag2 = man[2].move((380 - 350), (180 - 160));
    image(battle_man1, 325 + mag2[0], 155 - mag2[1], 50, 50); //YuanShu

    let mag3 = man[3].move((380), (230 - 160));
    image(battle_man1, 375, 205 - mag3[1], 50, 50); //LiuBiao

    let mag4 = man[4].move((380), (290 - 160));
    image(battle_man1, 365, 260 - mag4[1], 50, 50); //SunJian

    let mag5 = man[5].move((515 - 380), (160 - 130));
    image(battle_man, 515 - mag5[0], 80 + mag5[1], 50, 50); //KongRong

    // when finished
    if (mag5[2] && mag5[3]) {
      image(light, 355, 122, 60, 60);
      finished = true;
    }

    pop();

  }

  content() {
    textSize(10);
    fill(255);
    textLeading(20);
    text("The Campaign against Dong Zhuo was\n a punitive expedition initiated by a\n coalition of regional officials and \n warlords against the warlord \n DongZhuo in 190 in the late \n Eastern Han dynasty.(Wiki)", 375, 465);
  }

  place() {
    image(battle_sign_img, 365, 142, 35, 35);
    textSize(14);
    fill(0);
    text("Hulao Pass", 380, 190);
  }
}

class Battle200 {
  constructor() {
    this.years = "200";
    this.title = "          Battle of Guandu";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[1], -30, 56);
    pop();

    // name/color
    nameList(data_200);

    //content
    this.content();

    // battle place
    this.place();

    //way
    this.way();
  }

  content() {
    textSize(10);
    fill(255);
    textLeading(20);
    text("Between the warlords Cao Cao \n and Yuan Shao in 200 AD in the\n late Eastern Han dynasty.\n Cao Cao's decisive victory against\n Yuan Shao's numerically superior forces\n marked the turning point in their war.\n (Wiki)", 375, 455);
  }

  place() {
    push();
    image(battle_sign_img, 380, 120, 35, 35);
    textSize(14);
    fill(0);
    text("Guandu", 380, 170);
    pop();
  }

  way() {
    push();
    stroke(182, 227, 249, 200);
    strokeWeight(2);

    // man 6-8
    let mag = man[6].move((485 - 353), (155));
    image(battle_man1, 328 + mag[0], 136, 50, 50); //CaoCao

    // first step
    if (mag[3]) {
      // occupied
      push();
      scale(0.45);
      image(battle_years_imgs[2], -30, 56);
      pop();
    }
    if (!mag[3]) {
      line(353, 161, 485, 155);
    }

    if (mag[3]) {
      // second step
      line(353, 161, 400, 140);
      line(400, 140, 435, 95);
      let mag1 = man[7].move((400 - 353), (161 - 140));
      image(battle_man1, 328 + mag1[0], 136 - mag1[1], 50, 50); //CaoCao
      let mag2 = man[8].move((435 - 400), (140 - 95));
      image(battle_man, 410 - mag2[0], 60 + mag2[1], 50, 50); //YuanShao

      if (mag2[2] && mag2[3]) {
        image(light, 370, 100, 60, 60);
        finished = true;
      }
    }

    pop();

  }
}

class Battle208 {
  constructor() {
    this.years = "208";
    this.title = "          Battle of Red Cliffs";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[3], -30, 56);
    pop();

    // name/color
    nameList(data_208);

    //content
    this.content();

    // battle place
    this.place();

    // way
    this.way();
  }

  content() {
    textSize(10);
    fill(255);
    textLeading(20);
    text("Liu Bei and Sun Quan successfully\n frustrated Cao Cao's effort to conquer\n the land south of the Yangtze River and\n reunite the territory of the\n Eastern Han dynasty. (Wiki)", 375, 475);
  }

  place() {
    push();
    image(battle_sign_img, 375, 225, 35, 35);
    textSize(14);
    fill(0);
    text("ChiBi", 375, 275);
    pop();
  }

  way() {
    push();
    stroke(182, 227, 249, 200);
    strokeWeight(2);

    // man 9-14
    // first step
    if (!step_finished) {
      let mag = man[9].move((390 - 350), (210 - 185));
      image(battle_man1, 325 + mag[0], 185 + mag[1], 50, 50); //CaoCao

      image(battle_man, 365, 215, 50, 50); //LiuBei

      let mag1 = man[10].move((490 - 390), (290 - 250));
      image(battle_man, 465 - mag1[0], 265 - mag1[1], 50, 50); //SunQuan

      if (mag1[2] && mag1[3]) {
        image(light, 360, 200, 60, 60);
        step_finished = true;
      } else {
        line(350, 210, 390, 240);
        line(390, 240, 490, 290);
      }
    } else {
      //second step
      //Liubei *4
      let mag2 = man[13].move((390 - 365), (325 - 240));

      if (!(mag2[2] && mag2[3])) {
        line(390, 240, 330, 265);
        line(390, 240, 400, 290);
        line(390, 240, 320, 325);
        line(390, 240, 405, 340);
      } else {
        // occupied
        push();
        scale(0.45);
        image(battle_years_imgs[4], -30, 56);
        pop();

        // reset
        finished = true;
        // step_finished = false;
      }
      image(battle_man1, 365 + mag2[0], 215 + mag2[1], 50, 50);

      let mag = man[11].move((390 - 330), (230 - 215));
      image(battle_man, 365 - mag[0], 215 + mag[1], 50, 50);

      let mag1 = man[12].move((400 - 340), (290 - 215));
      image(battle_man, 365 - mag1[0], 215 + mag1[1], 50, 50);

      let mag3 = man[14].move((365), (240 - 215));
      image(battle_man1, 365, 215 + mag3[1], 50, 50);


    }
    pop();
  }
}

class Event207 {
  constructor() {
    this.years = "207";
    this.title = "Event: Three Personal Calls\n at the Thatched Cottage";
  }

  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[5], -30, 56);
    pop();

    // name/color
    nameList(data_207);

    image(note_img, 348, 185, 30, 30);
    fill(0);
    text("Nanyang", 348, 230);

    // events
    events.button();

    // scroll_img
    if (event_show) {
      image(scroll_img, 50, 100, 500, 300);
      textSize(11);
      textLeading(20);
      fill(0);
      text("This allusion comes from History of the Three Kingdoms.", 145, 175);
      text("The Biography of Zhuge Liang： In the late Eastern Han Dynasty,\n Liu Bei took the trouble of going to the thatched cottage of\n Zhuge Liang who lived as a recluse at Longzhong, asking him to\n quit seclusion and aid him in running the kingdom.\n Liu was not able to see Zhuge until the third time.\n So the Sovereign Liu Bei then decided to request Zhuge Liang\n who was then secluding himself in his thatched cottage\n in Longzhong.", 130, 200);
    }
    finished = true;
  }

}

class Battle219 {
  constructor() {
    this.years = "219";
    this.title = "Battle of Fancheng\nEvent: GuanYu was killed\nby SunQuan";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[6], -30, 56);
    pop();

    // name/color
    nameList(data_219);

    // content
    this.content();

    //place
    this.place();

    // way
    this.way();
  }

  content() {
    textSize(10);
    fill(255);
    textLeading(15);
    text("The battle of Fan Cheng,also known as\nGuan Yu's Northern Expedition, was an\nimportant battle during the Three Kingdoms\nperiod of the late Han Dynasty. During this\ncampaign, Shu Han's general Guan Yu and\nhis son were captured by Dongwu, Shuhan\nlost three counties in Jingzhou, and his\nrelationship with Dongwu broke down,\nand the battle of Yiling took place. (Wiki)", 375, 455);
  }

  place() {
    push();
    image(battle_sign_img, 345, 190, 15, 15);
    image(battle_sign_img, 355, 220, 15, 15);
    image(battle_sign_img, 330, 255, 15, 15);
    image(battle_sign_img, 400, 150, 15, 15);
    image(battle_sign_img, 465, 275, 15, 15);
    textSize(12);
    fill(0);
    text("Fancheng", 365, 200);
    text("Maicheng", 380, 230);
    text("Jingzhou", 350, 265);
    text("Xuchang", 420, 160);
    text("Caishang", 485, 285);
    pop();
  }

  way() {
    push();
    stroke(182, 227, 249, 200);
    // strokeWeight(2);
    strokeWeight(0.5);

    // sixth_step_finished = false;

    if (sixth_step_finished) {
      push();
      scale(0.45);
      image(battle_years_imgs[7], -30, 56);
      pop();
      finished = true;
    }

    // man 14-18
    // first step
    if (!sixth_step_finished) {
      line(335, 260, 352, 195);
      let mag = man[28].move((355 - 345), (250 - 190));
      image(battle_man1, 315 + mag[0], 250 - mag[1], 30, 30); //GuanYu
      textSize(8);

      text("GuanYu", 315 + mag[0], 250 - mag[1]);

      image(battle_man, 330, 170, 30, 30); //Caoren
      text("Caoren", 330, 170);

      if (mag[2] && mag[3]) {
        // Description
        let texts = "CaoRen urgently begged for\n help, and Cao Cao sent\n Xu Huang, Zhang Liao, Pei Qian,\nand Lu Gong to rescue Cao Ren.";
        description([352, 195, 280, 280], texts);

        // second step
        line(352, 195, 410, 160);
        let mag1 = man[15].move((410 - 352), (195 - 160));
        image(battle_man, 395 - mag1[0], 135 + mag1[1], 30, 30); //Xu Huang, Zhang Liao, Pei Qian,\nand Lu Gong

        image(light, 325, 160, 40, 40);

        if (mag1[2] && mag1[3]) {
          // third step
          line(340, 260, 470, 280);
          let mag2 = man[16].move((470 - 340), (280 - 270));
          image(battle_man, 455 - mag2[0], 265 - mag2[1], 30, 30);
          text("Lvmeng", 455 - mag2[0], 265 - mag2[1]);
          let texts = "Cao Cao sent someone to contact\nSun Quan, hoping that Sun Quan\nwould attack Jingzhou from behind\nGuan Yu.Joint crusade against\nGuan Yu, Lu Meng commanded\naction of Jingzhou."
          description([470, 280, 280, 300], texts);

          if (mag2[2] && mag2[3]) {
            // fourth step
            line(350, 195, 365, 225);
            let mag3 = man[17].move((365 - 360), (225 - 200));
            image(battle_man1, 340 + mag3[0], 175 + mag3[1], 30, 30);
            text("GuanYu", 340 + mag3[0], 175 + mag3[1]);

            if (mag3[2] && mag3[1]) {
              // fifth step
              line(340, 260, 365, 220);
              let mag4 = man[18].move((365 - 340), (260 - 245));
              image(battle_man, 325 + mag4[0], 245 - mag4[1], 30, 30);
              text("Lvmeng", 325 + mag4[0], 245 - mag4[1]);

              if (mag4[2] && mag4[3]) {
                // sixth step
                image(light, 340, 205, 40, 40);
                let texts = "Guan Yu was just defeated by\nXu Huang and intended to retreat.\nHe learned that the south base of\nthe base camp had been lost. He\nhad to retreat to Maicheng. He was\ncaptured when he broke out and\nbeheaded by Sun Quan."
                description([365, 220, 310, 287], texts);
                timeout = setTimeout(function() {
                  sixth_step_finished = true;
                }, 2000);
              }
            }
          }
        }
      }
    }
    pop();
  }
}

class Event220 {
  constructor() {
    this.years = "220";
    this.title = "The Death of Cao Cao";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[7], -30, 56);
    pop();

    // name/color
    nameList(data_220);

    // icon
    image(note_img, 360, 145, 30, 30);
    fill(0);
    text("Luoyang", 395, 165);

    // events
    events.button();

    // scroll_img
    if (event_show) {
      image(scroll_img, 50, 100, 500, 300);
      textSize(11);
      textLeading(20);
      fill(0);
      text("The Death of Cao Cao", 145, 175);
      text("In 220, Cao Cao died in Luoyang at the age of 65, having failed to\nunify China under his rule.Cao Cao's eldest surviving son Cao Pi\nsucceeded him. Within a year, Cao Pi forced Emperor Xian to\nabdicate and proclaimed himself the first emperor of\nthe state of Cao Wei. Cao Cao was then posthumously titled\n'Grand Ancestor Emperor Wu of Wei'(Wiki)", 130, 200);
    }
    finished = true;
  }
}

class Event223 {
  constructor() {
    this.years = "223";
    this.title = "Getting the Young King\nEntrusted in Baidi";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[7], -30, 56);
    pop();

    // name/color
    nameList(data_223);

    // icon
    image(note_img, 195, 223, 30, 30);
    fill(0);
    text("Baidicheng", 195, 213);

    // events
    events.button();

    // scroll_img
    if (event_show) {
      image(scroll_img, 50, 100, 500, 300);
      textSize(11);
      textLeading(20);
      fill(0);
      text("Getting the Young King Entrusted in Baidi", 145, 185);
      text("Liu Bei died in Baidicheng in the summer of 223. On his deathbed,\nhe named Zhuge Liang and Li Yan as regents to support Liu Shan.\nLiu Bei was given the posthumous name Zhaolie. Liu Shan\nsucceeded him as the emperor of Shu Han, while Zhuge Liang\nlater made peace with Sun Quan and rebuilt the old Sun–Liu\nalliance against Cao Pi.(Wiki)", 130, 210);
    }
    finished = true;
  }
}

class Battle227_234 {
  constructor() {
    this.years = "227-234";
    this.title = "Zhuge Liang: Northern Expedition\nand Chu Shi Biao";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[7], -30, 56);
    image(battle_years_imgs[8], -30, 56);
    pop();

    // years
    push();
    fill(255);
    textSize(25);
    text(this.years, 30, 50);
    textSize(12);
    text("Years", 40, 70);

    // Title
    textSize(20);
    text(this.title, 150, 40);
    pop();

    // name/color
    nameList(data_227_234);

    fill(255);
    image(battle_sign_img, 205, 130, 15, 15); //Jieting
    text("①", 205, 130);
    image(battle_sign_img, 222, 161, 15, 15); //Chengcang
    text("②", 222, 161);
    image(battle_sign_img, 190, 180, 15, 15); //Wudu
    text("③", 190, 180);
    image(battle_sign_img, 260, 170, 15, 15); //Mount Qi
    text("④", 260, 170);
    image(battle_sign_img, 291, 157, 15, 15); //WuZhangYuan
    text("⑤", 291, 157);

    push();
    // stroke(250, 125, 60);
    fill(255);
    // line(xy[0], xy[1], xy[2], xy[3]);
    rect(130, 280, 240, 120);
    fill(250, 125, 60);
    textSize(10);
    textLeading(16);
    text("1.Battle of Jieting 23 Feb – 21 May 228\n2.Siege of Chencang 13 Jan – 10 Feb 229\n3.Battle of Jianwei 11 Feb – 10 May 229\n4.Battle of Mount Qi 21 Mar – 15 Aug 231\n5.Battle of Wuzhang Plains 18 Mar – 10 Oct 234\nZhuge Liang dies in camp sometime between\n11 Sep and 10 Oct.", 140, 292);
    pop();

    // events
    events.button();

    // scroll_img
    if (event_show) {
      image(scroll_img, 50, 100, 500, 300);
      textSize(11);
      textLeading(20);
      fill(0);
      text("Chu Shi Biao", 145, 185);
      text(" He presented them to Liu Shan, the second emperor of Shu.\nThe first Chu Shi Biao, which is referred to as the Former\nChu Shi Biao, was presented in 227 before Zhuge Liang embarked\non the first of a series of military campaigns (commonly known as\nthe Northern Expeditions) against Shu's rival state, Wei. The second,\nknown as the Later Chu Shi Biao, was supposedly submitted in 228\nbefore Zhuge Liang left for the second Northern Expedition.(Wiki)", 130, 210);
    }
    finished = true;
  }

}

class Battle263 {
  constructor() {
    this.years = "263";
    this.title = "Conquest of Shu by Wei";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[7], -30, 56);
    image(battle_years_imgs[8], -31, 50);
    pop();

    // name/color
    nameList(data_263);
    // content
    this.content();

    //place
    this.place();

    // way
    this.way();
  }
  content() {
    textSize(10);
    fill(255);
    textLeading(15);
    text("A military campaign launched by the state\nof Cao Wei against its rival Shu Han in late\n263 during the Three Kingdoms period of\nChina. The campaign culminated in the fall\nof Shu and the tripartite equilibrium\nmaintained in China for over 40 years since\nthe end of the Eastern Han dynasty in 220.\nThe conquest signified the beginning of\na reunified China under the Jin dynasty.(Wiki)", 375, 455);
  }

  place() {
    push();
    image(battle_sign_img, 370, 155, 15, 15);
    image(battle_sign_img, 200, 250, 15, 15);
    textSize(14);
    fill(0);
    text("Luoyang", 390, 165);
    text("Chengdu", 220, 265);
    pop();
  }
  way() {
    push();
    stroke(182, 227, 249, 200);
    // strokeWeight(2);
    strokeWeight(0.5);

    // first step
    // man 19-21
    if (seventh_step_finished) {
      push();
      scale(0.45);
      image(battle_years_imgs[9], -30, 56);
      finished = true;
      pop();
    }

    if (!seventh_step_finished) {
      line(380, 165, 315, 200);
      let mag = man[19].move((360 - 315), (260 - 220));
      image(battle_man, 360 - mag[0], 140 + mag[1], 30, 30); //DengAi
      text("DengAi", 360 - mag[0], 140 + mag[1]);

      image(battle_man1, 290, 180, 30, 30); //JiangWei
      text("JiangWei", 290, 180);

      if (mag[2] && mag[3]) {
        image(light, 290, 180, 40, 40);
      }


      line(380, 165, 210, 260);
      let mag1 = man[20].move((360 - 210), (260 - 165));
      image(battle_man, 360 - mag1[0], 140 + mag1[1], 30, 30); //DengAi
      text("ZhongHui", 360 - mag1[0], 140 + mag1[1]);

      let mag2 = man[21].move((360 - 210), (260 - 165));
      image(battle_man, 350 - mag2[0], 130 + mag2[1], 30, 30); //ZhugeXu
      text("ZhugeXu", 350 - mag2[0], 130 + mag2[1]);

      if (mag2[2] && mag2[3]) {
        let texts = "DengAi led the elite to sneak into\nYinping and capture Yuncheng,\nforcing Chengdu. After LiuChan of\nShuhansurrendered, Jiang Wei\nsurrendered to Zhonghui after\nhearing the news, Shuhan perished.";
        description([210, 260, 210, 280], texts);
        timeout = setTimeout(function() {
          seventh_step_finished = true;
        }, 2000);
      }
    }
    pop();
  }
}

class Battle280 {
  constructor() {
    this.years = "280";
    this.title = "Conquest of Wu by Jin";
  }
  show() {
    // map
    push();
    scale(0.45);
    image(battle_years_imgs[7], -30, 56);
    image(battle_years_imgs[9], -30, 56);
    pop();

    // name/color
    nameList(data_280);
    // content
    this.content();

    events.button();

    push();
    scale(0.45);
    image(battle_years_imgs[10], -29, 55, 1534, 962);
    pop();

    textSize(30);
    fill(182, 90, 98);
    text("Sun Wu perishes,\nWest Jin unifies China", 170, 250);

    // scroll_img
    if (event_show) {
      image(scroll_img, 50, 100, 500, 300);
      image(img_280, 112, 161, 370, 180);
    }

    finished = true;
  }
  content() {
    textSize(10);
    fill(255);
    textLeading(15);
    text("The conquest of Wu by Jin was a military\ncampaign launched by the Jin dynasty\nagainst the state of Eastern Wu in 280 at\nthe end of the Three Kingdoms period of\nChina. The campaign concluded with the\nfall of Wu and the reunification of China\nunder the Jin dynasty.(Wiki)", 375, 455);
  }
}



class Events {
  constructor() {

  }
  button() {
    fill(255);
    rect(19, 450, 110, 40);
    textSize(15);
    fill(0);
    text("Event", 55, 475);
  }
  eventClick() {
    if ((mouseX > 19) && (mouseX < 19 + 110) &&
      (mouseY > 450) && (mouseY < 450 + 40)) {
      if (event_show == false) {
        event_show = true;
      } else {
        event_show = false;
      }
    }
  }
}


class Man {
  constructor() {
    this.timer_x = 0;
    this.timer_y = 0;
    this.stop_x = false;
    this.stop_y = false;
  }

  move(mag_x, mag_y) {

    if ((this.timer_x <= mag_x)) {
      this.timer_x += 5;
    } else {
      this.timer_x += 0;
      this.stop_x = true;
    }

    if ((this.timer_y <= mag_y)) {
      this.timer_y += 5;
    } else {
      this.timer_y += 0;
      this.stop_y = true;
    }
    return [this.timer_x, this.timer_y, this.stop_x, this.stop_y];
  }
}

// Main Controll
function mouseClicked() {
  // leftRightControl.left();
  if (!province_show) {
    leftRightControl.right();
  }
  provincePoints.pointClicks();
  provincePoints.menuClick();

  events.eventClick();
}

function nameList(data) {
  for (var i = 0; i < data.length; i++) {
    if (i >= 5) {
      fill(int(data[i]["color"]));
      rect(240, 480 + (i - 5) * 20, 10, 10);
      textSize(12);
      text(str(data[i]["name"]), 255, 490 + (i - 5) * 20);
    } else {
      fill(int(data[i]["color"]));
      rect(150, 480 + i * 20, 10, 10);
      textSize(12);
      text(str(data[i]["name"]), 165, 490 + i * 20);
    }
  }
}

function description(xy, texts) {
  push();
  stroke(250, 125, 60);
  line(xy[0], xy[1], xy[2], xy[3]);
  rect(130, 280, 200, 100);
  fill(250, 125, 60);
  textSize(11);
  text(texts, 140, 292);
  pop();
}
