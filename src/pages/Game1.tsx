import React from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, OrbitControls, Stats } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
import GameScene from '../scenes/GameScene';
import Wall from '../objects/Wall';

const Game1: React.FC = () => {
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
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows camera={{ position: [10, 10, 10], fov: 30 }}>
        <OrbitControls minAzimuthAngle={-Math.PI / 6} />
        <axesHelper args={[5]} />
        <Physics defaultContactMaterial={{ friction: 0.05, restitution: 0.9 }}>
          {/* <Debug> */}
            <GameScene />
          {/* </Debug> */}
        </Physics>
        <Stats />
      </Canvas>
    </KeyboardControls>
  );
};

export default Game1;
