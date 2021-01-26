let video;
let w = 10;
 let pixelImgX = 0;
let pixelImgY = 0;
let slider; 


function setup(){
  createCanvas(600,400);
  background(0);
  
  video = createCapture(VIDEO);
  video.size(200,120);
  // video.hide();
  
  slider = createSlider(10,100,50);
  slider.style('color', 255);

}

function draw(){
    video.loadPixels();
     let pixelX = random(0, video.width);
  let pixelY = random(0, video.height);
   let rectSize = slider.value();
 
   filter(DILATE);
    copy(video,pixelX, pixelY, 30,30, mouseX,mouseY,rectSize,rectSize);
  
//   pixelImgX += 50;
  
//   if (pixelImgX> width){
//     pixelImgY += 50;
//     pixelImgX = 0;
//   }
//   if (pixelImgY> height){
//     pixelImgY = 0;
//     pixelImgX = 0;
//   }
  
  
}
