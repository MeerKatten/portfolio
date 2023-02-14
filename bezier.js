let p0, p1, p2, spin;
let angleD, angleR, radius, delta;
var mode = 0;
const automatic = 0;
const mouseActivated = 1;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-50");
  spin = createVector(0,0);
  radius = 1;
  angleD = 280;
  delta = 0.5;
  
}

function draw() {
  clear();
  stroke(255,255);
  strokeWeight(1);
  noFill();
  
  push();
      stroke(239, 68, 68);
      strokeWeight(50);

      strokeWeight(3);

      fill(15, 23, 42);
      if (
        mouseX > 30 &&
        mouseX < 30+250 &&
        mouseY > 30 &&
        mouseY < 105
      ) {
        fill(30, 41, 59);
      }
      rect(30, 30, 250, 75, 6);
      pop();


      push();
      fill(226, 232, 240);
      noStroke();
      textFont("Sofia Sans Extra Condensed");
      textSize(32);
      textAlign(CENTER, CENTER);
      text("Switch Mode", 150,69);
      pop();
  /*
  if (spin.y*windowWidth/2 < windowWidth/2 || delta > 0.02){
    angleD = angleD + 0.5;
  } else {
    delta = 0.5;
  }*/
  switch (mode) {
      case automatic:
      
        if (delta < 0.040){
    angleD = angleD + 0.5;
  }
  
  if (spin.y > 0.98 && delta < 0.02){
      delta = 0.5;
    angleD = angleD +0.5;
    }
  if (spin.y > -0.98){
    angleD = angleD + 0.5;
  }
 
  
  
  if (delta > 0.02){
        delta = delta-0.0004;
  }
    angleR = radians(angleD);
  
    spin.y = sin(angleR) * radius;
    spin.x = cos(angleR) * radius;
  

  
  

  for (let t = 0; t <= 1.00001; t += delta) {
    initVectors(spin.y*windowWidth/2, t);
    let v = cubic(p0, p1, p2, p3, t);
  }
      break;
      case mouseActivated:
      
      delta = 0.04;
      
        for (let t = 0; t <= 1.00001; t += delta) {
    initVectorsMouse(mouseX, mouseY);
    let v = cubic(p0, p1, p2, p3, t);

  }

      
      break;
  }
  

}

function initVectors(x, t) {  
  p0 = createVector(windowWidth, windowHeight-windowHeight*0.85);
  p1 = createVector(windowWidth/2-x, windowHeight);
  p2 = createVector(windowWidth/2+x, windowHeight-windowHeight*0.85);
  p3 = createVector(0, windowHeight);

  line(p2.x, p2.y, p3.x, p3.y);

}

function initVectorsMouse(x, t) {
  
  let xx = map(x, 0, windowWidth, 0-windowWidth/2, windowWidth/2);
  p0 = createVector(windowWidth, 0);
  p1 = createVector(windowWidth/2-xx, t);
  p2 = createVector(windowWidth/2+xx, t);
  p3 = createVector(0, windowHeight);

  line(p2.x, p2.y, p3.x, p3.y);

}

function cubic(p0, p1, p2, p3, t) {
  let v1 = quadratic(p0, p1, p2, t);
  let v2 = quadratic(p1, p2, p3, t);
  let x = lerp(v1.x, v2.x, t);
  let y = lerp(v1.y, v2.y, t);

  line(v1.x, v1.y, v2.x, v2.y);
  return createVector(x, y);
}

function quadratic(p0, p1, p2, t) {
  let x1 = lerp(p0.x, p1.x, t);
  let y1 = lerp(p0.y, p1.y, t);
  let x2 = lerp(p1.x, p2.x, t);
  let y2 = lerp(p1.y, p2.y, t);
  let x = lerp(x1, x2, t);
  let y = lerp(y1, y2, t);

  line(x1, y1, x2, y2);
  return createVector(x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mousePressed() {
  if (mode === 1) {
      if (
        mouseX > 30 &&
        mouseX < 30+250 &&
        mouseY > 30 &&
        mouseY < 105
      ) {
      mode = 0;
    }
  } else if (mouseX > 30 &&
        mouseX < 30+250 &&
        mouseY > 30 &&
        mouseY < 105){
    mode = 1;
  }
  
    
  
}
