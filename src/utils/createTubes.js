const createTubeGeometry=require('./createTubeGeometry')
const glslify = require('glslify');
const path = require('path');
const vert = glslify('../shaders/tube.vert',__dirname)
const frag = glslify('../shaders/tube.frag',__dirname);
const numSides=8;
const subdivisions= 50

const createTube = ()=>{
const material = new THREE.RawShaderMaterial({
    vertexShader: vert,
    fragmentShader: frag,
    side: THREE.FrontSide,
    extensions:{
        derivatives:true
    },
    defines:{
        lengthSegments: subdivisions.toFixed(1),
        FLAT_SHADED: false
    },
    uniforms:{
        thickness:{type:'f',value:1},
        time:{type:'f', value:0},
        radialSegments:{type:'f', value: numSides}
    }
});
const geometry= createTubeGeometry();
geometry.attributes.position.needsUpdate = true;
const mesh = new THREE.Mesh(geometry, material);
mesh.frustumCulled=false;
return mesh;
}

module.exports= createTube