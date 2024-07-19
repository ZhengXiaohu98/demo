'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  useGSAP(() => {
    gsap.to('.my-box', {
      x: 160,
      rotation: 180,
      borderRadius: '20px',
      opacity: 0,
      duration: 2,
      repeat: -1,
      stagger: {
        amount: .2,
        ease: "circ.inOut",
        from: 'end'
      }
    });

  }, []);

  return (
    <main className="flex flex-col gap-[40px] justify-center items-center w-screen h-screen">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-[48px] font-[600]">动效示例</h2>
        <div className="flex flex-row flex-wrap mt-[20px] gap-6">
          <Link href="/2d/horizontal-scroll" className="px-[24px] py-[12px] rounded-[12px] bg-[#f7f7f7] text-[#555] hover:bg-gray-300 transition duration-300 font-[600] text-[18px]">横向滚动</Link>
          <Link href="/2d/scale-entry-img" className="px-[24px] py-[12px] rounded-[12px] bg-[#f7f7f7] text-[#555] hover:bg-gray-300 transition duration-300 font-[600] text-[18px]">图片进入放大</Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-white text-[48px] font-[600]">3D相关</h2>
        <div className="flex flex-row flex-wrap mt-[20px] gap-6">
          <Link href="/3d/3d-scroll" className="px-[24px] py-[12px] rounded-[12px] bg-[#f7f7f7] text-[#555] hover:bg-gray-300 transition duration-300 font-[600] text-[18px]">3D模型与滚动结合</Link>

        </div>
      </div>
    </main>
  );
}
