class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false,
        restitution:0.2,
        friction:0.000001
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
  }
  display(){
      
    var bpos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    stroke("yellow")
    rect(bpos.x, bpos.y, this.width, this.height);
  }
}; 
  