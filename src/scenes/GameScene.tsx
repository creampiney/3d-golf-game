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

const GameScene = () => {
  const handleBallEnterHole = () => {
    window.location.href = '/reset';
  };

  return (
    <Suspense fallback={null}>
      <Environment files="../../public/textures/envmap.hdr" background={"both"}/>
      <fog attach="fog" args={[0xcccccc,1000]} near={10}/>
      <fogExp2 args={[0xcccccc,1000]} />
      <spotLight
        position={[100, 100, 100]}
        angle={Math.PI / 4}
        penumbra={0.5}
        color={0xff9999}
        intensity={50000}
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
        color={0x00ff00}
        intensity={30000}
        castShadow
      />
      <GolfBall/>
      {/* <Block color="red" args={[3, 2, 2]} position={[3, 0, 0]} /> */}
      {/* <PlainPlane position={[0, 0, 0]} args={[100, 100]} color={[0.5,0.5,0.1]}/> */}
      <Hole position={[5, -0.5, 0]} onBallEnter={handleBallEnterHole} />
      <Ground/>
    </Suspense>
  )
}

export default GameScene