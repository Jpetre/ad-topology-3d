import React, { useRef, useState, useContext, useEffect } from "react"
import { useLoader } from 'react-three-fiber'
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext'
import Text from './Text'
import * as THREE from "three/src/Three"
import img from '../assets/grey_stone.jpg'

const Sphere = props => {
  const store = useContext(StoreContext);
  const { position } = props;
  const [texture] = useLoader(THREE.TextureLoader, [img])

  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  let isActive = false;

  if (store.activePositions) {
    isActive = 
      position[0] === store.activePositions[0]
      & position[1] === store.activePositions[1]
      & position[2] === store.activePositions[2] 
      ? true
      : false
  }

  useEffect(() => {
    if(isActive) {
      console.log('setActive', position[0], position[1], position[2] + 10)
      store.setCameraPosition([position[0], position[1], position[2] + 10]);
    } else {
      if(!store.activePositions) {
        console.log('setActive defaultCameraPosition')
        store.setCameraPosition(store.defaultCameraPosition)
      }
      setHover(false)
    }
  }, [isActive, position, store]);

  return (
    <mesh
      {...props}
      ref={mesh}
      visible
      scale={isActive ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => isActive ? store.setInactive() : store.setActive(position)}
      onPointerOver={e => !isActive && setHover(true)}
      onPointerOut={e => !isActive && setHover(false)}
      rotation={[0, 0, 0]}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial 
        attach="material"
        roughness={0.75} 
        color={hovered ? "red" : "white"}
        map={texture}
      />
      <Text position={[-0.7, -1.5, 0]} children={props.name} />
    </mesh>
  );
};

export default observer(Sphere);