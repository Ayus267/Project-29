class Stone {
  constructor(x, y, r1, r2) {
    let options = {
      restitution: 0.08,
      // friction: 0.5
    };

    this.body = Bodies.circle(x, y, r1, options);
    this.w = r1;
    this.h = r2;
    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(1);
    fill("white");
    ellipseMode(CENTER);
    ellipse(0, 0, this.r1, this.r2);
    noStroke();
    pop();
  }
}
