import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const works = [
  { id: 1, name: 'Web Developer', place: 'Freelancer', time: 'May 2024 - Present', desciption: 'Develop websites that express the essence of the client, using different technologies that adapt to the needs and requirements.', logo: '/Images/kathe-icon-clean.png', orientation: 'left' },
  { id: 2, name: 'Web Developer', place: 'Enjambre group', time: 'March 2024 - May 2024', desciption: 'Develop and maintain websites in WordPress and Angular, as well as maintain customer contact with clients to meet their needs.', logo: '/Images/enjambre.png', orientation: 'right' },
  { id: 3, name: 'Internship', place: 'Banco de occidente', time: 'August 2023 - February 2024', desciption: "Receive, manage, and resolve IT support requests, as well as develop an application to improve the experience of the area's performance appraisal process.", logo: '/Images/BancodeOccidente.webp', orientation: 'left' },
]

export default function WorkExperience() {
  return (
    <div id='Work-Experience' className='flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen'>
       <motion.div initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: false, amount: 0.5 }}
       transition={{ duration: 1 }} >
      <h1 className='text-4xl font-bold'>Work Experience</h1>
      </motion.div>
      <div className='grid grid-cols-1 gap-y-8 gap-x-32 md:grid-cols-1  md:pl-20'>
        {works.map(work => (
           <motion.div initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, amount: 0.5 }}
           transition={{ duration: 1 }}  key={work.id}             className={`flex flex-row items-center justify-start gap-8 md:gap-20 w-[80vw] md:w-[50vw] lg:w-[40vw] h-full ${work.orientation === 'right' ? 'flex-row-reverse' : ''}`}>
            <Image src={work.logo} alt={work.name} className='w-20 h-20' width={80} height={80} />
            <div className={`flex flex-col gap-1 ${work.orientation === 'right' ? 'text-right' : ''}`}>
            <h2 className='text-2xl font-bold'>{work.name}</h2>
            <h3 className='text-xl font-bold'>{work.place}</h3>
            <h4 className='text-lg font-bold'>{work.time}</h4>
            <p className='text-lg '>{work.desciption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
