class Drops{
    constructor(x, y){
        var options = {
           isStatic: false,
           restitution:0.1,
           density:0.02,
           friction:0.1
        }
        this.drops = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.drops);
    }

    updaterain(){
        if(this.drops.position.y > height){
           Matter.Body.setPosition(this.drops, {x: random(0,400), y: random(0,400)}) 
        }

        var maxDrops = 100;
     
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0, 400), random(0, 400)));
        }
        
    }

    display(){
        var pos = this.drops.position;
        push();
        translate(pos.x, pos.y);
        noStroke();
        fill("lightblue");
        ellipse(100, 100, 20, 20);
        pop();


    }
}