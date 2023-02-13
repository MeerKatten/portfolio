let player;
let points = 0;
let showPoints = 0;
let x = 0;
let y = 0;
let vel = 3;
let pos;
let ammos = [];
let firing;
let asteroids = [];
let mode = 0;
const welcomeScreen = 0;
const gameActive = 1;
const gameOver = 2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-50");
  x = windowWidth / 2;
  y = windowHeight / 2;
  pos = createVector(windowWidth / 2, windowHeight / 2);

  for (let i = 0; i < 10; i++) {
    asteroids.push(new Asteroid(0));
  }

  setInterval(addPoints, 1000);

  player = new Player(x, y, 50);
}

function draw() {
  clear();

  switch (mode) {
    case welcomeScreen:
      push();
      stroke(239, 68, 68);
      strokeWeight(50);
      line(
        -50,
        0 + windowHeight / 5,
        windowWidth + 50,
        windowHeight - windowHeight / 5
      );
      strokeWeight(5);
      rectMode(CENTER);
      fill(15, 23, 42);
      if (
        mouseX > windowWidth / 2 - 150 &&
        mouseX < windowWidth / 2 + 150 &&
        mouseY > windowHeight / 2 - 50 &&
        mouseY < windowHeight / 2 + 50
      ) {
        fill(30, 41, 59);
      }
      rect(windowWidth / 2, windowHeight / 2, 300, 100, 6);
      pop();
      push();
      fill(226, 232, 240);
      noStroke();
      textFont("Sofia Sans Extra Condensed");
      textSize(48);
      textAlign(CENTER, CENTER);
      text("Start game", windowWidth / 2, windowHeight / 2);
      pop();

      push();
      /*
      textAlign(LEFT, TOP);
      textFont("Roboto");
      textSize(36); */
      fill(15, 23, 42);
      stroke(239, 68, 68);
      strokeWeight(2);
      rect(50, windowHeight - 80, 40, 40, 5);
      rect(100, windowHeight - 80, 40, 40, 5);
      rect(150, windowHeight - 80, 40, 40, 5);
      rect(100, windowHeight - 130, 40, 40, 5);
      rect(250, windowHeight - 80, 250, 40, 5);

      /*
      text("A",56,windowHeight-75);
      text("S",107,windowHeight-75);
      text("D",156,windowHeight-75);
      text("W",102,windowHeight-125);
      */
      pop();

      break;
    case gameActive:
      player.show();
      player.update();
      showPoints = points;

      push();
      textFont("Roboto");
      textSize(32);
      textAlign(LEFT, BOTTOM);
      text(`Score: ${showPoints}`, 0, windowHeight);
      pop();

      for (let ammo of ammos) {
        ammo.show();
        ammo.update();
      }

      for (let i = ammos.length - 1; i >= 0; i--) {
        if (ammos[i].finished()) {
          ammos.splice(i, 1);
        }
      }

      for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].show();
        asteroids[i].update();
        for (let j = 0; j < ammos.length; j++) {
          if (ammos[j].collide(asteroids[i])) {
            asteroids.splice(i, 1);
            ammos.splice(j, 1);
          }
        }
        if (player.collide(asteroids[i])) {
          console.log("Game over");
          mode = 2;
        }
      }

      for (let i = asteroids.length - 1; i >= 0; i--) {
        if (asteroids[i].finished()) {
          asteroids.splice(i, 1);
        }
      }

      for (let i = asteroids.length; i < 10; i++) {
        asteroids.push(new Asteroid(showPoints));
      }
      break;
    case gameOver:
      push();
      rectMode(CENTER);
      stroke(239, 68, 68);
      strokeWeight(50);
      line(
        0,
        windowHeight / 2 + windowHeight / 4,
        windowWidth,
        windowHeight / 2 + windowHeight / 4
      );
      strokeWeight(5);
      fill(15, 23, 42);
      if (
        mouseX > windowWidth / 2 - 150 &&
        mouseX < windowWidth / 2 + 150 &&
        mouseY > windowHeight / 2 + windowHeight / 4 - 50 &&
        mouseY < windowHeight / 2 + windowHeight / 4 + 50
      ) {
        fill(30, 41, 59);
      }
      rect(windowWidth / 2, windowHeight / 2 + windowHeight / 4, 300, 100, 6);
      pop();
      push();
      fill(226, 232, 240);
      noStroke();
      textFont("Sofia Sans Extra Condensed");
      textSize(80);
      textAlign(CENTER, CENTER);
      text("Game over.", windowWidth / 2, windowHeight / 2);
      textSize(48);
      text("Restart", windowWidth / 2, windowHeight / 2 + windowHeight / 4);

      text(
        `Your score: ${showPoints}`,
        windowWidth / 2,
        windowHeight / 2 + windowHeight * 0.07
      );
      pop();

      for (let i = asteroids.length; i >= 0; i--) {
        asteroids.splice(i, 1);
      }
      for (let i = ammos.length; i >= 0; i--) {
        ammos.splice(i, 1);
      }
      player.reset();
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mode === welcomeScreen) {
    if (
      mouseX > windowWidth / 2 - windowWidth / 4 &&
      mouseX < windowWidth - windowWidth / 4 &&
      mouseY > windowHeight / 2 - windowWidth / 8 + 20 &&
      mouseY < windowHeight / 2 + windowWidth / 8 - 20
    ) {
      mode = 1;
      points = 0;
    }
  }
  if (mode === gameOver) {
    if (
      mouseX > windowWidth / 2 - 150 &&
      mouseX < windowWidth / 2 + 150 &&
      mouseY > windowHeight / 2 + windowHeight / 4 - 50 &&
      mouseY < windowHeight / 2 + windowHeight / 4 + 50
    ) {
      mode = 1;
      points = 0;
    }
  }
}

function addPoints() {
  points++;
}
