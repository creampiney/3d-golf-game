import {
    Environment,
} from "@react-three/drei";
import { Suspense,useEffect} from "react";
import Block from "../objects/Block";
import GolfBall from "../objects/GolfBall";
import Hole from "../objects/Hole";
import Flag from "../objects/Flag";
import CylinderBlock from "../objects/CylinderBlock";
import { COLORS } from "../constant"
import { useNavigate } from "react-router-dom";
import SphereLight from "../objects/SphereLight";
import WaterComponent from "../objects/WaterComponent";
import ResetPlane from "../objects/ResetPlane";

  const Game3 = () => {
    const navigate = useNavigate();
  
    const handleBallEnterHole = () => {
      const collisionSound = new Audio('/sounds/reach_hole.mp3');
      collisionSound.play();
      setTimeout(() => {
        window.location.href = '/reset';
      }, 1000); // Delay for 1 seconds
    };
    const handleBallFall = () => {
      setTimeout(() => {
        window.location.href = '/game3';
      }, 1000); // Delay for 1 seconds
    };
   
    
    useEffect(() => {
      const audio = new Audio('/sounds/petrichor.mp3');
      const handleEnded = () => {
        audio.currentTime = 0; // Reset the audio to the start position
        audio.play(); // Replay the audio
      };
  
      audio.addEventListener('ended', handleEnded);
      audio.play();
  
      return () => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to start position
      };
    }, []);
    return (
      <Suspense fallback={null}>
        <Environment files="/textures/night_sky_env.hdr" background={true}/>
        <fog attach="fog" args={[0xcccccc,1000]} near={10}/>
        <fogExp2 args={[0xcccccc,1000]} />
        
        <directionalLight
          position={[0, 20, 0]}
          color={0x99bbff}
          intensity={3}
          castShadow
        />
        <directionalLight
          position={[0, 0, 1]}
          color={0x0000ff}
          intensity={4}
          castShadow
        />
        <directionalLight
          position={[1, 0, 0]}
          color={0xff00ff}
          intensity={4}
          castShadow
        />
  
        <GolfBall position={[23,10,23]}/>
        <Hole position={[-23, 2, -23]} onBallEnter={handleBallEnterHole} />
        <Flag position={[-23.5,2,-23.5]}/>
        <ResetPlane position={[0,0.1,0]} args={[50,0.1,50]} onBallFall={handleBallFall}/>
        
        <SphereLight positions={[-24.5, 5, 24.5]} radius={2} color={[0, 1, 0]} />
        <SphereLight positions={[24.5, 5, -24.5]} radius={2} color={[0, 1, 0]} />
        
        <WaterComponent position={[0,1,0]} args={[50,6,50]} />
        <Block color={COLORS.PLAIN_PLANE} args={[15, 3 , 15]} positions={[23, 0, 23]} />
        <Block color={COLORS.PLAIN_PLANE} args={[14.5, 4 , 14.5]} positions={[23, 0, 23]} />
        
        <Block color={COLORS.PLAIN_PLANE} args={[15, 3 , 15]} positions={[-23, 0, -23]} />
        <Block color={COLORS.PLAIN_PLANE} args={[14.5, 4 , 14.5]} positions={[-23, 0, -23]} />

        <Block color={COLORS.PLAIN_PLANE} args={[2, 4 , 50]} positions={[25, 0, 0]} />
        <Block color={COLORS.PLAIN_PLANE} args={[50, 4 , 2]} positions={[0, 0, 25]} />
        <Block color={COLORS.PLAIN_PLANE} args={[50, 4 , 2]} positions={[0, 0, -25]} />
        <Block color={COLORS.PLAIN_PLANE} args={[2, 4 , 50]} positions={[-25, 0, 0]} />
        
        <Block color={COLORS.PLAIN_PLANE} args={[2.5, 3 , 50.5]} positions={[25, 0, 0]} />
        <Block color={COLORS.PLAIN_PLANE} args={[50.5, 3 , 2.5]} positions={[0, 0, 25]} />
        <Block color={COLORS.PLAIN_PLANE} args={[50.5, 3 , 2.5]} positions={[0, 0, -25]} />
        <Block color={COLORS.PLAIN_PLANE} args={[1.5, 3 , 50.5]} positions={[-25, 0, 0]} />
        
        {/* <Block color={COLORS.PLAIN_PLANE} args={[50.5, 4 , 50.5]} positions={[0, 0, 0]} />
        <Block color={COLORS.PLAIN_PLANE} args={[51, 3 , 51]} positions={[0, 0, 0]} /> */}

        <CylinderBlock color={COLORS.GREEN} position={[-15, 1, -13]} args={[2, 0.2]} />
        <CylinderBlock color={COLORS.DARK_GREEN} position={[-10, 1, -5]} args={[1.5, 0.2]} />
        <CylinderBlock color={COLORS.DARK_GREEN} position={[5, 1, -7]} args={[4, 0.2]} />
        <CylinderBlock color={COLORS.GREEN} position={[-13, 1, 5]} args={[1.5, 0.2]} />
        <CylinderBlock color={COLORS.DARK_GREEN} position={[-15, 1, 10]} args={[3, 0.2]} />
        <CylinderBlock color={COLORS.GREEN} position={[-1, 1, 18]} args={[2, 0.2]} />
        <CylinderBlock color={COLORS.GREEN} position={[10, 1, 12]} args={[3, 0.2]} />
        <CylinderBlock color={COLORS.DARK_GREEN} position={[15, 1, 15]} args={[2, 0.2]} />
        <CylinderBlock color={COLORS.GREEN} position={[13, 1, -10]} args={[1.5, 0.2]} />
        <CylinderBlock color={COLORS.DARK_GREEN} position={[17, 1, -5]} args={[3, 0.2]} />







        <Block color={COLORS.PLAIN_PLANE} args={[70, 3, 70]} positions={[0, -2, 0]} />
        <Block color={COLORS.TURTLE} args={[65, 6, 65]} positions={[0, -5, 0]} />
        <Block color={COLORS.PLAIN_PLANE} args={[70, 3, 70]} positions={[0, -8, 0] } />
  
      </Suspense>
    )
  }
  
  export default Game3