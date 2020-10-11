class Slingshot {
    constructor(bodyA, pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 0.05,
        length: 10
    }
    this.pointB = pointB
    this.slingshot = Constraint.create(options);
    World.add(world, this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
            var pointA = this.slingshot.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y)    
        }
    }

    fly(){
        this.slingshot.bodyA = null;
    }
}
