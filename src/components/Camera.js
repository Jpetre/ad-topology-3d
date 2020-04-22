import React, { useRef, useEffect, useContext } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext';

extend({ OrbitControls })

const Camera = props => {
  const store = useContext(StoreContext);
  const {
    camera,
    gl
  } = useThree()

  const cameraRef = useRef();
  const orbitControlRef = useRef();

  const { setDefaultCamera } = useThree();

  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(cameraRef.current), [setDefaultCamera]);
  
  useEffect(() => {
    if(store.cameraPosition) {
      console.log('orbitControlRef', orbitControlRef);
      orbitControlRef.current.update();
    }
  }, [store.cameraPosition])

  // Update it every frame
  useFrame(() => cameraRef.current.updateProjectionMatrix());

  return (
    <>
      <perspectiveCamera position={store.cameraPosition} ref={cameraRef} {...props} />
      <orbitControls ref={orbitControlRef} args={[camera, gl.domElement]} />
    </>
  );
};

export default observer(Camera);
