class Stone{
    constructor(x,y){
var options = {
isStatic : false,
restitution : 0,
friction: 1,
density : 1.2 
}
this.body = Bodies.circle(x,y,20,options);
this.img = loadImage("stone.png");
this.r = 35;
World.add(myWorld,this.body);

}


display(){
    var pos = this.body.position
    imageMode(CENTER)
    image(this.img,pos.x,pos.y,this.r,this.r)
   }

}