import React, { useRef, useMemo, useCallback } from "react";
import * as THREE from "three/src/Three";

const Trust = (props) => {
  const { from, to, unknown = false} = props
  const ref = useRef()
  const points = useMemo(() => [new THREE.Vector3(...from), new THREE.Vector3(...to)], [])
  const onUpdate = useCallback(self => self.setFromPoints(points), [points])
  
  return (
    <line ref={ref}>
      <bufferGeometry attach="geometry" onUpdate={onUpdate} />
      <lineBasicMaterial attach="material" color={!unknown ? 'lightblue' : 'red'} linewidth={10} linecap={'round'} linejoin={'round'} />
    </line>
  );
};

export default Trust;
