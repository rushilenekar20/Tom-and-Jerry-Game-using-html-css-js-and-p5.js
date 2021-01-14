

class Power {

    constructor() {
      this.r = 40;
      this.x = width;
      this.y = height - this.r ;
    }
  
    move() {
      this.x -= 16;
    }
  
    show() {
      image(PowerImg, this.x, this.y, this.r, this.r);
  
    }

    disapear(){
      this.x =  -20;
    }
  
  }