 
    // Use the hand with defaults (and show the webcam with wireframes)
    handsfree = new Handsfree({
      showDebug: true,
      hands: true
    })

    // Start webcam and tracking (personally, I always like to ask first)
    handsfree.start()
 
    let ellipseSize = 10;
    function setup(){
        createCanvas(300,300);
    }
   
    function draw(){
      background(0,0,0,0.7);

      fill(255);
      ellipse(mouseX, mouseY, ellipseSize);
    }


    // handsfree.on('palmPointer', () => {
    //     // Display the x and y of the right pinky
    //     // console.log("ellipse with landmark");       
    //     // fill(0,0,255);
    //     // ellipse(handsfree.data.hands.landmarks[0][8].x, handsfree.data.hands.landmarks[0][8].y, 80, 80);
    //     // let backgroundMap = map(handsfree.data.hands.curPinch[1][3].x,0,width,0,255);
        
    //   })

    // handsfree.on('finger-pinched-1-3', () => {
    //   // Display the x and y of the right pinky
    //   console.log(
    //    "finer being pinched 1-3"
    //   )
    //   background(0,0,255);
    //   // ellipse(width/2*handsfree.data.hands.curPinch[1][3].x, height/2*handsfree.data.hands.curPinch[1][3].y, 80, 80);
    //   // let backgroundMap = map(handsfree.data.hands.curPinch[1][3].x,0,width,0,255);
      
    // })
    
      // handsfree.on('finger-pinched-0-1', () => {
      //   // Display the x and y of the left pointer finger
      //   console.log(
      //     handsfree.data.hands.origPinch[0][3].x,
      //     handsfree.data.hands.origPinch[0][3].y
      //   )

      //   fill(255,0,0);
      //   ellipse(width/2*handsfree.data.hands.origPinch[0][0].x, height/2*handsfree.data.hands.origPinch[0][0].y, 80, 80);
      // })

     
      handsfree.use('gestureSigns', ({hands}) => {
        if(!hands.gesture) return
  
        if (hands.gesture[0]?.name === "victorySign"){
          console.log("victorysign with landmark");       

          let eitherHandX = handsfree.data.hands.landmarks[0][8].x || handsfree.data.hands.landmarks[1][8].x;
          let eitherHandY = handsfree.data.hands.landmarks[0][8].y || handsfree.data.hands.landmarks[1][8].y;

          let twoX = width - eitherHandX * width
          let twoY = eitherHandY * height

        fill(0,255,0);
        // ellipse(x, y, 80, 80);
        textSize(32);
    //  text('Two sign yay', twoX, twoY);
        text("i easily handle whatever comes my way", width/3,height/2);

         let backgroundMapX = map(twoX,0,width,0,255);
         let backgroundMapY = map(twoY,0,height,0,255);

        //  background(twoX,twoY,0);

        //  console.log(backgroundMapX);

        }
  
          if (hands.gesture[0]?.name === "one"){
            console.log('One sign recognised');
            // console.log(hands.gesture[0]?.x);
            // document.getElementById("NumberSign").style.display = "inline-block";
    
            // let backgroundMap = map(handsfree.data.hands.x,0,width,0,255);
            // let backgroundMapY = map(handsfree.data.hands,0,width,0,255);
            // background(0,0,255);

        //     fill(0,255,0);
        //  ellipse(handsfree.gesture.one.description[0][1], handsfree.gesture.one.description[0][1], 80, 80);

        
        let eitherHandOneX = handsfree.data.hands.landmarks[0][8].x || handsfree.data.hands.landmarks[1][8].x;
        let eitherHandOneY = handsfree.data.hands.landmarks[0][8].y || handsfree.data.hands.landmarks[1][8].y;

        let oneX = width - eitherHandOneX * width
        let oneY = eitherHandOneY * height

      fill(198,20,255);
      // ellipse(x, y, 80, 80);
      textSize(32);
  //  text('One sign yay', oneX, oneY);
      text('i am heathy, happy & radiant',width/3,height/2);


            
        }
  
        // console.log(' victory sign');
        
      })
  
      
    
   
  