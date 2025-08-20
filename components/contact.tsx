import React from 'react'
import { FaGithubAlt, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'


export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1 }}  id='Contact' className='flex flex-col  gap-14 items-center justify-center  w-screen min-h-screen '>
      <h1 className='text-4xl font-bold'>Contact</h1>
      <div className='flex flex-col items-center justify-center  gap-y-4 w-[90vw] md:w-[70vw]  h-full'>
      <a
              href="https://www.linkedin.com/in/kathdev/"
              rel="noreferrer"
              target="_blank"
              className=" text-xl md:text-2xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline    text-left"
            >
          <div className="flex  justify-start  items-center gap-2 ">
            <FaLinkedin size={40} className='fill-text dark:fill-darktext' />
            
            kathdev
            
          </div>
          </a>

          <a
              href="https://github.com/kathe-dev"
              rel="noreferrer"
              target="_blank"
              className=" text-xl md:text-2xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline    text-left"
            >
          <div className="flex  justify-start items-center gap-2 ">
            <FaGithubAlt size={40} className='fill-text dark:fill-darktext' />
            
            kathe-dev
            
          </div>
          </a>

        <a
              href="mailto:kathramz25@gmail.com"
              className=" text-xl md:text-2xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline    text-left"
            >
          <div className={`flex  justify-start  items-center gap-2 `}>
            <FaEnvelope size={25} className='fill-text dark:fill-darktext' />
            <p className='flex '>
            kathramz25@gmail.com
            </p>
          </div>
          </a>

          <a
              href="https://wa.me/573150658334"
              rel="noreferrer"
              target="_blank"
              className=" text-xl md:text-2xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline    text-left"
            >
          <div className="flex  justify-start  items-center gap-2 ">
            <FaPhoneAlt size={25} className='fill-text dark:fill-darktext' />
            
            (+57) 315 065 8334
            
          </div>
          </a>
      </div>
    </motion.div>
  )
}
