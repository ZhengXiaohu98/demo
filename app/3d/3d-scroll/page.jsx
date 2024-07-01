"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import OfficeModel from "./Office";
import Overlay from "./Overlay";

const Page = () => {

  return (
    <main className="w-screen h-screen overflow-hidden" style={{ backgroundImage: "linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%)" }}>
      <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
        <ambientLight intensity={2.5} />
        <OrbitControls enableZoom={false} />
        <ScrollControls pages={3} damping={0.25}>
          <Overlay />
          <OfficeModel />
        </ScrollControls>
      </Canvas>
    </main>
  )
}

export default Page;