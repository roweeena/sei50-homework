let drawCount = 0;
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
    const mouseFraction = mouseX / windowWidth;
    //const hue = mouseFraction * 255;
    const hue = map(mouseX,0, windowWidth, 0,255)
    fill(
        // random(255), 
        // random(255), 
        // random(255),
        // 220
        //100 + (drawCount % 255)  ,
        hue,
        255,
        255,
        254

    )
    if(keyIsDown(SHIFT)){
        const circle = 50;
       
        ellipse(    
            mouseX,
            mouseY,
            circle, 
            circle);

    }
}