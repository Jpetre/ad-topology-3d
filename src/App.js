import React, { useState } from 'react'
import { Canvas } from "react-three-fiber"
import './App.css'
import Camera from './components/Camera'
import Stars from './components/Stars'
import StoreContext from './store/StoreContext'
import store from './store/Store'
import Domain from './components/Domain'
import Trust from './components/Trust'
import TrustSwitch from './components/TrustSwitch'

const App = () => {
  const [showTrusts, setShowTrusts] = useState(false);
  return (
    <div className="App">
      <div className="trustSwitch">
        <TrustSwitch showTrusts={showTrusts} onChange={() => setShowTrusts(!showTrusts)} />
      </div>
      <Canvas>
        <StoreContext.Provider value={store}>
          <Camera />
          <ambientLight intensity={0.1} />
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
          {
            showTrusts &&
            <group>
              <Trust from={[-6, 0, 0]} to={[-2, 4, -5]} unknown />
              <Trust from={[-6, 0, 0]} to={[-9, 5, -3]} />
              <Trust from={[2, 0, 0]} to={[2, 4, -5]} unknown />
              <Trust from={[2, 0, 1]} to={[-2, 0, 1]} />
              <Trust from={[-2, -4, 5]} to={[-5, 0, 2]} />
              <Trust from={[6, 0, 0]} to={[5, 5, -2]} />
              <Trust from={[6, 0, 1]} to={[9, 5, -3]} />
              <Trust from={[-2, 0, 0]} to={[-3, 0, 2]} />
            </group> 
          }
          <Stars />
        </StoreContext.Provider>
      </Canvas>
    </div>
  );
}

export default App;
