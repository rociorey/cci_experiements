// EXERCISE: Trying it on my own, not working

// let video;
// let poseNet;
// let pose;



// function setup(){
//     createCanvas(600,400);
//     video = createCapture(VIDEO);
//     video.hide();

//     poseNet = ml5.poseNet(video, modelReady);
//     poseNet.on('pose',function(poseOn));
// }

// function modelReady(){
//     console.log('Model is ready to be used');
// }

// function poseOn(poses){
//     console.log(poses);

// }

// function pose(){
//     if (poses.length > 0){
//         pose = poses[0].pose;
//     }
// }

// function draw (){
//     image(video,0,0);

//     // if(pose){
//     //     image(video,pose.x,pose.y);
//     // }

// }

/* === 

Available parts are:
0   nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
=== */ 



// EXERCISE: Tutorial exercise remixed with my photos

// let video;
// let poseNet;
// let poses = [];
// let noseImage;
// let leftEyeImage; 
// let rightEyeImage;

// //images for uploader
// function preload() {
//   noseImage = loadImage("https://freight.cargo.site/w/600/q/94/i/bebbcc8da7596113924370f45129652b7b2d358dd7b8c695ad6016bc33359753/ezgif.com-video-to-gif-4.gif");
//   leftEyeImage = loadImage ("https://freight.cargo.site/w/600/q/94/i/5f118e5f3c0b76b43cd7701ae2c032e3b44d185b78f6ec2b58e5d5e2b1db507c/ezgif.com-video-to-gif-8.gif");
//   rightEyeImage = loadImage ("https://cdn.glitch.com/629b91db-ff14-42f2-9ae0-4a37c23cbb65%2FPngItem_2888204.png?v=1605244676942");
// }

// function setup() {
//   createCanvas(640,480);
//   video = createCapture(VIDEO);
//   video.size(width,height);
  
//   poseNet = ml5.poseNet(video, modelReady);
  
//   poseNet.on('pose', function (results){
//     poses = results;
//   });
  
//   video.hide();
// }


// function modelReady(){
//   select('#status').html('Model loaded');
// }


// function mousePressed(){
//   console.log(JSON.stringify(poses[0].pose.keypoints[0].part));
// }

// function draw(){
// imageMode(CORNER);
// image(video, 0, 0, width, height);

// imageMode(CENTER);

// if (poses.length > 0){
//   let pose = poses[0].pose;
//   let nose = pose['nose'];
//   image(noseImage, nose.x, nose.y, 60,60);
  
//   let rightEye = pose['rightEye'];
//   image(rightEyeImage, rightEye.x, rightEye.y,60,60);
  
//   let leftEye = pose['leftEye'];
//   image(leftEyeImage, leftEye.x, leftEye.y,60,60);
// }
  
// }


// EXERCISE: Trying to showcase portfolio pieces in the distance in between hands - try 1

// let video;
// let poseNet;
// let poses = [];
// // let noseImage;
// // let leftEyeImage; 
// // let rightEyeImage;

// let piece1;
// let piece2;
// // let piece3;


// //images for uploader
// function preload() {
//   piece1 = loadImage("https://freight.cargo.site/w/600/q/94/i/bebbcc8da7596113924370f45129652b7b2d358dd7b8c695ad6016bc33359753/ezgif.com-video-to-gif-4.gif");
//   piece2 = loadImage ("https://freight.cargo.site/w/600/q/94/i/5f118e5f3c0b76b43cd7701ae2c032e3b44d185b78f6ec2b58e5d5e2b1db507c/ezgif.com-video-to-gif-8.gif");
// //   piece3 = loadImage ("https://cdn.glitch.com/629b91db-ff14-42f2-9ae0-4a37c23cbb65%2FPngItem_2888204.png?v=1605244676942");
// }

// function setup() {
//   createCanvas(640,480);
//   video = createCapture(VIDEO);
//   video.size(width,height);
  
//   poseNet = ml5.poseNet(video, modelReady);
  
//   poseNet.on('pose', function (results){
//     poses = results;
//   });
  
//   video.hide();
// }


// function modelReady(){
//   select('#status').html('Model loaded');
// }


// function mousePressed(){
//   console.log(JSON.stringify(poses[0].pose.keypoints[0].part));
// }

// function draw(){
// imageMode(CORNER);
// image(video, 0, 0, width, height);

// imageMode(CENTER);

// if (poses.length > 0){
//   let pose = poses[0].pose;
 
//   let rightHand = pose['rightWrist'];
// //   image(piece1, nose.x, nose.y, 60,60);
//   let rightHand = pose['leftWrist'];

//   let d = dist(rightHand.x, leftHand.x);
  
//   image(piece2, d, d,160,100);

// //   let leftEye = pose['leftEye'];
// //   image(piece3, leftEye.x, leftEye.y,60,60);
// }
  
// }



// EXERCISE: Trying to showcase portfolio pieces in the distance in between hands - try 2 (16.11.20)

/* === 

Available parts are:
0   nose
1	leftEye
2	rightEye
3	leftEar
4	rightEar
5	leftShoulder
6	rightShoulder
7	leftElbow
8	rightElbow
9	leftWrist
10	rightWrist
11	leftHip
12	rightHip
13	leftKnee
14	rightKnee
15	leftAnkle
16	rightAnkle
=== */ 


let video;
let poseNet;
let poses = [];
let myImages = [];

// let leftWristImage; 
// let rightWristImage;

//images for uploader
function preload() {
  leftWristImage = loadImage ("https://freight.cargo.site/w/600/q/94/i/5f118e5f3c0b76b43cd7701ae2c032e3b44d185b78f6ec2b58e5d5e2b1db507c/ezgif.com-video-to-gif-8.gif");
  rightWristImage = loadImage ("https://freight.cargo.site/w/600/q/94/i/bebbcc8da7596113924370f45129652b7b2d358dd7b8c695ad6016bc33359753/ezgif.com-video-to-gif-4.gif");
  thirdImage = loadImage('https://freight.cargo.site/w/600/q/75/i/3f09c5b9416c14caa3887452d59b4e326c00b2e5d8d8d992a9b8982a21edb767/ezgif.com-video-to-gif-7.gif');
  fourthImage = loadImage('https://freight.cargo.site/w/434/q/94/i/8c9b02144432fed1e0818695ab65b815e333a67efde66a5a7ad6664dc79e2a9d/ezgif.com-video-to-gif-1.gif');
}

function setup() {
  let c = createCanvas(640,480);
  c.parent('video');

  myImages = [
    "leftWristImage",
    "rightWristImage",
    "thirdImage",
    "fourthImage",
  ];

  video = createCapture(VIDEO);
  video.size(width,height);
  
  
  poseNet = ml5.poseNet(video, modelReady);
  
  poseNet.on('pose', function (results){
    poses = results;
  });
  
  video.hide();

}


function modelReady(){
  // select('#status').html('Model loaded');
  console.log("Model ready, let's get those portfolio babies going");
}


function mousePressed(){
  console.log(JSON.stringify(poses[0].pose.keypoints[0].part));
}

function draw(){
imageMode(CORNER);
image(video, 0, 0, width, height);


imageMode(CENTER);

if (poses.length > 0){
  let pose = poses[0].pose;
  
  // Changed the x and y coordinates a bit so they'd be "inside" the hand space and away from the wrist
  // Added variable to display images in the distance from two hands
   let rightWrist = pose['rightWrist'];
   let leftWrist = pose['leftWrist'];
   let d = dist(rightWrist.x,rightWrist.y,leftWrist.x,leftWrist.y);
   let dDiv = d/myImages.length;


   image(rightWristImage, rightWrist.x+dDiv-30, rightWrist.y-40,120,80); //image(img, x, y, [width], [height])
   image(fourthImage, rightWrist.x+dDiv+60, rightWrist.y-40,80,120);
   image(leftWristImage, leftWrist.x-dDiv-20, leftWrist.y-40,120,80);
   image(thirdImage, leftWrist.x-dDiv+70, leftWrist.y-40,80,120);
  
  //  Ed suggested a for loop to be able to create more image and changing the d value like multiplyig it 
}
  // for (let n = 0; n>myImages.length;n++){

  //   let xIncrement = rightWrist.x+30;
  //   image(myImages[i], ightWrist.x+30, rightWrist.y-40, 120, 80);
  //   xIncrement++;
  // }
}


