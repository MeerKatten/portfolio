class Ammo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yspeed = -3;
    this.lifetime = 255;
  }

  update() {
    this.y += this.yspeed;
  }

  show() {
    fill(150);
    stroke(100);
    strokeWeight(2);
    ellipse(this.x, this.y, 10, 30);

    rect(this.x - 5, this.y, 10, 15);
  }

  finished() {
    return this.y < 0;
  }

  collide(dot) {
    this.xx = dot.x;
    this.yy = dot.y;

    var d = dist(this.x, this.y, this.xx, this.yy);
    if (d <= 10 + dot.r) {
      return true;
    }
  }
}
