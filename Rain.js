class Rain {
    constructor(){
        var options = {
            restitution:0.1           
        }
        this.rain = Bodies.circle(random(0,700),random(0,700),5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    updateY(){     
        if(this.rain.position.y > height){

            Matter.Body.setPosition(this.rain, {x:random(0,700), y:random(0,700)})
        }
    }

    showDrop(){
        stroke("black");
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius);
    }
}