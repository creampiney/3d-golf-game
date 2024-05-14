import {
  Environment,
} from "@react-three/drei";
import React, { Suspense } from "react";
import Ground from "./Ground"
import Block from "../objects/Block";
import PlainPlane from "../objects/PlainPlane";
import GolfBall from "../objects/GolfBall";
import { Track } from "../objects/Track";
import Hole from "../objects/Hole";
import GroundTile from "./GroundTile";
import Wall from "../objects/Wall";
import Flag from "../objects/Flag";
import CylinderBlock from "../objects/CylinderBlock";
import { COLORS } from "../constant"
const Game1 = () => {
  const handleBallEnterHole = () => {
    window.location.href = '/reset';
  };

  return (
    <Suspense fallback={null}>
      <Environment files="/textures/envmap.hdr" background={true}/>
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
        position={[-100, 100, -100]}
        angle={Math.PI / 4}
        penumbra={0.5}
        color={0x00ff00}
        intensity={30000}
        castShadow
      />

      <GolfBall/>
      <Hole position={[-15, 0, -15]} onBallEnter={handleBallEnterHole} />
      <Flag position={[-15.5,0,-15]}/>
      
      <Block color={COLORS.GREEN} args={[8, 1, 22]} positions={[0, -0.4, -8]} />
      <Block color={COLORS.GREEN} args={[14, 1, 8]} positions={[-11, -0.4, -15]} />
      
      {[-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[e, 0.3, 2.5]} args={[1, 1, 1]} />
      ))}
      {[1.5, 0.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[-3.5, 0.3, e]} args={[1, 1, 1]} />
      ))}
      {[
        1.5, 0.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5, -13.5,
        -14.5, -15.5, -16.5, -17.5, -18.5,
      ].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[3.5, 0.3, e]} args={[1, 1, 1]} />
      ))}
      {[-3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5, -13.5, -14.5, -15.5, -16.5, -17.5].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[e, 0.3, -11.5]} args={[1, 1, 1]} />
      ))}
      {[
        0.5, 1.5, 2.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5,
        -13.5, -14.5, -15.5, -16.5, -17.5,
      ].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[e, 0.3, -18.5]} args={[1, 1, 1]} />
      ))}
      {[-12.5, -13.5, -14.5, -15.5, -16.5, -17.5].map((e) => (
        <Block key={e} color={COLORS.PLAIN_PLANE} positions={[-17.5, 0.3, e]} args={[1, 1, 1]} />
      ))}
      <Block color={COLORS.SOLF_TURTLE} args={[8.5, 2, 22.5]} positions={[0, -1, -8]} />
      <Block color={COLORS.SOLF_TURTLE} args={[14.5, 2, 8.5]} positions={[-11, -1, -15]} />

      <CylinderBlock color={COLORS.TURTLE} position={[-7,-1,-7]} args={[18,1.5]}/>
      <Block color={COLORS.PLAIN_PLANE} args={[40, 3, 40]} positions={[-7, -2, -7]} />
      <Block color={COLORS.TURTLE} args={[35, 6, 35]} positions={[-7, -5, -7]} />
      <Block color={COLORS.PLAIN_PLANE} args={[40, 3, 40]} positions={[-7, -8, -7]} />

    </Suspense>
  )
}

export default Game1