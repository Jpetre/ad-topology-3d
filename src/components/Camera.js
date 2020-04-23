import React, { useRef, useEffect, useContext, useState } from "react";
import { useFrame, useThree, extend } from "react-three-fiber";
import { useSpring } from "react-spring"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext';

extend({ OrbitControls })

const initialCameraZ = 1000

const Camera = () => {
  const store = useContext(StoreContext)
  const cameraRef = useRef()
  const controlsRef = useRef()
  const [hyperAnimFinished, sethyperAnimFinished] = useState(false)

  const { setDefaultCamera, camera, gl } = useThree()

  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(cameraRef.current), [setDefaultCamera])

  const { z } = useSpring({
    from: { z: initialCameraZ },
    z: store.defaultCameraPosition[2],
    config: {
      mass: 0.2,
      tension: 80,
      friction: 20
    },
    onRest: () => sethyperAnimFinished(true)
  })

  // Update it every frame
  useFrame(() => {
    if (camera.position.z > 20 && !hyperAnimFinished) camera.position.z = z.value
    camera.updateMatrixWorld()
    controlsRef.current.update()
  });

  return (
    <>
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
      <perspectiveCamera 
        ref={cameraRef} 
        position={hyperAnimFinished ? store.cameraPositionComputed : [0, 0, initialCameraZ]} 
      />
    </>
  );
};

export default observer(Camera);
