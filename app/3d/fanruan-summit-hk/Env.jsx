import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera, ScrollControls, CameraControls, useScroll } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState, useEffect } from "react";
import { BannerText } from "./BannerText";

const radius = 40;
const segments = 16;
const positions = [];

for (let i = 0; i < segments; ++i) {
  const angle = (i / segments) * Math.PI * 2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius - radius;
  positions.push(new THREE.Vector3(x, 0, z));
}

console.log(positions)


export const Env = ({ selectedFrame, setSelectedFrame, ...props }) => {

  const curveRef = useRef();
  const curve = useMemo(() => new THREE.CatmullRomCurve3([...positions.map(vector => new THREE.Vector3(vector.x, vector.y, vector.z))], true, 'centripetal'), []);
  const points = useMemo(() => curve.getPoints(1000), [curve]);
  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);



  return (
    <Canvas {...props}>
      <ambientLight intensity={2} />
      <axesHelper args={[100]} />
      <line ref={curveRef} geometry={lineGeometry}>
        <lineBasicMaterial color="hotpink" />
      </line>
      <BannerText radius={radius} />
      <ScrollControls pages={4} damping={0.1}>
        <Camera curve={curve} />
      </ScrollControls>
    </Canvas>
  );
};

const Camera = ({ curve }) => {
  const scroll = useScroll();

  useFrame(({ camera }) => {

    if (curve) {
      const scrollOffset = scroll.offset;
      const point = curve.getPoint(scrollOffset);

      camera.position.copy(point.clone().add(new THREE.Vector3(0, 1, 0)));
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }
  });
  return (
    <>
      <PerspectiveCamera makeDefault near={0.01} position={[0, 3, 8]} />

    </>
  )
}
