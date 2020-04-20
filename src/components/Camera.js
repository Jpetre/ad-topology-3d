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

  const ref = useRef();

  const { setDefaultCamera } = useThree();

  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera]);

  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());

  return (
    <>
      <perspectiveCamera position={store.cameraPosition} ref={ref} {...props} />
      <orbitControls args={[camera, gl.domElement]} />
    </>
  );
};

export default observer(Camera);
