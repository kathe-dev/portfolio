"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import Image from 'next/image';

/* import { Parallax } from "react-scroll-parallax"; 
 */
export default function BackgroundGradientAnimationDemo() {



  return (
    <BackgroundGradientAnimation className="">
      <div  id="Inicio" className="absolute z-10 inset-0 flex items-center justify-center text-text dark:text-darktext font-bold  lg:pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl mb-32 md:-mt-24">
        {/* <Parallax speed={-30}>   */}
        <div className="flex flex-col md:flex-row items-center justify-center  gap-10 w-screen h-screen ">
          <div className="flex w-[90vw] md:w-[20vw]  flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold ">Katherine Ramirez</h1>
            <Image src="/Images/kathe-icon-clean.png" alt="Logo" width={300} height={300} />
          </div>
          <div className="flex w-[90vw] md:w-[40vw] items-center justify-start" >
            <p className="text-2xl font-bold text-left"> Hi! I'm Katherine, a <b className="text-darkdetails dark:text-details"> computer scientist </b>, with experience in web
              development. I am interested in user interface (UI)
              design and art. Likewise, I enjoy collaborating in
              multidisciplinary teams, where I firmly believe in the
              importance of learning from each other. I believe that
              the diversity of perspectives always enriches our
              projects and drives us forward in the pursuit of creative
              and effective solutions.
            </p>
          </div>
      </div>
        {/* </Parallax> */}

      </div>

    </BackgroundGradientAnimation>
  );
}
