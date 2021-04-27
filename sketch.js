var name;
let nameinput; 
var gamestate = 0;
var continueb , continueimg;
var giraffe , giraffei;
var kitty , kittyi;
var room , roomi;
var owl , owli;
var panda , pandai;
var deer , deeri;
var tiger , tigeri;
var uni , unii;
var wolf , wolfi;
var animal;
var bb , bbi , bb2i , bb3i;
var a , b , c , d , e;
let a1 , b1 , c1 , d1 , e1;
var done , donei;
var done2 , done3 , done4 , done5;
var coins , coinsi;
var cn = 20;
var spb , spbi ; 
var sb , sbi ; 
var bgc = 0;

function preload(){
continueimg = loadImage("game images/continue button.png");
giraffei = loadImage("game images/giraffe.png");
kittyi = loadImage("game images/kitty.png");
owli = loadImage("game images/owl.png");
pandai = loadImage("game images/panda.png");
deeri = loadImage("game images/reindeer.png");
tigeri = loadImage("game images/tiger.png");
unii = loadImage("game images/unicorn.png");
wolfi = loadImage("game images/wolf.jpg");
roomi = loadImage("game images/livingroom.png");
bbi = loadImage("game images/bb.png");
donei = loadImage("game images/done.png");
coinsi = loadImage("game images/coins.png");
bb2i = loadImage("game images/bb2.png");
bb3i  = loadImage("game images/bb3.png");
spbi = loadImage("game images/spb.png");
sbi = loadImage("game images/sb.png");
}

function setup() {
  createCanvas(displayWidth - 2 , displayHeight - 160);

  nameinput = createInput('');
  nameinput.position(displayWidth/2  , (displayHeight - 160)/2);
  nameinput.size(70);

  continueb = createSprite(displayWidth/2 + 30  , (displayHeight - 160)/2 + 65);
  continueb.addImage(continueimg);

  room = createSprite((displayWidth - 2)/2 , (displayHeight - 160)/2)
  room.addImage(roomi);
  room.visible = false;
  room.scale = 2;

  animal = createSprite(displayWidth/2 , displayHeight/2);
  animal.visible = false;

  giraffe = createSprite(displayWidth/2 - 400 , 100);
  giraffe.addImage(giraffei);
  giraffe.scale = 0.6;

  kitty = createSprite(displayWidth/2 - 150 , 100);
  kitty.addImage(kittyi);
  kitty.scale = 0.2;

  owl = createSprite(displayWidth/2 + 150 , 100);
  owl.addImage(owli);
  owl.scale = 0.7;

  panda = createSprite(displayWidth/2 + 400 , 100);
  panda.addImage(pandai);
  panda.scale = 0.7;

  deer = createSprite(displayWidth/2 - 400 , 500);
  deer.addImage(deeri);
  deer.scale = 0.7;

  tiger = createSprite(displayWidth/2 - 150 , 500);
  tiger.addImage(tigeri);
  tiger.scale = 0.7;

  uni = createSprite(displayWidth/2 + 150 , 500);
  uni.addImage(unii);
  uni.scale = 0.7;

  wolf = createSprite(displayWidth/2 + 400 , 500);
  wolf.addImage(wolfi);
  wolf.scale = 0.7;

  bb = createSprite(200,100);
  bb.addImage(bbi);
  bb.scale = 0.3;
  bb.visible = false;

  done1 = createSprite(800 , 100);
  done1.addImage(donei);
  done1.scale = 0.3 ;
  done1.visible = false; 

  done2 = createSprite(800 , 200);
  done2.addImage(donei);
  done2.scale = 0.3 ; 
  done2.visible = false;

  done3 = createSprite(800 , 300);
  done3.addImage(donei);
  done3.scale = 0.3 ; 
  done3.visible = false;

  done4 = createSprite(800 , 400);
  done4.addImage(donei);
  done4.scale = 0.3 ; 
  done4.visible = false;

  done5 = createSprite(800 , 500);
  done5.addImage(donei);
  done5.scale = 0.3 ;
  done5.visible = false;
  
  coins = createSprite(displayWidth - 200 , 30);
  coins.addImage(coinsi);
  coins.scale = 0.2;
  coins.visible = false; 

  spb = createSprite(displayWidth - 150 , 100);
  spb.addImage(spbi);
  spb.visible = false;

  sb = createSprite(displayWidth - 150 , 170);
  sb.addImage(sbi);
  sb.visible = false;

}

function draw() {
  background('pink');
  drawSprites();
  if (gamestate === 0){
    animal.visible = false;
    giraffe.visible = false;
    kitty.visible = false;
    owl.visible = false;
    panda.visible = false;
    deer.visible = false;
    tiger.visible = false;
    uni.visible = false;
    wolf.visible = false;
    textSize(20);
    text("Enter Your Name" , displayWidth/2 - 35 , (displayHeight - 160)/2 - 30);
    name = nameinput.value();
    if (mousePressedOver(continueb)){
      continueb.visible = false;
      giraffe.visible = true;
      kitty.visible = true;
      owl.visible = true;
      panda.visible = true;
      deer.visible = true;
      tiger.visible = true;
      uni.visible = true;
      wolf.visible = true;

      nameinput.remove();

      gamestate = 1;
    }
  }
  else if (gamestate === 1){
    animal.visible = false;
    textSize(25);
    text("CHOOSE YOUR ANIMAL GUIDE", displayWidth/2 - 150 ,300 ); 
    if(mousePressedOver(giraffe)){
      animal.addImage(giraffei);
      animal.scale = 1.2;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(kitty)){
      animal.addImage(kittyi);
      animal.scale = 0.4;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    } 
    else if(mousePressedOver(owl)){
      animal.addImage(owli);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(panda)){
      animal.addImage(pandai);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(deer)){
      animal.addImage(deeri);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(tiger)){
      animal.addImage(tigeri);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(uni)){
      animal.addImage(unii);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    else if(mousePressedOver(wolf)){
      animal.addImage(wolfi);
      animal.scale = 1.5;
      kitty.visible = false;
      owl.visible = false;
      panda.visible = false;
      deer.visible = false;
      tiger.visible = false;
      uni.visible = false;
      wolf.visible = false;
      giraffe.visible = false;
      animal.visible = true;
      gamestate = 2;
    }
    
  
    
  }
  else if(gamestate === 2 ){
    bb.visible = true;
    bb.scale = 0.3;
    if(mousePressedOver(bb)){
      giraffe.visible = true;
      kitty.visible = true;
      owl.visible = true;
      panda.visible = true;
      deer.visible = true;
      tiger.visible = true;
      uni.visible = true;
      wolf.visible = true;
      bb.visible = false;
      animal.visible = false;
      continueb.visible = false;
      gamestate = 1;
    }

    continueb.visible = true;
    continueb.y = displayHeight - 185;
    continueb.x = displayWidth/2 - 50
    textSize(30);
    text(" HI " + name + " YOU HAVE BEEN GIVEN 20 COINS \n TO START PLAYING THE GAME \n FURTHERMORE YOU WILL HAVE TO EARN YOUR \n COINS BY COMPLETING YOUR TO DO LISTS OR TASKS \n ON THE NEXT SCREEN YOU WILL HAVE\n TO ENTER YOUR DAILY ACTIVITIES" , displayWidth/2 - 250, 30 );
    coins.visible = true;
    text(cn , displayWidth - 100 , 30);

    if(mousePressedOver(continueb)){
      text(cn , displayWidth - 115 , 30);
      room.visible = true;
      bb.visible = false;
      a1 = createInput('');
      a1.position( 500 , 100);
      a1.size(70);
      b1 = createInput('');
      b1.position( 500 , 200);
      b1.size(70);
      c1 = createInput('');
      c1.position( 500 , 300);
      c1.size(70);
      d1 = createInput('');
      d1.position( 500 , 400);
      d1.size(70);
      e1 = createInput('');
      e1.position( 500 , 500);
      e1.size(70);

      gamestate = 3;
    }
  
  }
    else if(gamestate === 3){
      done1.visible = false;
      done2.visible = false;
      done3.visible = false;
      done4.visible = false;
      done5.visible = false;
      sb.visible = false;
      spb.visible = false;
      continueb.visible = true;
      continueb.x = 800;
      continueb.y = 100;
      continueb.depth = 3;
      a = a1.value();
      b = b1.value();
      c = c1.value();
      d = d1.value();
      e = e1.value();
      textSize(30);
      text(cn , displayWidth - 115 , 30);

      animal.x = 800;
      bb.scale = 4;
      if(mousePressedOver(continueb)){
        done1.visible = true;
        done2.visible = true;
        done3.visible = true;
        done4.visible = true;
        done5.visible = true;
        animal.x = 200;
        continueb.visible = false;
        gamestate = 4 ;
      }}

      else if (gamestate === 4 ){
      textSize(30);
      text(cn , displayWidth - 125 , 34);
      if(mousePressedOver(done1) && done1.visible === true){
        a1.remove();
        cn = cn + 10;
        done1.visible = false;
      }
      if(mousePressedOver(done2) && done2.visible === true){
        b1.remove();
        cn = cn + 10;
        done2.visible = false;
      }
      if(mousePressedOver(done3) && done3.visible === true){
        c1.remove();
        cn = cn + 10;
        done3.visible = false;
      }
      if(mousePressedOver(done4) && done4.visible === true){
        d1.remove();
        cn = cn + 10;
        done4.visible = false;
      }
      if(mousePressedOver(done5) && done5.visible === true){
        e1.remove();
        cn = cn + 10;
        done5.visible = false;
      }
      if(cn >= 30){
        sb.visible = true;
        spb.visible = true;
      }
      if(mousePressedOver(sb)){
        room.visible = true;
        a1 = createInput('');
        a1.position( 500 , 100);
        a1.size(70);
        b1 = createInput('');
        b1.position( 500 , 200);
        b1.size(70);
        c1 = createInput('');
        c1.position( 500 , 300);
        c1.size(70);
        d1 = createInput('');
        d1.position( 500 , 400);
        d1.size(70);
        e1 = createInput('');
        e1.position( 500 , 500);
        e1.size(70);

      gamestate = 3;
      }
      if(mousePressedOver(spb)){
        room.visible = true;
        a1 = createInput('');
        a1.position( 500 , 100);
        a1.size(70);
        b1 = createInput('');
        b1.position( 500 , 200);
        b1.size(70);
        c1 = createInput('');
        c1.position( 500 , 300);
        c1.size(70);
        d1 = createInput('');
        d1.position( 500 , 400);
        d1.size(70);
        e1 = createInput('');
        e1.position( 500 , 500);
        e1.size(70);
        gamestate = 3;
        cn = cn - 10;
        changebg();
      }
    }}
    function changebg(){
      bgc = bgc + 1;
      switch(bgc){
        case 1 : room.addImage(bb2i);
        gamestate = 3;
        break;
        case 2 : room.addImage(bb3i);
        room.scale = 3;
        gamestate = 3;
        break;
        case 3 : room.addImage(roomi);
        room.scale = 2;
        bgc = 0;
        gamestate = 3;
        break;
        default : break;
      }
    }