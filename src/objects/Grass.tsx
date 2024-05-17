import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber"

interface GrassProps {
  instanceNumber: number;
}

const Grass: React.FC<GrassProps> = ({ instanceNumber }) => {
  const instancedMeshRef = useRef<THREE.InstancedMesh>();

  useFrame(() => {
    const dummy = new THREE.Object3D();

    for (let i = 0; i < instanceNumber; i++) {
      dummy.position.set(
        (Math.random() - 0.5) * 10,
        3,
        (Math.random() - 0.5) * 10
      );

      dummy.scale.setScalar(0.5 + Math.random() * 0.5);

      dummy.rotation.y = Math.random() * Math.PI;

      dummy.updateMatrix();
      instancedMeshRef.current?.setMatrixAt(i, dummy.matrix);
    }
    if(instancedMeshRef.current){
        instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return instancedMeshRef.current ? <primitive object={instancedMeshRef.current} /> : null;
};

export default Grass;
