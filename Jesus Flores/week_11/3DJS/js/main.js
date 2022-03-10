var app = app || {}

app.init = () => {
    app.scene = new THREE.Scene();
    app.camera = new THREE.PerspectiveCamera(
        60, 
        window.innerWidth / window.innerWidth, //Screen aspect ratio
        0.1, //near field: how close to the camera objects can be, before being ignored
        1000,// far field
    );  
    app.camera.position.x = -30;
    app.camera.position.y = 40;
    app.camera.position.z = 30;
    //app.camera.position(-30, 40, 30); 
    
    app.camera.lookAt( app.scene.position);

    //The renderer calcukates how to draw all the objects in the scene, based on
    //the camera prespective and the lighting; it renders it all down to a 
    //2D image to show in a <canvas>

    app.renderer = new THREE.WebGLRenderer();  //Use hardware acceleration
    app.renderer.setSize(window.innerWidth, window.innerHeight);
    app.renderer.setClearColor(0x000000);

    app.renderer.shadowMap.enabled = true;
    app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.getElementById('output').appendChild(app.renderer.domElement);

    app.axes = new THREE.AxesHelper(50  );
    app.scene.add( app.axes ); // Create an axis visualiser and add it to the scene.
    

    //Add cube

    app.cube = app.createCube(4,4,4);
    app.scene.add( app.cube);

    
    //Add Sphere

    app.sphere = app.createSphere();
    app.scene.add(app.sphere);

    //let there be light
    app.spotlight = app.createSpotlight();
    app.scene.add( app.spotlight )

    //add some cool shit
    // 1. add a 2D plane i.e sheet, aka 'the runway'
    app.plane = app.createPlane();
    app.scene.add( app.plane );
    app.renderer.render( app.scene, app.camera );

    //Use the mouse to control the camera perspective
    app.mouseControls = new THREE.OrbitControls( 
        app.camera,
        app.renderer.domElement
    )
    app.animate();

};

app.animate = () => {
   app.renderer.render(app.scene, app.camera); 
   requestAnimationFrame( app.animate );
}
 

window.onload = app.init();