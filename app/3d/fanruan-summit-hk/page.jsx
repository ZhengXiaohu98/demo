'use client';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { Env } from "./Env";


export default function Home() {

  return (
    <main className="relative overflow-hidden select-none w-screen h-screen bg-[url('/images/3d/fanruan-summit-hk/bg.png')] bg-no-repeat bg-cover bg-center">
      <Env />
    </main>
  );
}
