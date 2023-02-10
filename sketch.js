class Line {
  constructor(x1, y1, angle, length) {
    this.x1 = x1;
    this.y1 = y1;
    this.angle = radians(angle);
    this.length = length;
  }

  show() {
    let x2 = this.x1 + cos(this.angle) * this.length;
    let y2 = this.y1 + sin(this.angle) * this.length;
    line(this.x1, this.y1, x2, y2);
    return {x2, y2};
  }
}
let line1;
let lengthA = 24;
let lengthB = 40;
let lengthC = 63;
let lengthD = 15;
let canvas;
let i = -500;
let ii = 0;
let iii = 0;
let transp = 255;
let aline;

let angleR = 0;
let radi;
let pathX;
let pathY;
let strokeColor = 0;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-50');
  
/*   lengthA = 24*windowWidth/2000;
  lengthB = 40*windowWidth/2000;
  lengthC = 63*windowWidth/2000; */


  
}

function draw() {
  strokeWeight(50*windowWidth/5000);

  
  lengthA = 24*windowWidth/500;
  lengthB = 40*windowWidth/500;
  lengthC = 63*windowWidth/500;
  lengthD = 15*windowWidth/500;
  radi = windowHeight/9;
  clear();
  
  if (angleR > 359){
    angleR = 1;
  }
  angleR = angleR + .2;
  angle = radians(angleR);
  
  pathY = sin(angle) * radi
  pathX = cos(angle) * windowWidth/3.5;

  if (angleR<180){
     strokeColor = map(angleR, 1, 180, 255, 100);
  }
  if (angleR>180){
    strokeColor = map(angleR, 181, 360, 100, 255);
  }
  
  stroke(strokeColor,68,68);

  let startxy = newLine(pathX+200, pathY+windowHeight/3, 0, lengthA);
  startxy = newLine(startxy.x2, startxy.y2, 60, lengthB);
  newLine(startxy.x2, startxy.y2, -60, lengthC);
  startxy = newLine(startxy.x2+lengthA/2, startxy.y2, -60, lengthC);
  startxy = newLine(startxy.x2, startxy.y2, 60, lengthB);
  aline = startxy;
  startxy = newLine(startxy.x2, startxy.y2, 0, lengthA);
  
  
  strokeWeight(50*windowWidth/7000);
  
  startxy = newLine(aline.x2-(windowWidth/18)-iii, startxy.y2-ii, 0, lengthD);
  


}

function newLine(startX, startY, angle, length){
  line1 = new Line(startX, startY,angle,length);
  endpoints = line1.show();
  return endpoints;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  lengthA = 24*windowWidth/200;
  lengthB = 40*windowWidth/200;
  lengthC = 63*windowWidth/200;
}

