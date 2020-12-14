class Ground{
    constructor(x,y){
var options = {
isStatic : true 
}
this.body = Bodies.rectangle(x,y,800,20,options);
World.add(myWorld,this.body);

}


display(){
var pos = this.body.position
    fill("black")
   rectMode(CENTER);
   rect(pos.x,pos.y,800,20);
   }

}
