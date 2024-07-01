/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {

  useGSAP(() => {

    const scrollWrapper = document.getElementById("scroll-wrapper");
    const scrollWrapperWidth = scrollWrapper.scrollWidth;
    const windowWidth = window.innerWidth;

    gsap.to('#scroll-wrapper', {
      x: -(scrollWrapperWidth - windowWidth),
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "#scroll-section",
        start: 'top top',
        end: "+=4000",
        pin: true,
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="h-screen" />
      <div id="scroll-section" className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <div id="scroll-wrapper" className="flex flex-row items-center gap-20 px-20 h-[600px]">
          <img src="/horizontal-scroll/img1.png" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img2.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img3.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img4.png" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img5.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img6.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img7.png" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img8.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img9.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img10.jpg" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
          <img src="/horizontal-scroll/img11.png" className="h-[400px] hover:scale-110 transiton-all duration-300" alt="" />
        </div>
      </div>
      <div className="h-screen" />
    </div>
  )
}

export default HorizontalScroll;