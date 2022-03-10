var app = app || {}

app.createPlane = () => {
    //3D objects are built from two elements 
    //1. a geometry, aka a shape
    //2. a material, aka a surface or texture/covering
    
    // These are combined into a final 'mesh'

    const planeGeometry = new THREE.PlaneGeometry(120 , 20);
    const planeMaterial = new THREE.MeshLambertMaterial({
        color: "OxCCCCCC"
    })
    
    // Combine into a mesh:
    const plane = new THREE.Mesh(planeGeometry,  planeMaterial);
    plane.position.set(15, 0, 0); //x y z 
    plane.rotation.x = -0.5 * Math.PI;
    plane.receiveShadow = true;
    
    return plane
}

//Crate spot light
app.createSpotlight = () => {
    const light = new THREE.SpotLight(0xFFFFFF)
    light.position.set(-10,  60, 10);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.width = 2048;   
    
    return light
}

app.createCube = (width, depth, height) => {
    const cubeGeometry = new THREE.BoxGeometry(width, depth, height);
    const cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xCF8E00,
        //wireframe: true
    })

    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-4, 15, 0);
    cube.castShadow = true ;
    return cube;
}

app.createSphere = () => {
   const sphereGeometry = new THREE.SphereGeometry(
       6, //radius
       40,// number of triangle segments on the X axis
       40,// same for Y axis
   );
   const sphereMaterial = new THREE.MeshPhongMaterial({      
       color: 0x039BE5,
   })
   const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
   sphere.position.set(20, 6, 2);
   sphere.castShadow = true;
   return sphere;
}