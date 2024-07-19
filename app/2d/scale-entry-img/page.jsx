/* eslint-disable @next/next/no-img-element */
"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {

  useGSAP(() => {

    // scale according to the scroll bar
    gsap.from("#scale-img1", {
      scale: 0.5,
      scrollTrigger: {
        trigger: "#scale-img1",
        start: 'top bottom',
        end: () => "top center",
        scrub: 0.5
      },
    })

    // scale animation
    gsap.from("#scale-img2", {
      scale: 0.5,
      duration: 1.5,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: "#scale-img2",
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: "play none none reset"
      },
    })

    // scale according to the scroll bar (triggers at the bottom)
    gsap.to("#scale-img3", {
      height: '100vh',
      scrollTrigger: {
        trigger: "#scale-img3",
        start: 'top bottom',
        end: 'top 30%',
        scrub: 0.5
      },
    })

    gsap.from("#sec4-img", {
      height: '100vh',
      width: '100vw',
      left: '0%',
      scrollTrigger: {
        trigger: "#sec4",
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
    })

    gsap.from("#sec4-text", {
      x: '-100%',
      scrollTrigger: {
        trigger: "#sec4",
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5
      },
    })

    gsap.to("#sec4", {
      scrollTrigger: {
        trigger: "#sec4",
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
        pin: true,
      },
    })
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="h-screen" />
      <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
        <img id="scale-img1" src="/images/horizontal-scroll/img6.jpg" className="h-[600px]" alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center overflow-hidden" >
        <img id="scale-img2" src="/images/horizontal-scroll/img9.jpg" className="h-[600px]" alt="" />
      </div>
      <div className="h-screen flex flex-col justify-center items-center overflow-hidden" >
        <img id="scale-img3" src="/images/horizontal-scroll/img7.png" className="h-[600px]" alt="" />
      </div>
      <div id="sec4" className="h-[100vh] w-screen relative bg-gray-700">
        <img id="sec4-img" src="/images/horizontal-scroll/fr-img1.png" className="w-[40%] h-auto absolute left-[10%] top-1/2 -translate-y-1/2 z-10" alt="" />
        <div id="sec4-text" className="h-1/3 w-[35%] flex flex-col justify-center gap-4 absolute right-[10%] top-1/2 -translate-y-1/2">
          <p>{"Export files in multiple formats including PDF, PPT, Excel, Word, TXT, CSV, SVG, PNG, JPG, etc."}</p>
          <p>{"Support batch printing with printers of diverse paper sizes and brands, ideal for printing invoices, delivery notes, and more."}</p>
          <p>{"Print over a dozen barcode formats, including 1D and 2D barcodes."}</p>
        </div>
      </div>
      <div className="h-screen" />
    </div>
  )
}

export default HorizontalScroll;