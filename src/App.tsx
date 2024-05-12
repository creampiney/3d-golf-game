import { Debug, Physics } from '@react-three/cannon'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import Plane from './objects/Plane';
import GolfBall from './objects/GolfBall';
import Wall from './objects/Wall';

function App() {

  return (
    <Canvas  style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#94ebd8"]} />
      <ambientLight intensity={0.2} />
      <spotLight
        position={[2.5, 5, 5]}
        angle={Math.PI / 4}
        penumbra={0.5}
        castShadow
      />
      <OrbitControls 
        minAzimuthAngle={-Math.PI / 6}
      />
      <axesHelper args={[5]} />
      <Physics defaultContactMaterial={{friction:0.05, restitution: 0.9}}>
        {/* <Debug > */}
          <Plane />
          <GolfBall position={[0, 2, 0]} />
          <Wall position={[9.5, 0.5, 0]} args={[1, 1, 20]}/>
          <Wall position={[-9.5, 0.5, 0]} args={[1, 1, 20]}/>
          <Wall position={[0, 0.5, 9.5]} args={[20, 1, 1]}/>
          <Wall position={[0, 0.5, -9.5]} args={[20, 1, 1]}/>
        {/* </Debug> */}
      </Physics>
      <Stats />
    </Canvas>
  )
}

export default App
