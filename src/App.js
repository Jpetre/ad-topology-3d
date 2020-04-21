import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';
import { KeyLight, FillLight, RimLight } from './components/Light';
import Camera from './components/Camera';
import Sphere from './components/Sphere';
import Stars from './components/Stars';
import StoreContext from './store/StoreContext';
import store from './store/Store';
import Box from './components/Box';

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <StoreContext.Provider value={store}>
          <Camera />
          <pointLight distance={60} intensity={2} color="lightblue" />
          <Sphere position={[4, 0, 0]} />
          <Box position={[2, 0, 0]} />
          <Box position={[2, 0, 1]} />
          <Box position={[3, 0, 2]} />
          <Box position={[4, 0, 2]} />
          <Box position={[5, 0, 2]} />
          <Box position={[6, 0, 1]} />
          <Box position={[6, 0, 0]} />
          <Sphere position={[-4, 0, 0]} />
          <Box position={[-6, 0, 0]} />
          <Box position={[-2, 0, 0]} />
          <Box position={[-4, 0, 2]} />
          <Box position={[-3, 0, 2]} />
          <Sphere position={[0, 4, -5]} />
          <Sphere position={[0, -4, 5]} />
          <Stars />
        </StoreContext.Provider>
      </Canvas>
    </div>
  );
}

export default App;
