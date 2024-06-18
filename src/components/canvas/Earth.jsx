import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = () => {
  const earth=useGLTF("./planet/scene.gltf")
  return (
    <primitive
      scale={1.3}
      object={earth.scene}
      position= {[1,0,1]}
    />
  )
}

const EarthCanvas=()=>{
  return(
    <Canvas
      shadows
      camera={{ position: [-5, 0.5, 5], fov: 25 }}
    >
      {/* <Suspense fallback={<CanvasLoader/>} > */}
        <OrbitControls
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
          enableZoom={true}
          autoRotate
        />
        <Earth/>
      {/* </Suspense> */}
    </Canvas>
  )
}

export default EarthCanvas