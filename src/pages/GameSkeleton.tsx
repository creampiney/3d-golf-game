import { Canvas } from '@react-three/fiber';
import { KeyboardControls, OrbitControls, Stats } from '@react-three/drei';
import { Physics, Debug } from '@react-three/cannon';
import Wall from '../objects/Wall';
import Game1 from '../scenes/Game1';
import { useGlobalStatusStore } from '../states/globalStatus';
import PowerBar from '../components/PowerBar';
import Game2 from '../scenes/Game2';

const GameSkeleton = ({level}: {level: number}) => {

  const [isStationary, power] = useGlobalStatusStore((state) => [
    state.isStationary,
    state.power,
  ])


  return (
    <div className="w-screen h-screen relative">
      {
        isStationary && (
          <div className="absolute bottom-0 left-0 z-10 flex flex-col justify-center align-center bg-slate-300 text-slate-700 opacity-70 gap-2 px-2 py-2">
            <div>Power: {power}</div>
            <PowerBar value={power} />
          </div>
        )
      }
      {
        isStationary && (
          <div className="absolute bottom-0 right-0 z-10 flex flex-col justify-center align-center bg-slate-300 text-slate-700 opacity-70 gap-2 px-2 py-2">
            <div>Press <kbd>A</kbd> or <kbd>D</kbd> to change direction</div>
            <div>Press <kbd>W</kbd> or <kbd>S</kbd> to change angle</div>
            <div>Press <kbd>Q</kbd> or <kbd>E</kbd> to change power</div>
            <div>Press <kbd>Space</kbd> to shoot</div>
          </div>
        )
      }
    
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
          <OrbitControls minAzimuthAngle={0} />
          <axesHelper args={[5]} />
          <Physics defaultContactMaterial={{ friction: 0.05, restitution: 0.9 }}>
            {/* <Debug> */}

              {
                (level == 1) && <Game1 />
              }
              {
                (level == 2) && <Game2 />
              }

            
            {/* </Debug> */}
          </Physics>
          <Stats />
        </Canvas>
      </KeyboardControls>
    </div>
  );
};

export default GameSkeleton;
