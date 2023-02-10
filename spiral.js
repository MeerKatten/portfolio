class Ball {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    show() {
      point(this.x, this.y);
    }
  }
  
  let canvas;
  let ballRadius = 3;
  let angleRadians;
  let angle = 0;
  let radius = 0;
  let x = 0;
  let y = 0;
  let points = [];
  
  function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-50");
  }
  
  function draw() {
    translate(0, 200);
    strokeWeight(5);
    stroke(255);
    clear();
  
    angle = angle + 0.2;
/*     radius = windowWidth / 20; */
    radius = 20+(windowWidth/100);
    angleRadians = radians(angle);
  
    y = sin(angleRadians) * radius;
    x = cos(angleRadians) * radius;
    x = x + 50;

    stroke(239, 68, 68, 100);
    
    strokeWeight(5);
    noFill();
    beginShape();
    for (let i = 0; i < windowWidth / ballRadius; i++) {
      x = x + ballRadius;
      points[i] = new Ball(x*tan(i*0.01), y*sin(x*0.1));
      points[i].show();
      vertex(x*tan(i*0.01), y*sin(x*0.1));
    }
    endShape();

/*     let hdx=0;
    for (let ball of points){
        let temp = points[hdx+1];
        let temp2 = points[hdx];
        line(points[points.length-1.x],);
    } */
  }
  
  
  function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  
  