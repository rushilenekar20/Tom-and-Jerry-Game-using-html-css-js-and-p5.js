
let jerry;
let uImg;
let tImg;
let bImg;
let PowerImg;
let LargeImg;
let InvisbleImg;
let toms = [];
let powers = [];
let JerryPower = 'Large';
let value =false;
let start = 'START';
let game =' ';
let score =0 ;
let counter = 0;
let mode = 0; 
let bottom =true;
let lock = false;
let count = 1;
let flag =1;
let speed_flag =1;
let normal_flag =1;
let prevScore;
let bimage =1;
let bimage_value = bImg;
let prob = 0.005;
let tom_speed = 24;



function preload() {

  uImg = loadImage('jerry.png');
  tImg = loadImage('tom.png');
  bImg = loadImage('background.jpg');
  bNImg = loadImage('night.jpg');
  PowerImg = loadImage('cheese.png');
  LargeImg = loadImage('LargeImg.png');

}

function mousePressed() {
  //toms.push(new Tom(75,20));
  //powers.push(new Power());
  if(mouseX >=80 && mouseX <=280 && mouseY <= 116 && mouseY >=38 ){
    value = true;
}
console.log(mouseX ," ", mouseY);

}

function setup() {
  createCanvas(1500, 700);
  jerry = new Jerry();

}




function keyPressed() {
  if (key == ' ' || key == 'ArrowUp' && bottom) {
    jerry.jump();
  }
  else if(key == 'ArrowDown') {
    jerry.down();
    bottom = false;
  }
  else if (key == ' ' || key == 'ArrowUp' && !bottom) {
    jerry.normal();
    bottom =true;
  }
}

function draw() {
  
  if (random(1) < prob && value ) {
    let tom_power =  Math.floor((Math.random() * 3) + 1);

    switch(tom_power){
      case 1:
        toms.push(new Tom(85,-8));
        break;
      case 2:
        toms.push(new Tom(100,70));
        break;
      case 3:
          toms.push(new Tom(180,-20));
          break;    
    }
  }
  
  background(bImg);
  fill(255,255,255);

    if(bimage == 0){
      background(bNImg);
      

    }
    else if(bimage == 1){
      background(bImg);
      

    } 
  
  if(score > 0 && score % 12 ==0 ){
    if(flag !=0){
    if(bimage == 0){
      bimage = 1;
    }
    else if(bimage == 1){
      bimage =0;
    }
    flag =0; 
  }
  }

  if(score > 0 && score % 4 ==0) {
    if(speed_flag != 0){
      tom_speed += 2;
    }
    speed_flag = 0;
  }




  textSize(50);
  


  text(start, 100, 100);
  line(80,120,280,120);
  line(80,40,280,40);
  line(80,120,80,40);
  line(280,120,280,40);
  
  text("SCORE :", 60, 210);
  text(score, 270, 210);
  line(50,140,340,140);
  line(50,240,340,240);
  line(50,140,50,240);
  line(340,140,340,240);

  if(game == 'GAME OVER'){
    text(game, 700, 232);
    noLoop();
  }

  if(score > 0 && score % 10 == 0){
      
    
      if(count != 0) {
        powers.push(new Power());
        count = 0;

        mode =2;
        counter =4;
        
      
     
  
  }
  }
  


  for (let t of toms) {
    t.move(tom_speed);
    t.show();
    if( counter == 0  && normal_flag ) {
      jerry.normal();
      counter = -1;
      normal_Flag = 0;
    }
    

    if (jerry.hits(t) && mode == 1) {
     t.disapear();
    }
    else if (jerry.hits(t) && mode == 0  ){
      console.log('game over');
     value = false;
      game ='GAME OVER';
      start ='END'
    }
  

    if(t.x >= 0 && t.x <=20 ) {
      score++;
      if(count == 0) count =1;
      if(flag == 0) flag =1;
      if(speed_flag == 0) speed_flag =1;
      if(normal_flag == 0) normal_flag =1;
      if(counter > 0){
        counter--; if(counter == 0) {
          mode = 0;
          // prevScore = score;

        }
      }
      
    }
    
   
    console.log(score);
  }

  for (let p of powers) {
    p.move();
    p.show();

    if(jerry.hits(p)){
      p.disapear();

      if(mode == 1) jerry.invisible();
      else if(mode == 2) jerry.large();
    }
  }
  jerry.show();
  jerry.move();
}

