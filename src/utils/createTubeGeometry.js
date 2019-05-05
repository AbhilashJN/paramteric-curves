const createTubeGeometry=(numSides=8,subdivisions=50,openEnded=false)=>{
    const radius=1;
    const length=1;
    const baseGeometry = new THREE.CylinderGeometry(radius,radius,length,numSides,subdivisions,openEnded);
    baseGeometry.rotateZ(Math.PI/2);

    const tmpVec = new THREE.Vector2();
    const xPositions = [];
    const angles = [];
    const vertices = baseGeometry.vertices;


    baseGeometry.faces.forEach((face,i)=>{
        const {a,b,c} = face;
        const v0 = vertices[a];
        const v1 = vertices[b];
        const v2 = vertices[c];
        const verts = [v0,v1,v2];

        verts.forEach((v,j)=>{
            tmpVec.set(v.y,v.z).normalize();
            const angle = Math.atan2(tmpVec.y,tmpVec.x);
            angles.push(angle);
            xPositions.push(v.x)
        });
    });

    const posArray = new Float32Array(xPositions);
    const angleArray = new Float32Array(angles);

    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(posArray,1));
    geometry.addAttribute('angle', new THREE.BufferAttribute(angleArray,1));
    baseGeometry.dispose();
    return geometry;
}

module.exports= createTubeGeometry;