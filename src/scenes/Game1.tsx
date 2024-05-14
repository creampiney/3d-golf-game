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


      {/* <Wall position={[9.5, 0.5, 0]} args={[1, 1, 20]}/>
      <Wall position={[-9.5, 0.5, 0]} args={[1, 1, 20]}/>
      <Wall position={[0, 0.5, 9.5]} args={[20, 1, 1]}/>
      <Wall position={[0, 0.5, -9.5]} args={[20, 1, 1]}/> */}


      {/* <Block color="red" args={[3, 2, 2]} position={[3, 0, 0]} /> */}
      {/* <PlainPlane position={[0, 0, 0]} args={[100, 100]} color={[0.5,0.5,0.1]}/> */}
      <Hole position={[-15, -0.49, -15]} onBallEnter={handleBallEnterHole} />

      {/* <Ground/> */}

      <GroundTile position={[0, -0.5, -8]} args={[8, 1, 22]}/>
      <GroundTile position={[-11, -0.5, -15]} args={[14, 1, 8]}/>

      {
        [-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5].map((e) => (
          <Wall key={e} position={[e, 0.5, 2.5]} args={[1, 1, 1]}/>
        ))
      }
      {
        [1.5, 0.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5]
        .map((e) => (
          <Wall key={e} position={[-3.5, 0.5, e]} args={[1, 1, 1]}/>
        ))
      }
      {
        [1.5, 0.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5, -13.5, -14.5, -15.5, -16.5, -17.5, -18.5]
        .map((e) => (
          <Wall key={e} position={[3.5, 0.5, e]} args={[1, 1, 1]}/>
        ))
      }
      {
        [-3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5, -13.5, -14.5, -15.5, -16.5, -17.5]
        .map((e) => (
          <Wall key={e} position={[e, 0.5, -11.5]} args={[1, 1, 1]}/>
        ))
      }
      {
        [0.5, 1.5, 2.5, -0.5, -1.5, -2.5, -3.5, -4.5, -5.5, -6.5, -7.5, -8.5, -9.5, -10.5, -11.5, -12.5, -13.5, -14.5, -15.5, -16.5, -17.5]
        .map((e) => (
          <Wall key={e} position={[e, 0.5, -18.5]} args={[1, 1, 1]}/>
        ))
      }
      {
        [-12.5, -13.5, -14.5, -15.5, -16.5, -17.5]
        .map((e) => (
          <Wall key={e} position={[-17.5, 0.5, e]} args={[1, 1, 1]}/>
        ))
      }
      
      

    </Suspense>
  )
}

export default Game1