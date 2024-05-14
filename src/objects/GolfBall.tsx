import { SphereProps, useSphere } from "@react-three/cannon"
import { Line, useKeyboardControls, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { Mesh, Vector3 } from "three"
import { useGlobalStatusStore } from "../states/globalStatus"



const GolfBall = (props: SphereProps) => {

    const [setGlobalStationary] = useGlobalStatusStore((state) => [
      state.setStationary
    ])
    
    const [setGlobalPower] = useGlobalStatusStore((state) => [
      state.setPower
    ])

    const initialGolfPosition = props.position ? props.position : [0, 0.2, 0]

    const golfMap = useTexture('/textures/golf-texture.png')

    // Ref and API for golf ball
    const [ref, api] = useSphere<Mesh>(() => ({
        mass: 20,
        position: [0, 0.2, 0],               // Default position
        args: [0.2],                // Radius
        linearDamping: 0.6,         // Linear damping coefficient
        ...props
    }))


    // Status of golf ball
    const previousGolfPosition = useRef<Vector3>(new Vector3(initialGolfPosition[0], initialGolfPosition[1], initialGolfPosition[2]))
    const [currentGolfPosition, setCurrentGolfPosition] = useState<Vector3>(new Vector3(initialGolfPosition[0], initialGolfPosition[1], initialGolfPosition[2]))
    const previousGolfVelocity = useRef<Vector3>(new Vector3(0, 0, 0))
    const [currentGolfVelocity, setCurrentGolfVelocity] = useState<Vector3>(new Vector3(0, 0, 0))
    
    const stationaryCounter = useRef<number>(0)
    const [isStationary, setStationary] = useState<boolean>(false)


    // Keyboard Status
    const leftPolarPressed = useKeyboardControls((state) => state['leftPolar'])
    const rightPolarPressed = useKeyboardControls((state) => state['rightPolar'])
    const upAzimuthPressed = useKeyboardControls((state) => state['upAzimuth'])
    const downAzimuthPressed = useKeyboardControls((state) => state['downAzimuth'])
    const increasePowerPressed = useKeyboardControls((state) => state['increasePower'])
    const decreasePowerPressed = useKeyboardControls((state) => state['decreasePower'])
    const shootPressed = useKeyboardControls((state) => state['shoot'])

    // Shooting Status
    const [polar, setPolar] = useState<number>(0)
    const [azimuth, setAzimuth] = useState<number>(0)
    const [power, setPower] = useState<number>(50)

    // Old shooting position
    const [shootingPosition, setShootingPosition] = useState<Vector3>(new Vector3(...initialGolfPosition))

    // Shooting Function
    function shoot() {
      if (power == 0) return
      // Play the hit sound
      const hitSound = new Audio("../../public/sounds/hit.mp3")
      hitSound.play();

      setShootingPosition(new Vector3(...currentGolfPosition))
      const azimuthRadian = azimuth * Math.PI / 180
      const polarRadian = polar * Math.PI / 180
      const weightedPower = power / 2
      api.velocity.set(
        weightedPower * Math.cos(azimuthRadian) * Math.cos(polarRadian), 
        weightedPower * Math.sin(azimuthRadian), 
        weightedPower * Math.cos(azimuthRadian) * Math.sin(polarRadian)
      )
    }

    // Fall from the field
    function onFall() {
      api.velocity.set(0, 0, 0)
      api.position.set(shootingPosition.x, shootingPosition.y, shootingPosition.z)
      api.angularVelocity.set(0, 0, 0)
    }


    // Subscribing API of golf ball
    useEffect(() => {
        const unsubscribePosition = api.position.subscribe((v) => {
          setCurrentGolfPosition(new Vector3(...v))
        })
        const unsubscribeVelocity = api.velocity.subscribe((v) => {
          setCurrentGolfVelocity(new Vector3(...v))
        })
        return () => {
          unsubscribePosition()
          unsubscribeVelocity()
        }
    }, [])


    // Check if golf ball is stationary
    useEffect(() => {
      const dr = currentGolfPosition.distanceTo(previousGolfPosition.current)
      // const opp_v = previousGolfVelocity.current.clone().multiplyScalar(-1)
      // const dv = currentGolfVelocity.distanceTo(previousGolfVelocity.current)
      // const dv_opp = currentGolfVelocity.distanceTo(opp_v)
      // Golf will be stationary if dr -> 0 and dv -> 0
      // setStationary(dr <= 0.01 && (dv <= 0.5 || dv_opp <= 0.5))
      if (dr <= 0.005) {
        stationaryCounter.current++
      }
      else {
        stationaryCounter.current = 0
      }
      setStationary(stationaryCounter.current >= 20)
      
      // console.log(`dv: ${dv}\ndv_opp: ${dv_opp}`)

      previousGolfPosition.current = new Vector3(...currentGolfPosition)
      previousGolfVelocity.current = new Vector3(...currentGolfVelocity)

      if (currentGolfPosition.y <= -30) {
        onFall()
      }
    }, [currentGolfPosition])

    // Reset shooting status if ball is stationary
    useEffect(() => {
      console.log(isStationary)
      if (isStationary) {
        // setAzimuth(0)
        // setPolar(0)
        // setPower(50)
        api.angularVelocity.set(0, 0, 0)
        api.velocity.set(0, 0, 0)
      }
      setGlobalStationary(isStationary)
    }, [isStationary])


    // Global power hook
    useEffect(() => {
      setGlobalPower(power)
    }, [power])


    // Update frame
    useFrame((state, delta) => {
      if (isStationary) {
        if (shootPressed) {
          shoot()
        }
        else if (upAzimuthPressed) {
          setAzimuth((e) => Math.min(e + 2, 80))
        }
        else if (downAzimuthPressed) {
          setAzimuth((e) => Math.max(e - 2, 0))
        }
        else if (leftPolarPressed) {
          setPolar((e) => e - 2)
        }
        else if (rightPolarPressed) {
          setPolar((e) => e + 2)
        }
        else if (increasePowerPressed) {
          setPower((e) => Math.min(e + 2, 100))
        }
        else if (decreasePowerPressed) {
          setPower((e) => Math.max(e - 2, 0))
        }
        
      }
    })


  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={[0.2]}/>
        <meshStandardMaterial map={golfMap} color="white" />
      </mesh>
      {
        isStationary && (
          <Line
            points={[
                currentGolfPosition,
                [
                  currentGolfPosition.x + 1 * Math.cos(azimuth * Math.PI / 180) * Math.cos(polar * Math.PI / 180),
                  currentGolfPosition.y + 1 * Math.sin(azimuth * Math.PI / 180),
                  currentGolfPosition.z + 1 * Math.cos(azimuth * Math.PI / 180) * Math.sin(polar * Math.PI / 180),
                ]
            ]}
            color={"#23aaff"}
            lineWidth={5}           // In pixels (default)
            // segments             // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
          />
        )
      }
      
    </>
    
  )
}

export default GolfBall