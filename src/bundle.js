(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const create = require('./src/utils/createTubeGeometry')

const w = window.innerWidth ;
const h = window.innerHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70,w/h,0.1,1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.set(cols/2*scl, -700, 400);
camera.lookAt( cols/2*scl, 0, 0 );
// const cylinder = create();
// scene.add(cylinder);

const animate = ()=>{
    requestAnimationFrame(animate);
    renderer.render(scene,camera)
}
animate();
},{"./src/utils/createTubeGeometry":2}],2:[function(require,module,exports){
const createTubeGeometry=(numSides=8,subdivisions=50,openEnded=false)=>{
    const radius=1;
    const length=1;
    const geometry = new THREE.CylinderGeometry(radius,length,numSides,subdivisions,openEnded)
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    var cylinder = new THREE.Mesh( geometry, material );
    return cylinder;
}

module.exports= createTubeGeometry;
},{}]},{},[1]);
