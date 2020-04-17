import React, { useRef, useEffect, useContext } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { observer } from 'mobx-react'
import StoreContext from '../store/StoreContext';

const Camera = props => {
  const store = useContext(StoreContext);

  const ref = useRef();

  const { setDefaultCamera } = useThree();

  // Make the camera known to the system
  useEffect(() => void setDefaultCamera(ref.current), [setDefaultCamera]);

  // Update it every frame
  useFrame(() => ref.current.updateMatrixWorld());

  return <perspectiveCamera position={store.cameraPosition} ref={ref} {...props} />;
};

export default observer(Camera);
