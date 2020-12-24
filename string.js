class String{
    constructor(x, y, body) {
        const options = {
          pointA: {
            x: x,
            y: y
          },
          bodyB: body,
          stiffness: 0.04,
          length: 200
        };
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    display(){
        stroke("black");
        const posA = this.string.pointA.position;
        const posB = this.string.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
    }
}