import React from 'react';
import { Canvas } from "react-three-fiber";
import './App.css';
import { KeyLight, FillLight, RimLight } from './components/Light';
import Camera from './components/Camera';
import Stars from './components/Stars';
import StoreContext from './store/StoreContext';
import store from './store/Store';
import Domain from './components/Domain'

const App = () => {
  return (
    <div className="App">
      <Canvas>
        <StoreContext.Provider value={store}>
          <Camera />
          <pointLight distance={60} intensity={2} color="lightblue" />
          <Domain 
            position={[4, 0, 0]}
            name='Mulan.com' 
            directories={['us.mulan.com', 'fr.mulan.com', 'cn.mulan.com', 'en.mulan.com']}
          />
          <Domain 
            position={[-4, 0, 0]}
            name='Baloo.com' 
            directories={['us.baloo.com', 'fr.baloo.com', 'fx.baloo.com', 'en.baloo.com', 'baloo.fr', 'baloo.es']}
          />
          <Domain 
            position={[0, 4, -5]}
            name='Tigrou.com' 
            directories={['us.tigrou.com', 'fr.tigrou.com']}
          />
          <Domain 
            position={[0, -4, 5]}
            name='Panpan.com' 
            directories={['us.panpan.com']}
          />
          <Domain 
            position={[-7, 5, -3]}
            name='merida.com' 
            directories={['us.merida.com']}
          />
          <Domain 
            position={[7, 5, -3]}
            name='cloud.com' 
            directories={['us.cloud.com', 'fx.cloud.com', 'cn.cloud.com']}
          />
          <Stars />
        </StoreContext.Provider>
      </Canvas>
    </div>
  );
}

export default App;
