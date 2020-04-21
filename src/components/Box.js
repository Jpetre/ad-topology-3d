import React, { useRef, useState } from 'react'
import { useFrame, Dom } from 'react-three-fiber'

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.1, 0.1, 0.1]}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      {
        hovered && 
        <Dom>
          <div className="panel">Bonjour</div>
        </Dom>
      }
      <tetrahedronBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? 'red' : 'white'} />
    </mesh>
  )
}

export default Box