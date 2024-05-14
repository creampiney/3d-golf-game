import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
import GameScene from '../scenes/GameScene';
import Wall from '../objects/Wall';
const Game1: React.FC = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <OrbitControls minAzimuthAngle={-Math.PI / 6} />
      <axesHelper args={[5]} />
      <Physics defaultContactMaterial={{ friction: 0.05, restitution: 0.9 }}>
        {/* <Debug> */}
          <Wall position={[9.5, 0.5, 0]} args={[1, 1, 20]}/>
          <Wall position={[-9.5, 0.5, 0]} args={[1, 1, 20]}/>
          <Wall position={[0, 0.5, 9.5]} args={[20, 1, 1]}/>
          <Wall position={[0, 0.5, -9.5]} args={[20, 1, 1]}/>
          <GameScene />

        {/* </Debug> */}
      </Physics>
      <Stats />
    </Canvas>
  );
};

export default Game1;
