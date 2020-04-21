import React, { useRef, useState, useContext, useEffect, Suspense } from "react";
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext';
import Text from './Text';

const Sphere = props => {
  const store = useContext(StoreContext);
  const { position } = props;

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
      store.setCameraPosition([position[0], position[1], position[2] + 10]);
    } else {
      store.setCameraPosition(store.defaultCameraPosition)
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
        transparent
        color={hovered ? "red" : "grey"}
      />
      <Suspense fallback={null}>
        <Text position={[-0.5, -1.5, 0]} children="REACT" />
      </Suspense>
      {
        isActive &&
        <pointLight distance={10} intensity={6} color="red" position={position}/>
      }
    </mesh>
  );
};

export default observer(Sphere);