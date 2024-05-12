import { Debug, Physics } from '@react-three/cannon'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import Plane from './objects/Plane';
import GolfBall from './objects/GolfBall';

function App() {

  return (
    <Canvas  style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#94ebd8"]} />
      <ambientLight intensity={0.1} />
      <spotLight
        position={[2.5, 5, 5]}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
      />
      <OrbitControls target-y={0.5} />
      <axesHelper args={[5]} />
      <Physics>
        {/* <Debug > */}
          <Plane />
          <GolfBall />
        {/* </Debug> */}
      </Physics>
      <Stats />
    </Canvas>
  )
}

export default App
