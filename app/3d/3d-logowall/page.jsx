"use client";
import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Billboard, Text, TrackballControls, Image as IMG } from '@react-three/drei';
import { geometry, easing } from 'maath'
extend({ RoundedPlaneGeometry: geometry.RoundedPlaneGeometry });

const logos = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/logo3.png",
  "/images/logos/logo4.png",
  "/images/logos/logo5.png",
  "/images/logos/logo6.png",
  "/images/logos/logo7.png",
  "/images/logos/logo8.png",
  "/images/logos/logo9.png",
  "/images/logos/logo10.png",
  "/images/logos/logo11.png",
  "/images/logos/logo12.png",
  "/images/logos/logo13.png",
  "/images/logos/logo14.png",
  "/images/logos/logo15.png",
  "/images/logos/logo16.png",
  "/images/logos/logo17.png",
  "/images/logos/logo18.png",
  "/images/logos/logo19.png",
  "/images/logos/logo20.png",
  "/images/logos/logo21.png",
  "/images/logos/logo22.png",
  "/images/logos/logo23.png",
  "/images/logos/logo24.png",
  "/images/logos/logo25.png",
  "/images/logos/logo26.png",
  "/images/logos/logo27.png",
  "/images/logos/logo28.png",
  "/images/logos/logo29.png",
  "/images/logos/logo30.png",
  "/images/logos/logo31.png",
  "/images/logos/logo32.png",
  "/images/logos/logo33.png",
  "/images/logos/logo34.png",
  "/images/logos/logo35.png",
  "/images/logos/logo36.png",
  "/images/logos/logo37.png",
  "/images/logos/logo38.png",
  "/images/logos/logo39.png",
  "/images/logos/logo40.png",
  "/images/logos/logo41.png",
  "/images/logos/logo42.png",
  "/images/logos/logo43.png",
  "/images/logos/logo44.png",
  "/images/logos/logo45.png",
  "/images/logos/logo46.png",
  "/images/logos/logo47.png",
  "/images/logos/logo48.png",
  "/images/logos/logo49.png",
  "/images/logos/logo50.png"
]


const LogoWall = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='h-screen w-screen bg-[#f3f3f3]'/>
      <div className='h-screen w-screen overflow-hidden bg-white'>
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
          <fog attach="fog" args={['#202025', 0, 80]} />
          <Suspense fallback={null}>
            <RotatingGroup rotationSpeed={0.0005}>
              <Orbit radius={22} />
            </RotatingGroup>
          </Suspense>
          <TrackballControls noZoom />
        </Canvas>
      </div>
      <div className='h-screen w-screen bg-[#f3f3f3]'/>
    </div>

  )
}

export default LogoWall;


const Orbit = ({ radius = 20 }) => {
  // Create a count x count random words with spherical distribution
  const Logos = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();

    const len = logos.length;
    const phiSpan = Math.PI / 5;
    const thetaSpan = (Math.PI * 2) / (len / 4);
    for (let i = 0; i < 4; ++i) {
      for (let j = 0; j < len / 4; ++j) {
        if (i * 4 + j < len - 1) {
          const phi = phiSpan * (i + 1);
          const theta = thetaSpan * j;
          const position = new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phi, theta)
          );
          temp.push([position, logos[i * 4 + j]]);
        }
      }
    }

    return temp;
  }, [radius]);
  return Logos.map(([pos, url], index) => <Logo key={index} position={pos} url={url} />)
}

function Logo({ url, ...props }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  // Tie component to the render-loop
  useFrame(({ camera }) => {

  })
  return (
    <Billboard {...props}>
      <IMG ref={ref} onPointerOver={over} onPointerOut={out} url={url} scale={[6, 2.4]} >
        <roundedPlaneGeometry args={[1, 1, 0.05]} />
      </IMG>
    </Billboard>
  )
}

const RotatingGroup = ({ children, rotationSpeed = 0.01 }) => {
  const groupRef = useRef()
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += rotationSpeed * Math.sin(delta) * 100
      groupRef.current.rotation.y += rotationSpeed * Math.sin(delta) * 100
      groupRef.current.rotation.z += rotationSpeed * Math.sin(delta) * 100
    }
  })
  return <group ref={groupRef}>{children}</group>
}