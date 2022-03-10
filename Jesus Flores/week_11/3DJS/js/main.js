var app = app || {}

app.init = () => {
    app.scene = new THREE.Scene();
    app.camera = new THREE.PerspectiveCamera(
        60, 
        window.innerWidth / window.innerWidth, //Screen aspect ratio
        0.1, //near field: how close to the camera objects can be, before being ignored
        1000,// far field
        );

}


window.onload = app.init();