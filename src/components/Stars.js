import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three/src/Three";

const Stars = () => {
  let group = useRef();
  let theta = 0;
  useFrame(() => {
    const r = Math.sin(THREE.Math.degToRad((theta += 0.01)));
    group.current.rotation.set(r, r, r);
  });
  const coords = new Array(2000)
    .fill()
    .map(i => [
      Math.random() * 800 - 400,
      Math.random() * 800 - 400,
      Math.random() * 800 - 400
    ]);
  return (
    <group ref={group}>
      {coords.map(([p1, p2, p3], i) => (
        <mesh key={i} position={[p1, p2, p3]}>
          <sphereBufferGeometry attach="geometry" args={[0.2, 16, 16]} />
          <meshBasicMaterial attach="material" color="white" />
        </mesh>
      ))}
    </group>
  );
};

export default Stars;