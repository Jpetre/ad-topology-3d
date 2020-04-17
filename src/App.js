import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';
import { KeyLight, FillLight, RimLight } from './components/Light';
import Camera from './components/Camera';
import Sphere from './components/Sphere';
import Stars from './components/Stars';
import StoreContext from './store/StoreContext';
import store from './store/Store'

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <StoreContext.Provider value={store}>
          <Camera position={[0, 0, 30]} />
          <KeyLight brightness={5.6} color="#ffbdf4" />
          <FillLight brightness={2.6} color="#bdefff" />
          <RimLight brightness={54} color="#fff" />
          <Sphere position={[4, 0, 0]} />
          <Sphere position={[-4, 0, 0]} />
          <Sphere position={[0, 4, -5]} />
          <Stars />
        </StoreContext.Provider>
      </Canvas>
    </div>
  );
}

export default App;
