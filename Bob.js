class Bob{
    constructor(x,y,r){
     var option={
         isStatic : true,
         restitution : 1,
         friction : 0.1,
         density : 0.86
     }
    this.body=Bodies.circle(x,y,r,option)
    this.r=r;
    World.add(world,this.body)
    }
    
    display(){

        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        
        ellipse(0,0,this.r,this.r)
        pop()
    }
}
