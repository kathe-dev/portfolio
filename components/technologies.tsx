import React from 'react';
import { FaReact, FaCss3Alt, FaHtml5, FaPython, FaGithub, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiPowerapps } from "react-icons/si";
import { RiNextjsFill, RiJavascriptFill } from "react-icons/ri";
import { FaFileExcel } from "react-icons/fa6";
import { motion } from "framer-motion";

const technologies = [
  { id: 1, name: 'React', icon: FaReact },
  { id: 2, name: 'Tailwind CSS', icon: SiTailwindcss },
  { id: 3, name: 'TypeScript', icon: SiTypescript },
  { id: 4, name: 'Next.js', icon: RiNextjsFill },
  { id: 5, name: 'CSS3', icon: FaCss3Alt },
  { id: 6, name: 'HTML5', icon: FaHtml5 },
  { id: 7, name: 'Python', icon: FaPython },
  { id: 8, name: 'JavaScript', icon: RiJavascriptFill },
  { id: 9, name: 'GitHub', icon: FaGithub },
  { id: 10, name: 'PowerApps', icon: SiPowerapps },
  { id: 11, name: 'WordPress', icon: FaWordpress },
  { id: 12, name: 'Excel', icon: FaFileExcel },
];

export default function Technologies() {
  return (
    <div id='Technologies' className='flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen'>
       <motion.div initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false, amount: 0.5 }}
       transition={{ duration: 1 }} >
      <h1 className='text-4xl font-bold'>Technologies</h1>
      </motion.div>
      <div className='grid  gap-y-8 gap-x-8 md:gap-x-32 grid-cols-2  md:pl-20'>
        {technologies.map(tech => (
           <motion.div initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, amount: 0.5 }}
           transition={{ duration: 1 }}  key={tech.id} className='flex items-center justify-center md:justify-start gap-10 w-[40vw] md:w-[30vw] lg:w-[20vw] h-32'>
            <tech.icon className='w-20 h-20' />
            <h2 className='text-2xl font-bold hidden md:block'>{tech.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
}