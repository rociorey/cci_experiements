//[EXERCISE] Time and Interactivity - Eyes following Cursor

// let mouseVector;
// let ellipsex;
let whiteCircleX;
let whiteCircleY;
let whiteCircleVectorPos;
let blackCircleVectorPos;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5");
  noStroke();
  // whiteCirclePos = createVector(width/2,height/2);
  // mouseVector = createVector(mouseX,mouseY);
 whiteCircleVectorPos = createVector(width/2,height/2);
//   whiteCircleX =  width/2;
//   whiteCircleY = height/2;
var gui = new dat.GUI();

gui.add(vars, 'showIndicators');
var controller = gui.add(vars, 'size', 80, 200);
gui.add(vars, 'color');


controller.onChange(function() {
  cancelAnimationFrame(rafID);
  initCanvas();
});
}

function draw() {
  background(100,30,40);
  fill(255);
  ellipse(whiteCircleVectorPos.x+100,whiteCircleVectorPos.y,150,'size');
  ellipse(whiteCircleVectorPos.x-100,whiteCircleVectorPos.y,150,150);
  fill(0);
  
//   how can I make the inner circle move a little bit towards where the mouse is? maybe I can create a vector which showcases the mouse and make the circle move a lil that way? mapping the value of mouse to width and height of the pupil?
  
  let blackCirclex = map(mouseX, 0, width, whiteCircleVectorPos.x-30,whiteCircleVectorPos.x+20); //map(value, start1, stop1, start2, stop2, [withinBounds])
  let blackCircley = map(mouseY, 0, height, whiteCircleVectorPos.y-20,whiteCircleVectorPos.y+20);
  blackCircleVectorPos = createVector(blackCirclex,blackCircley);
 
  ellipse(blackCircleVectorPos.x+100, blackCircleVectorPos.y, 50,50);
  ellipse(blackCircleVectorPos.x-100, blackCircleVectorPos.y, 50,50);
  push();
  stroke(255);
  noFill();
  arc(whiteCircleVectorPos.x+10, whiteCircleVectorPos.y+130, 110, 70, 0, HALF_PI, OPEN);
  stroke('rgb(4, 96, 124)');
  strokeWeight(3);
  arc(whiteCircleVectorPos.x+50, whiteCircleVectorPos.y+125, 60, 6, 0, QUARTER_PI, OPEN);
  pop();

}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}