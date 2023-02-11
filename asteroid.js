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
  
    update() {
      let hor;
      let ver;
      let vel = 4;
      let fire;

      hor = !!keyIsDown(68) - !!keyIsDown(65);
      ver = !!keyIsDown(83)  - !!keyIsDown(87);
      fire = !!keyIsDown(32)
      this.x = this.x+vel*hor;
      this.y = this.y+vel*ver;
         
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

class Ammo {
  constructor(x, y){
      this.x = x;
      this.y = y;
      this.yspeed = -3;
      this.lifetime = 255;
  }
  
  update() {
      this.y += this.yspeed;
    }
  
  show () {
    fill(150);
    stroke(100);
    strokeWeight(2);
    ellipse(this.x, this.y, 10, 30);

    rect(this.x-5,this.y, 10, 15);
    
  }
  
  finished() {
    return (this.y < 0 );
  }
  
    testIntersection(dot) {
    var d = dist(this.x, this.y, dot.x, dot.y);
    if (d <= this.r + dot.r) {
      return true;
    }
  }
}

let player;
let x;
let y;
let vel = 3;
let pos;
let ammos=[];
let firing


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-50");
  x = windowWidth/4;
  y = windowHeight/2;
  pos = createVector(windowWidth/2, windowHeight/2);


  player = new Player(x, y, 50);

}

function draw() {
  clear();
  

  player.show();

  player.update();

for (let ammo of ammos){
  ammo.show();
  ammo.update();
}

  for (let i = ammos.length-1; i >= 0; i--) {
    if (ammos[i].finished()) {
      ammos.splice(i,1);
    }
  }

  
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}