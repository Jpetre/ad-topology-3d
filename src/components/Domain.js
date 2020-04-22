import React from 'react'
import Sphere from './Sphere'
import Directory from './Directory'

const Domain = (props) => {
  const { name, directories, position } = props
  const positions = [
    [position[0] - 2, position[1], position[2]],
    [position[0] + 2, position[1], position[2]],
    [position[0] - 2, position[1], position[2] + 1],
    [position[0] + 2, position[1], position[2] + 1],
    [position[0] - 1, position[1], position[2] + 2],
    [position[0] + 1, position[1], position[2] + 2],
  ]

  const renderDirectories = () => 
    directories.map((directory, index) => 
      <Directory key={`${directory}-${index}`} position={positions[index]} name={directory} />
    )
  return (
    <>
      <Sphere position={position} name={name} />
      <group>
        { renderDirectories() }
      </group>
    </>
  )
}

export default Domain