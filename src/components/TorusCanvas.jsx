
import { Canvas,useFrame} from '@react-three/fiber'
import {
  Caustics,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import { useRef, useState } from 'react'


function StandardBall(){
  const standardRef= useRef(null)
 

  let movement = "up"
  useFrame((state,delta)=>{
    
    const y = standardRef.current.position.y
    standardRef.current.rotation.y += delta/0.5
    if(y>=Math.PI/2 && movement === "up"){
      standardRef.current.position.y -= delta/0.5
      movement ="down"
     
    }else if(standardRef.current.position.y>= Math.PI/2 && movement=== "down"){
      standardRef.current.position.y -= delta/0.5
    }else if(y< Math.PI/2 && y>-1 && movement=="down"){
      standardRef.current.position.y -= delta/0.5
    }else if(y< Math.PI/2 && y>-1 && movement=="up"){
      standardRef.current.position.y += delta/0.5
    }else if(y<= -1 && movement=="up"){
      standardRef.current.position.y += delta/0.5
    }else if(y<=-1 && movement=="down"){
      standardRef.current.position.y += delta/0.5
      movement= "up"
      console.log(y);
      
    }
    

  })
  return(
    <mesh scale={0.1} onClick={() => setActive(!active)} castShadow receiveShadow position={[0, 0, 0]} ref={standardRef}>
        <torusGeometry args={[10,3, 16, 100]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
  )
}

export default function TorusCanvas() {
    const [active,setActive]=useState(false)
    const { scale } = useSpring({
        from: { x: 0 },
        to: { x: 100 }, })
        
        

  return (
    <Canvas shadows camera={{ position: [-5, 0.5, 5], fov: 45 }}>
      {/* <color attach="background" args={['#f0f0f0']} /> */}
      <ambientLight intensity={0.5 * Math.PI} />
      <spotLight decay={0} position={[5, 5, -10]} angle={0.15} penumbra={0.2} />
      <pointLight decay={0} position={[-10, -10, -10]} />
      {/* <Caustics color="#FF8F20" position={[0, -0.5, 0]} lightSource={[5, 5, -10]} worldRadius={0.01} ior={0.2.2} intensity={0.005}>
        <mesh castShadow receiveShadow position={[-2, 0.5, -0.2]} scale={0.5}>
          <sphereGeometry args={[0.2, 64, 64]} />
          <MeshTransmissionMaterial resolution={1024} distortion={0.25} color="#FF8F20" thickness={0.2} anisotropy={0.2} />
        </mesh>
      </Caustics> */}
      <StandardBall/>
      {/* <AccumulativeShadows
        temporal
        frames={100}
        color="orange"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.7}
        opacity={0.2}
        scale={12}
        position={[0, -0.5, 0]}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[5, 5, -10]} bias={0.0005} />
      </AccumulativeShadows> */}
      {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" /> */}
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.1} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
    </Canvas>
  )
}
