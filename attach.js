class Attach {
    constructor(bodyA, bodyB){
       var options = {
           bodyA : bodyA,
           bodyB : bodyB,
           length : 10,
           stiffness : 0.5        
        }
        this.link = Constraint.create(options);
       World.add(world,this.link);
    }
    display(){
        strokeWeight(5);
        line (this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x,this.link.bodyB.position.y)
    }
} 