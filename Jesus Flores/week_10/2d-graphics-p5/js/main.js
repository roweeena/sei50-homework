let drawCount = 0;
const circles = [];
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    noStroke();

    // strokeWeight(10);
    // stroke(0, 0, 255);
    // noStroke();
    //      x    y   w   h
    // fill(255, 0, 0);
    // ellipse(50, 50, 80, 80);

    // fill(255, 255, 0);
    // noFill();
    // stroke(255,255, 0);
    // ellipse(windowWidth/2, windowHeight/2, 150, 150);

    // noStroke();
    // fill(0, 0, 255);
    // rect(300, 400,  200, 200);


    // fill(20, 100, 70);
    // triangle(
    //     200, 100,
    //     150,300,
    //     400,300
    // )

    // stroke(255, 0,0);
    // strokeWeight(2);
    // line(100, 300, 600, 200);

    // point(500, 100);
    // stroke(0, 255, 0);
    // point(502, 100)
    colorMode(HSB, 255);
}
function draw(){

    // drawCount++;
    // if( drawCount > 255 ){
    //   drawCount = 0;
    // }
  
    // When halfway across the screen,
    // mouseFraction will be 0.5
    // const mouseFraction = mouseX / windowWidth;
    //
    // // 0.5 * 255 = 127
    // const hue = mouseFraction * 255;
  
    // NOT THE SAME as ES6 myArray.map();
    const hue = map(
      mouseX, // input value from input range,
      0, windowWidth, // input range min, max
      0, 255 // output range min, max
    );
  
  
    fill(
      // random(255), // Math.random() * 255,
      // random(255),
      // random(255),
  
      hue,
      // frameCount % 255, // Hue
      // 100 + (frameCount % 100),
      255,  // Saturation
      255,  // Brightness
  
      220   // "alpha channel" aka opacity
    );
  
    // Random size + position "screensaver" example
    // const circleSize = random(1000);
    // ellipse(
    //   random(windowWidth),  //windowWidth/2,
    //   random(windowHeight),  // windowHeight/2,
    //   circleSize,
    //   circleSize
    // );
  
  
    // SO THAT we can move "individual" circles around within the canvas
    // we need to
    // 1. record the details about each circle as its drawn, into an array
    // 2. every draw() loop, also loop through the array of circles and REDRAW them
  
    if( keyIsDown(SHIFT) ){
  
      const circleSize = 60;
  
      // ellipse(
      //   mouseX, // p5 updates these for us
      //   mouseY,
      //   circleSize,
      //   circleSize
      // );
  
      const newCircle = {
        xPos: mouseX,
        yPos: mouseY,
        size: circleSize,
        hue: hue
      };
  
      circles.push( newCircle );  // record the fact that a new circle was created
  
    } // if shift is held
    background(0)
    updateCircles();
  
  } // draw()
  
  
  function updateCircles(){
    // loop through the array of circles and REDRAW them
  
    // for( let i = 0; i < circles.length; i++ ){
    //   circles[i]
    // }
  
    // circles.forEach( c => {
    //   // draw c
    // });
  
    for( const circle of circles ){
        circle.xPos += 10;
        circle.yPos += 10;
      fill(circle.hue, 255, 255, 200);
      ellipse(circle.xPos, circle.yPos, circle.size);
    }
  
  
  } // updateCircles()


// dataSet = {
//     first: {
//       oneDown: {
//         arrayInDaniel1: [{name: 'Katarina', age: 45}],
//         arrayInDaniel2: [{name: 'Zelensky W', age: 45}],
//         arrayInDaniel3: [{name: 'Joachim', age: 45}],
//         arrayInDaniel4: [{name: 'Zelensky Y', age: 23}],
//       },
//       twoDown: {
//         objectInJesus: {
//           whereAmI: [
//             {firstKey: 'Fruit', secondKey: true},
//             {firstKey: 'Vegetable', secondKey: false},
//             {firstKey: 'Meat', secondKey: false},
//             {firstKey: 'Meat', secondKey: true},
//             {firstKey: 'Fruit', secondKey: false},
//           ]
//         }
//       }
//     }
//   }

  // get all of the people called Zelensky as Zelensky W and put all meat inside the first Zelensky Y and fruit inside the second Zelensky in a new object called belongings