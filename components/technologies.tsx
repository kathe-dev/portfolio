import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiPowerapps } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa6";



export default function Technologies() {
  return (
    <div id='Technologies' className='flex flex-col pt-48 gap-20 items-center justify-center  w-screen min-h-screen  '>
        <h1 className='text-4xl font-bold'>Technologies</h1>
        <div className=' columns-1 md:columns-2 gap-20    md:pl-20 '>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaReact className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>React</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <SiTailwindcss className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>Tailwind CSS</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <SiTypescript className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>TypeScript</h2>
            </div>
            <div className='flex  items-center justify-start    gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <RiNextjsFill className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>Next.js</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaCss3Alt className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>CSS3</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaHtml5 className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>HTML5</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaPython className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>Python</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <RiJavascriptFill className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>JavaScript</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaGithub className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>GitHub</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <SiPowerapps className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>PowerApps</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaWordpress className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>WordPress</h2>
            </div>
            <div className='flex  items-center justify-start   gap-10 w-[70vw] md:w-[30vw] lg:w-[20vw] h-32'>
                <FaFileExcel className='w-20 h-20' />
                <h2 className='text-2xl font-bold'>Excel</h2>
            </div>
        </div>
    </div>
  )
}
