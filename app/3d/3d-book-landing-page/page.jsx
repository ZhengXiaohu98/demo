"use client";
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Environment, OrbitControls, Text, ScrollControls, Image as IMG, SpotLight } from '@react-three/drei';
import { geometry, easing } from 'maath';
import { Book } from "./Book";
import { pages } from "./data.json";
extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-screen w-screen overflow-hidden bg-gradient-to-r from-[#07182c] to-[#142446]'>
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 90 }}>
          <ScrollControls pages={pages.length} damping={0.25}>
            <Book />
          </ScrollControls>
          <OrbitControls enableZoom={false} />
          <Environment preset="studio" />
          <directionalLight
            position={[2, 5, 2]}
            intensity={2.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.0001}
          />
          <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <shadowMaterial transparent opacity={0.2} />
          </mesh>
        </Canvas>
      </div>

    </div>

  )
}

export default LandingPage;