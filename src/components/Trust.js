import React, { useRef } from "react";
import * as THREE from "three/src/Three";
import { extend } from "react-three-fiber";


const Trust = (props) => {
  const mesh = useRef();

  return (
    <mesh
      ref={mesh}
      visible
      position={[1, 2, 3]} 
      rotation={[0, 0, 0]}
    >
      <quadraticBezierCurve3 attach="geometry" args={new THREE.Vector3( -10, 0, 0 ), new THREE.Vector3( 20, 15, 0 ), new THREE.Vector3( 10, 0, 0 )} />
      <lineBasicMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

export default Trust;
