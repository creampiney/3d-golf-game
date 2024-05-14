import {
  Environment,
} from "@react-three/drei";
import React, { UseState, Suspense} from "react";
import Ground from "./Ground"
import Block from "../objects/Block";
import PlainPlane from "../objects/PlainPlane";
import GolfBall from "../objects/GolfBall";
import { Track } from "../objects/Track";
import Hole from "../objects/Hole";
import CylinderBlock from "../objects/CylinderBlock";
import { Flag } from "../objects/Flag";
import { COLORS } from "../constant"
const GameScene = () => {
  const handleBallEnterHole = () => {
    window.location.href = '/reset';
  };

  return (
    <Suspense fallback={null}>
      <Environment files="/textures/envmap.hdr" background={"both"}/>
      <fog attach="fog" args={[0xcccccc,100000]} near={1}/>
      <fogExp2 args={[0xcccccc,1000]}/>
      <spotLight
        position={[100, 100, 100]}
        angle={Math.PI / 4}
        penumbra={0.5}
        color={0xffff99}
        intensity={30000}
        castShadow
      />
      <spotLight
        position={[100, 500, -100]}
        angle={Math.PI / 4}
        penumbra={0.5}
        color={0x0000ff}
        intensity={100000}
        castShadow
      />
      <spotLight
        position={[-100, 50, -100]}
        angle={Math.PI / 4}
        penumbra={0.5}
        color={0xff0000}
        intensity={30000}
        castShadow
      />
      <GolfBall position={[3,6,3]}/>
      <Hole position={[-24, 5, -24]} onBallEnter={handleBallEnterHole} />     
      
      <CylinderBlock color={COLORS.SOLF_TURTLE} position={[-25,2.5,-25]} args={[10,5]}/>
      <CylinderBlock color={COLORS.TURTLE} position={[-20,1.5,-20]} args={[15,3]}/>
      <Block color={COLORS.SALMON} args={[5, 5, 25]} positions={[3, 0, -5]} />
      <Block color={COLORS.RED_SALMON} args={[5, 4, 26]} positions={[3, 0, -4]} />
      
      <Block color={COLORS.RED_SALMON} args={[5, 8, 5]} positions={[-24, 0, -16]} />
      <Block color={COLORS.SALMON} args={[28, 7, 5]} positions={[-13, 0, -15]} />
      <Block color={COLORS.RED_SALMON} args={[30, 6, 5]} positions={[-12, 0, -15]} />

      <CylinderBlock color={COLORS.SOFT_TURTLE} position={[-15,2.5,0]} args={[2,5]}/>
      <CylinderBlock color={COLORS.SALMON} position={[-15,2.7,0]} args={[5,2]}/>
      <CylinderBlock color={COLORS.SOFT_TURTLE} position={[-15,2.7,0]} args={[7,1]}/>
      
      <CylinderBlock color={COLORS.SOFT_TURTLE} position={[-2,3,-20]} args={[2,5]}/>


      <CylinderBlock color={COLORS.TURTLE} position={[-5,2.5,-5]} args={[2,5]}/>
      <CylinderBlock color={COLORS.SOLF_TURTLE} position={[-5,2.5,-5]} args={[4,3]}/>
      <CylinderBlock color={COLORS.TURTLE} position={[-5,2.5,-5]} args={[6,2]}/>
      
      <Block color={COLORS.PLAIN_PLANE} args={[50, 3, 50]} positions={[0, 0, 0]} />
      
      <Flag position={[-25, 5, -25]} />
      <PlainPlane position={[-25, 0, -25]} args={[200, 200]} color={COLORS.PLAIN_PLANE}/>
      <Ground/>
    </Suspense>
  )
}

export default GameScene