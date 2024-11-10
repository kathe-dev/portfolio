"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import Image from 'next/image';

/* import { Parallax } from "react-scroll-parallax"; 
 */
export default function BackgroundGradientAnimationDemo() {



  return (
    <BackgroundGradientAnimation className="">
      <div  id="Inicio" className="absolute z-10 inset-0 flex items-center justify-center text-text dark:text-darktext font-bold px-4 lg:pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl mb-32">
        {/* <Parallax speed={-30}>   */}
        <div className="flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold ">Hello, World!</h1>
          <Image src="/Images/kathe-icon-clean.png" alt="Logo" width={200} height={200} />
        </div>
      </div>
        {/* </Parallax> */}

      </div>

    </BackgroundGradientAnimation>
  );
}
