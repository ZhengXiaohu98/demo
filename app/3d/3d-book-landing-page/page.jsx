"use client";
import { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Float, SpotLight } from '@react-three/drei';
import { Book } from "./Book";
import { pages } from "./data.json";
import { SuspenseLoader } from '@/component/loading/SuspenseLoaderBar';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

const LandingPage = () => {

  const [curPage, setCurPage] = useState(0);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      setActivePage(Math.floor((scrollTop / (scrollHeight - clientHeight)) / (1 / pages.length)));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    const duration = 10;
    const elements = document.querySelectorAll(".text-box");
    const distance = elements[0].offsetWidth;

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { x: (index * distance) },
        {
          x: `-${distance - index * distance}px`,
          duration,
          ease: "none",
          repeat: -1,
        }
      );
    });
  }, []);

  return (
    <div className='overflow-x-hidden'>
      <div className='fixed top-0 left-0 h-screen w-screen bg-radial-gradient select-none'>
        <Suspense fallback={<SuspenseLoader />}>
          <Canvas shadows camera={{ position: [-0.5, 1, 3], fov: 45 }}>
            <Float
              rotation-x={Math.PI / 30}
              floatIntensity={1}
              speed={2}
              rotationIntensity={1}
            >
              <Book rotation={[-Math.PI / 4, -Math.PI / 2, 0]} curPage={curPage} setCurPage={setCurPage} />
            </Float>
            <OrbitControls
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 4}
              maxAzimuthAngle={Math.PI / 4}
            // minPolarAngle={Math.PI / 6}
            // maxPolarAngle={Math.PI / 3}
            />
            <Environment preset="studio" environmentIntensity={0.2} />
            <directionalLight
              position={[2, 5, 2]}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.0001}
            />
            <SpotLight
              distance={5}
              angle={0.4}
              attenuation={3}
              anglePower={5}
              color="#FFF9C4"
              position={[0, 3, 0]}
              castShadow={false}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>
          </Canvas>
        </Suspense>

        {/* Background Text START */}
        <div className="text-box absolute top-1/2 -translate-y-1/2 left-0 bg-transparent gap-8 px-8 w-max -z-10">
          <h1 className="shrink-0 text-white text-8xl rotate-2">
            FANRUAN: <span className="text-9xl italic text-transparent" style={{ WebkitTextStroke: "1px white", }}>All-in-One</span>{' '}
            <span className="text-5xl">Data Analytics & Business Intelligence Platform</span>
          </h1>
        </div>
        <div className="text-box absolute top-1/2 -translate-y-1/2 left-0 bg-transparent gap-8 px-8 w-max -z-10">
          <h1 className="shrink-0 text-white text-8xl rotate-2">
            FANRUAN: <span className="text-9xl italic text-transparent" style={{ WebkitTextStroke: "1px white", }}>All-in-One</span>{' '}
            <span className="text-5xl">Data Analytics & Business Intelligence Platform</span>
          </h1>
        </div>
        {/* Background Text END */}

        {/* Pagination START */}
        <div className='absolute z-50 sm:bottom-4 md:bottom-10 lg:bottom-20 w-full flex flex-row justify-center items-center flex-wrap sm:gap-x-2 md:gap-x-4 sm:gap-y-1 md:gap-y-3 lg:px-20 md:px-10 sm:px-4'>
          <div
            className={`hover:cursor-pointer transition md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-sm rounded-lg ${activePage == 0 ? 'bg-blue-400/80 text-blue-50' : 'hover:bg-indigo-900/10 bg-indigo-900/60  text-indigo-100 hover:border hover:border-white hover:border-dashed hover:-translate-y-1'} `}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              })
            }}
          >
            FINBI
          </div>
          {
            pages.map((cur, i) => (
              <div
                key={i}
                className={`hover:cursor-pointer transition md:px-4 md:py-2 sm:px-2 sm:py-1 md:text-base sm:text-sm rounded-lg ${activePage == i + 1 ? 'bg-blue-400/80 text-blue-50' : 'hover:bg-indigo-900/10 bg-indigo-900/60  text-indigo-100 hover:border hover:border-white hover:border-dashed hover:-translate-y-1'} `}
                onClick={() => {
                  const scrollPosition = document.documentElement.scrollHeight * (i + 1) / (pages.length + 1);
                  window.scrollTo({
                    top: scrollPosition,
                    behavior: "smooth"
                  })
                }}
              >
                {cur.pagination}
              </div>
            ))
          }
        </div>
        {/* Pagination END */}
      </div>

      {/* To create scrolling pages, the default Scrollcontrol has problem to set the current scroll position*/}
      {
        pages.map((_, i) => <div key={i} className='h-screen' />)
      }
    </div>

  )
}

export default LandingPage;