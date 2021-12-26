// ThreeJS scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 30;

// Web GL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.AmbientLight(0x404040, 20);
scene.add(light);

// GLTF Loader
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('cats.gltf', (gltf) => {
    const root = gltf.scene;
    root.position.set(0,0,0);
    root.rotation.y = Math.PI * -0.3;
    root1 = root.getObjectByName('cats');
    scene.add(root);
})

//Orbit controls
const controls = new THREE.OrbitControls(camera);
controls.Zoom = true;
controls.Pan = true;
controls.Rotate = true;

// Animate function
const animate = function(){
    requestAnimationFrame(animate);
    if(root1){
        root1.rotation.y += 0.05;
    }
    controls.update();
    renderer.render(scene,camera);
};
animate();