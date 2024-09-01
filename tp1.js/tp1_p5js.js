//link de video explicativo: https://youtu.be/UgE3wDBMTWI
//Juan Felipe Martinez Reinaz
//Legajo 119084/4
let obra;
let cantCirculos=6;
let TamEllipses=40;
let cantCuadrantes=4;
let cantY=10;

function preload() {
  obra=loadImage("data/F_25.jpg");
}

function setup() {
  createCanvas(800, 400);
}


function draw() {
  background(255);
  image(obra, 0, 0, 400, 400);
  ilusionOptica();
}

function ilusionOptica() {
  let colores;

  push();
  translate(400+200, 200);
  for (let i=0; i<cantCuadrantes; i++) {
    for (let y=0; y<cantY; y++) {
      if (y%2==0) {
        if (colorearLineas()) {
          colores = color ( random(255), 0, random(255));
          fill(colores);
        } else {
          fill(255);
        }
      } else {
        fill(0);
      }
      rect(0, y*20, 200, 20);
    }
    rotate(radians(90));
  }
  pop();
  for ( let i=cantCirculos; i>0; i--) {
    if ((i+cantCirculos)%2==0) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(600, 200, TamEllipses*i, TamEllipses*i);
  }
}

function colorearLineas() {
  if (mouseIsPressed)
  {
    return true;
  } else {
    return false;
  }
}
