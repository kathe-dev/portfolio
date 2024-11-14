"use client";

import React from "react";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import Image from 'next/image';
import {  motion } from "framer-motion";


/* import { Parallax } from "react-scroll-parallax"; 
 */
export default function BackgroundGradientAnimationDemo() {



  return (
    <BackgroundGradientAnimation className="">
      <div  id="Inicio" className="absolute z-10 inset-0 flex items-center justify-center text-text dark:text-darktext font-bold  lg:pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl mb-32 mt-14 md:-mt-24">
        {/* <Parallax speed={-30}>   */}
        <motion.div initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false, amount: 0.5 }}
       transition={{ duration: 1 }}  className="flex flex-col md:flex-row items-center justify-center pt-28 md:pt-0  gap-10 w-screen h-screen ">
          <div className="flex w-[90vw] md:w-[20vw]  flex-col items-center justify-center gap-10">
            <h1 className="text-4xl font-bold ">Katherine Ramirez</h1>
            <Image src="/Images/kathe-icon-clean.png" alt="Logo" width={300} height={300} />
          </div>
          <div className="flex w-[90vw] md:w-[40vw] items-center justify-start" >
            <p className="text-2xl font-bold text-left"> Hi! I'm Katherine, a <b className="text-darkdetails dark:text-details"> web developer</b>, with a degree in <b className="text-darkdetails dark:text-details">Computer  Science</b>. I am interested in <b className="text-darkdetails dark:text-details">UX/UI design, art, and video games</b>. I enjoy working in multidisciplinary teams, where I can learn new abilities and new perspectives. I think that web development is more interesting when it's interactive and captures  the attention with eye-catching elements.
            </p>
          </div>
      </motion.div>
        {/* </Parallax> */}

      </div>

    </BackgroundGradientAnimation>
  );
}
