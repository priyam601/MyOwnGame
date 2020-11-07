class Player{
    constructor(x,y,width,height){

        var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0,
            'isStatic':false
        }

        this.player = Bodies.rectangle(x, y, width, height,options);
        this.x=x;
		this.y=y;
        this.width = width;
        this.height = height;
       // this.velocity = velocity

        

        World.add(world, this.player);
       // Matter.Body.setVelocity(this.player, {x: 10, y: -10});

     
    }
 jump(){
    //Matter.Body.setVelocity(this.player, {x: 1, y: -1});
    Matter.Body.setAngularVelocity( this.player, Math.PI/6);


}

    display(){
        var pos=this.player.position;		
        //var velocity = this.velocity;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       //strokeWeight(4);
       fill("white");
       rect( 0, 0, this.width, this.height);
       pop()
     }

}
