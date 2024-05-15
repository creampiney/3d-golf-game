import {
    Environment,
    Sphere,
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
  
  const Game3 = () => {
    const navigate = useNavigate();
  
    const handleBallEnterHole = () => {
      const collisionSound = new Audio('/sounds/reach_hole.mp3');
      collisionSound.play();
      setTimeout(() => {
        window.location.href = '/reset';
      }, 1000); // Delay for 1 seconds
    };
    useEffect(() => {
      const audio = new Audio('/sounds/select_link_kirby.mp3');
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
        
        <spotLight
          position={[0, 20, 0]}
          color={0x00ffff}
          intensity={500}
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
  
        <GolfBall/>
        <Hole position={[-15, 0.1, -15]} onBallEnter={handleBallEnterHole} />
        <Flag position={[-15.5,0,-15]}/>
        
        <SphereLight positions={[-10, 2, -10]} radius={0.1} color={[1, 1, 1]} />


        <Block color={COLORS.GREEN} args={[8, 1, 22]} positions={[0, -0.4, -8]} />
        <Block color={COLORS.GREEN} args={[14, 1, 8]} positions={[-11, -0.4, -15]} />
        
        <Block color={COLORS.SOLF_TURTLE} args={[8.5, 2, 22.5]} positions={[0, -1, -8]} />
        <Block color={COLORS.SOLF_TURTLE} args={[14.5, 2, 8.5]} positions={[-11, -1, -15]} />
        <SphereLight positions={[-3, 2, 3]} radius={0.5} color={[0, 0, 1]} />
        <CylinderBlock color={COLORS.TURTLE} position={[-7,-1,-7]} args={[18,1.5]}/>
        <hemisphereLight position={[0,5,0]} />
        <Block color={COLORS.PLAIN_PLANE} args={[40, 3, 40]} positions={[-7, -2, -7]} />
        <Block color={COLORS.TURTLE} args={[35, 6, 35]} positions={[-7, -5, -7]} />
        <Block color={COLORS.PLAIN_PLANE} args={[40, 3, 40]} positions={[-7, -8, -7] } />
  
      </Suspense>
    )
  }
  
  export default Game3