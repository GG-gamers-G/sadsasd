class CannonBall {
  constructor(x, y) {
    var options = {
     restitution : 0.1,
      isStatic: true
    };
//add circle to the body
this.r=50
this.body = Bodies.circle(x,y,this.r,options)
this.image = loadImage("assets/cannonball.png")
    World.add(world, this.body);
  }

  //add shoot function 
  letitgo(){
Matter.Body.setStatic(this.body,false)
var velocity = p5.Vector.fromAngle(cannon.angle)
velocity.mult(20)
Matter.Body.setVelocity(this.body,{x:velocity.x, y :velocity.y})

  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
 image(this.image,0,0,this.r,this.r )
    pop();

    }
  }

