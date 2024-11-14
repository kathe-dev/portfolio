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
    </div>
  );
}