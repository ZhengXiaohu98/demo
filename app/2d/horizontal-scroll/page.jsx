/* eslint-disable @next/next/no-img-element */
"use client";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {

  const scrollWrapperRef = useRef(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      gsap.to(scrollWrapperRef.current, {
        x: () => -(scrollWrapperRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: "#scroll-section",
          pin: true,
          scrub: 1,
          end: () => "+=" + scrollWrapperRef.current.scrollWidth
        }
      });
    });

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div className="overflow-x-hidden" >
      <div className="h-screen" />
      <div id="scroll-section" className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <div id="scroll-wrapper" ref={scrollWrapperRef} className="flex flex-row items-center gap-20 px-20 h-[400px]">
          <img src="/images/horizontal-scroll/img1.png" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img2.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img3.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img4.png" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img5.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img6.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img7.png" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img8.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img9.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img10.jpg" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
          <img src="/images/horizontal-scroll/img11.png" className="h-[400px] hover:scale-110 transition-all duration-300" alt="" />
        </div>
      </div>
      <div className="h-screen" />
    </div>
  )
}

export default HorizontalScroll;
