class Umbrella{
    constructor(x, y, r){
        var options = {
           isStatic: true,
           restitution:0.1,
           density:0.02,
           friction:0.1
        }
        this.body = Bodies.circle(x, y, r, options);
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("walking_1.png", "walking_2.png", "walking_3.png", "walking_4.png", "walking_5.png",
        "walking_6.png", "walking_7.png", "walking_8.png");
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        noStroke();
        fill("lightblue");
        imageMode(CENTER);
        image(this.image, 100, 0,   this.r, this.r);
        pop();


    }
}