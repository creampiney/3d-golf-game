import { SphereProps, useSphere } from "@react-three/cannon"
import { useTexture } from "@react-three/drei"
import { Mesh } from "three"


const GolfBall = (props: SphereProps) => {

    const golfMap = useTexture('/textures/golf-texture.png')

    const [ref, api] = useSphere<Mesh>(() => ({
        mass: 2,
        position: [0, 1, 0],
        args: [0.2],    // Radius
        ...props
    }))

  return (
    <mesh ref={ref}>
        <sphereGeometry args={[0.2]}/>
        <meshBasicMaterial map={golfMap} />
    </mesh>
  )
}

export default GolfBall