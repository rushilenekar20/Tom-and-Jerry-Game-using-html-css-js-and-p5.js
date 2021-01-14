

class Tom {

    constructor(value_r , value_y) {
      this.r = value_r;
      this.x = width;
      this.y = height - this.r - value_y;
      this.flag = true;
    }
  
    move(value_x) {
      this.x -= value_x;
      // if(this.x < 0  && this.flag ) {
      //   this.flag = false;
      //   this.x =0;
      // }

    }

    disapear(){
      this.x =  0;
    }
  
    show() {
      image(tImg, this.x, this.y, this.r, this.r);
  
    }
  
  }