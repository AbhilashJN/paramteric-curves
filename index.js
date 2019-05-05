
const create = require('./src/utils/createTubes')

const w = window.innerWidth ;
const h = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70,w/h,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(0, 20, 20);
camera.lookAt( 0, 0, 0 );
const cylinder = create();
scene.add(cylinder);
// renderer.render(scene,camera)
const animate = ()=>{
    cylinder.material.uniforms.time.value+=0.1
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate();