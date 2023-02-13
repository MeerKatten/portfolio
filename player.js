class Player {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.pos = createVector(this.x, this.y);
      this.vel = createVector(0, -1);
      let firing = true;
      setInterval(this.firingon, 500);
    }
  
    collide(dot) {
    var d = dist(this.x, this.y, dot.pos.x, dot.pos.y);
    if (d <= this.r + dot.r) {
      return true;
    }
  }
  
    reset() {
      this.x = windowWidth/2;
      this.y = windowHeight/2;
    }
    update() {
      let hor;
      let ver;
      let vel = 4;
      let fire;

      hor = (!!keyIsDown(39) || !!keyIsDown(68)) - (!!keyIsDown(37) || !!keyIsDown(65));

      ver = (!!keyIsDown(40) || !!keyIsDown(83)) - (!!keyIsDown(38) || !!keyIsDown(87));
      
      fire = !!keyIsDown(32)
      this.x = constrain(this.x+vel*hor, this.r, width - this.r);
      this.y = constrain(this.y+vel*ver, this.r, height - this.r);
         
        if (fire && firing){
          for (let i = 0; i < 1; i++) {
            ammos.push( new Ammo(this.x, this.y-80))
          }
          firing = false;
        }
    }

    firingon(){
      firing = true;
    }
  
    show() {
      strokeWeight(5);
      noStroke();
      fill(180);
    
    ellipse(this.x,this.y,this.r*1.3,this.r*2.2); // Ship hull
    ellipse(this.x,this.y+this.r*0.1,this.r*3.5,this.r*0.8); // Ship Wings
  fill(80,255,255);
    ellipse(this.x,this.y-this.r*0.4,this.r*0.7,this.r*1); // Window Ellipse
    rect(this.x-this.r/1.45/2,this.y-this.r/2,this.r/1.45, this.r/1.45, this.r/8); // Window Square
  stroke(180);
    line(this.x,this.y+this.r*0.2,this.x,this.y-this.r*0.9); // Window line
    line(this.x-this.r*0.4,this.y-this.r*0.2,this.x+this.r*0.4,this.y-this.r*0.2); // Window line

  noStroke();
  fill(80);
    triangle(this.x-this.r*0.2,this.y-this.r*1.05,this.x+this.r*0.2,this.y-this.r*1.05,this.x,this.y-this.r*1.3); // Tip

    quad(this.x-this.r*0.5, this.y+this.r*0.65, this.x+this.r*0.5, this.y+this.r*0.65, this.x+this.r, this.y+this.r*1.5, this.x-this.r, this.y+this.r*1.5); //base
    ellipse(this.x-this.r*0.75,this.y+this.r*0.1,this.r*0.3, this.r); //Left wing ellipse
    ellipse(this.x+this.r*0.75,this.y+this.r*0.1,this.r*0.3, this.r); //Right wing ellipse
  fill(205);
    quad(this.x+this.r*0.25, this.y+this.r*0.75, this.x+this.r*0.5, this.y+this.r*0.75, this.x+this.r*0.9, this.y+this.r*1.4, this.x+this.r*0.5, this.y+this.r*1.4); // Base reflection
  fill(255);
    ellipse(this.x-this.r*0.72,this.y-this.r*0.15,this.r*0.15, this.r*0.30); //Left wing ellipse reflection
    ellipse(this.x+this.r*0.78,this.y-this.r*0.15,this.r*0.15, this.r*0.30); //Right wing ellipse reflection
    ellipse(this.x+this.r*0.16,this.y-this.r*0.62,this.r*0.2,this.r*0.3); //Window reflection

    ellipse(this.x+this.r*1.3,this.y-this.r*0.03,this.r*0.6, this.r*0.1); //Right wing reflection
    ellipse(this.x-this.r*1.3,this.y-this.r*0.03,this.r*0.6, this.r*0.1); //Left wing reflection

      
    }
}