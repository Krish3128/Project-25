class Ball extends BaseClass {
    constructor(x, y) {
    super(x,y,30,30);
    
    this.image=loadImage("Images/paper.png");
    
    }    
    display(){
    
      super.display();
    }
}