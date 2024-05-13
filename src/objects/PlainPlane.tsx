import { PlaneProps, usePlane } from "@react-three/cannon"
import { Mesh, Color } from "three"

export default function PlainPlane(props: PlaneProps & { color?: string }) {
    const [ref] = usePlane<Mesh>(() => ({
      type: 'Static',
      position: [0, 0, 0],
      rotation: [-Math.PI / 2, 0, 0],
      ...props
    }))
    return (
      <mesh 
        ref={ref} 
        receiveShadow
        name="plane"
      >
        <planeGeometry args={props.args ? [props.args[0] as number, props.args[1] as number] : [20, 20]} />
        <meshPhongMaterial color={new Color(props.color ? props.color: 'white')}
                            shininess={100}
                            reflectivity={1}/>
      </mesh>
    )
  }