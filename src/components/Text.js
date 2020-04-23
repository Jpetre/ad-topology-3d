import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useLoader } from 'react-three-fiber'

const Text = ({ children, vAlign = 'center', hAlign = 'center', size = 1, color = '#000000', ...props }) => {
  const font = useLoader(THREE.FontLoader, '/Evogria_Regular.json')
  const config = useMemo(
    () => ({ font, size: 0.2, height: 0.1, curveSegments: 16}),
    [font]
  )

  return (
    <mesh {...props}>
      <textGeometry attach="geometry" args={[children, config]} />
      <meshNormalMaterial attach="material" color="red" />
    </mesh>
  )
}

export default Text
