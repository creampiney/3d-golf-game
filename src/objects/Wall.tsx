import { BoxProps, useBox } from '@react-three/cannon'
import React from 'react'
import { Mesh } from 'three'

const Wall = (props: BoxProps) => {
    const [ref, api] = useBox<Mesh>(() => ({
        type: 'Static',
        mass: 100,
        ...props
    }))

    return (
        <mesh ref={ref} castShadow receiveShadow>
          <boxGeometry args={props.args ? props.args : [1, 1, 1]} />
          <meshBasicMaterial color="black" />
        </mesh>
      )
}

export default Wall