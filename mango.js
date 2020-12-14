class Mango{
    constructor(x,y){
var options = {
isStatic : true,
restitution : 0,
friction: 1,
}
this.body = Bodies.circle(x,y,30,options);
this.img = loadImage("mango.png");
this.r = 30;
World.add(myWorld,this.body);

}


display(){
    var pos = this.body.position;   
    imageMode(CENTER);
    image(this.img,pos.x,pos.y,50,50);
 
   }

}

