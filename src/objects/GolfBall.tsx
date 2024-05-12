import { SphereProps, useSphere } from "@react-three/cannon"
import { useTexture } from "@react-three/drei"
import { useEffect } from "react"
import { Mesh } from "three"


const GolfBall = (props: SphereProps) => {

    const golfMap = useTexture('/textures/golf-texture.png')

    const [ref, api] = useSphere<Mesh>(() => ({
        mass: 2,
        position: [0, 1, 0],
        args: [0.1],                // Radius
        linearDamping: 0.6,         // Linear damping coefficient
        ...props
    }))

    // useEffect(() => {
    //     api.velocity.set(1, 0, 0)
    // }, [])


  return (
    <mesh ref={ref} onPointerDown={() => api.velocity.set(15,0,0)}>
        <sphereGeometry args={[0.1]}/>
        <meshBasicMaterial map={golfMap} color="cyan" />
    </mesh>
  )
}

export default GolfBall