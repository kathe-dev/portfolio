"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import BackgroundGradientAnimationDemo from "@/components/home";
import Technologies from "@/components/technologies";
import Projects from "@/components/projects";
import Education from "@/components/education";
import WorkExperience from "@/components/workExperience";
import Contact from "@/components/contact";

import Lenis from 'lenis'


export default function Home() {
  useEffect(() => {
		const lenis = new Lenis()

		lenis.on('scroll', (e) => {
		/* console.log(e) */
		})

		function raf(time: number) {
		lenis.raf(time)
		requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, []);
  
  return (
    <div className="w-screen h-full bg-background dark:bg-darkbackground text-text dark:text-darktext  ">
      <Header />
      <BackgroundGradientAnimationDemo />
      <Technologies />
      <Projects />
      <Education />
      <WorkExperience />
      <Contact />
      <div className="flex  items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Hello, World!</h1>
          <Image src="/Images/kathe-icon-clean.png" alt="Logo" width={200} height={200} />
          
        </div>
      </div>
      <div className="flex items-center justify-center w-screen h-screen" />

    </div>
  );
}