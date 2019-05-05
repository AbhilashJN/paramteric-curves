#extension GL_OES_standard_derivatives : enable
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vViewPosition;

#pragma glslify: faceNormal = require('glsl-face-normal');

void main () {
  vec3 normal = vNormal;
  #ifdef FLAT_SHADED
    normal = faceNormal(vViewPosition);
  #endif

  float diffuse = normal.y * 0.5 + 0.5;
  gl_FragColor = vec4(vec3(diffuse), 1.0);
}