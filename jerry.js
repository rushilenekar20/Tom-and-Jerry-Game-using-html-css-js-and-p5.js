class Jerry {
  
    constructor() {
      this.r = 120;
      this.x = 50;
      this.y = height - this.r;
      this.vy = 0;
      this.gravity = 3;
      this.mode = 0;
    }
  
    jump() {
      if (this.y == height - this.r) {
        this.vy = -35;
      }

    }
    
    down(){
      if (this.y == height - this.r) {
        this.r = 70;
      }
      //this.r =80;
    }


    hits(tom) {
      let x1 = this.x + this.r * 0.5;
      let y1 = this.y + this.r * 0.5;
      let x2 = tom.x + tom.r * 0.5;
      let y2 = tom.y + tom.r * 0.5;
      return collideCircleCircle(x1, y1, this.r, x2, y2, tom.r);
    }
  
    move() {
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r);
    }

    normal(){
      this.r = 120;
      this.x = 50;
      this.y = height - this.r;
      this.mode =0;

    }

    
    large(){
      this.mode = 1; 
      this.r = 150;
      this.x = 80;
      this.y = height - this.r;
    }

    invisible(){
      this.mode = 2; 
    }

  
    show() {
      if(this.mode == 1){
        
      image(LargeImg, this.x, this.y, this.r, this.r);

      }
      else if(this.mode == 2){
        
      image(InvisbleImg, this.x, this.y, this.r, this.r);

      }
      else  image(uImg, this.x, this.y, this.r, this.r);
      
      // fill(255, 50);
      // ellipseMode(CORNER);
      // ellipse(this.x, this.y, this.r, this.r);  
    }
  }