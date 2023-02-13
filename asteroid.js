class Asteroid {
  constructor(acc) {
    this.acc = floor(acc / 10);
    this.pos = createVector(random(width), random(-10, -500));
    this.vel = createVector(random(-0.5, 0.5), 1 + this.acc);
    this.r = random(20, 30);
    this.total = floor(random(5, 15));
    this.offset = [];
    this.x = 0;
    this.y = 0;
    for (let i = 0; i < this.total; i++) {
      this.offset[i] = random(-10, 10);
    }
  }
  update() {
    this.pos.add(this.vel);
    this.x = this.pos.x;
    this.y = this.pos.y;
  }

  reset() {
    this.acc = 0;
  }

  show() {
    push();
    strokeWeight(3);
    stroke(255);
    fill(15, 23, 42);
    translate(this.pos.x, this.pos.y);

    beginShape();
    for (let i = 0; i < this.total; i++) {
      let angle = map(i, 0, this.total, 0, TWO_PI);
      let r = this.r + this.offset[i];
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);

    pop();
  }

  finished() {
    return this.pos.y > height;
  }
}
