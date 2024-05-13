import { Debug, Physics } from '@react-three/cannon'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stats } from '@react-three/drei';
import Plane from './objects/Plane';
import GolfBall from './objects/GolfBall';
import Wall from './objects/Wall';
import { KeyboardControls } from '@react-three/drei'

function App() {

  return (
    <KeyboardControls
      map={[
        { name: 'leftPolar', keys: ['ArrowLeft', 'a', 'A'] },
        { name: 'rightPolar', keys: ['ArrowRight', 'd', 'D'] },
        { name: 'upAzimuth', keys: ['ArrowUp', 'w', 'W'] },
        { name: 'downAzimuth', keys: ['ArrowDown', 's', 'S'] },
        { name: 'increasePower', keys: ['e', 'E'] },
        { name: 'decreasePower', keys: ['q', 'Q'] },
        { name: 'shoot', keys: ['Space'] },
      ]}
    >
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
        <Physics defaultContactMaterial={{friction: 0.05, restitution: 0.9}}>
          {/* <Debug > */}
            <Plane position={[0, 0, 0]} args={[18, 18]}/>
            <GolfBall position={[0, 0.1, 0]} />
            <Wall position={[9.5, 0.5, 0]} args={[1, 1, 20]}/>
            <Wall position={[-9.5, 0.5, 0]} args={[1, 1, 20]}/>
            <Wall position={[0, 0.5, 9.5]} args={[20, 1, 1]}/>
            <Wall position={[0, 0.5, -9.5]} args={[20, 1, 1]}/>
          {/* </Debug> */}
        </Physics>
        <Stats />
      </Canvas>
    </KeyboardControls>
    
  )
}

export default App
