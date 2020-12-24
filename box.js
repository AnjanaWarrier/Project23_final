class Box{
    constructor(x,y,width,height){
        var options;

        
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;

        World.add(world,this.body);
        
    }

    display(){
        var pos;
        pos = this.body.position;
        var angle;
        angle = this.body.angle;
        push();

        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}