import { BoxProps, useBox } from '@react-three/cannon';
import { Mesh ,Color} from 'three';

const Block = (props: BoxProps & { color?: string }) => {
    const [ref] = useBox<Mesh>(() => ({
        type: 'Static',
        mass: 100,
        position: props.position || [0,0,0],
        ...props
    }))

    return (
        <mesh ref={ref} castShadow receiveShadow>
          <boxGeometry args={props.args ? props.args : [1, 1, 1]} />
          <meshPhongMaterial  color={new Color(props.color ? props.color: 'white')} />
        </mesh>
      )
}

export default Block
