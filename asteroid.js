function Asteroid() {
    this.pos = createVector(random(width), random(-10,-500));
    this.vel = createVector(0, 1+(floor(frameCount/3000)));
    this.r = random(20,30);
    this.total = floor(random(5,15));
    this.offset = [];
    for (let i = 0; i < this.total; i++) {
      this.offset[i] = random(-10,10);
    }
    
    this.update = function() {
      this.pos.add(this.vel);
    }
    
    this.show = function() {
      push();
      strokeWeight(3);
      stroke(255);
      noFill();
      translate(this.pos.x,this.pos.y);
      
      beginShape();
      for (let i = 0; i< this.total; i++) {
        let angle = map(i, 0, this.total, 0, TWO_PI);
        let r = this.r + this.offset[i];
        let x = r*cos(angle);
        let y = r*sin(angle);
        vertex(x,y);
      }
      endShape(CLOSE);
  
      pop();
    }
    
    this.finished = function() {
      return (this.pos.y > height );    
    } 
  
    
  }