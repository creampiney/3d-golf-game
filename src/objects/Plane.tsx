import { PlaneProps, usePlane } from "@react-three/cannon"
import { Mesh } from "three"

export default function Plane(props: PlaneProps) {
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
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial opacity={0.7} transparent={true} color="black" />
      </mesh>
    )
  }