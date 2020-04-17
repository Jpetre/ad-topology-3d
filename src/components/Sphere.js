import React, { useRef, useState, useContext } from "react";
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext';

const Sphere = props => {
  const store = useContext(StoreContext);
  console.log('store sphere', store.likesCount);

  const mesh = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  /*useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.z += 0.01;
      mesh.current.rotation.x += 0.01;
    }
    if (hovered && active) {
      mesh.current.rotation.y += 0.02;
      mesh.current.rotation.x += 0.06;
    }
  });*/

  return (
    <mesh
      {...props}
      ref={mesh}
      visible
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}
      rotation={[0, 0, 0]}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        transparent
        color={hovered ? "red" : "grey"}
      />
    </mesh>
  );
};

export default observer(Sphere);