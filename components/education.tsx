import React from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export default function Education() {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <motion.div initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1 }}  id='Education' className='flex flex-col pt-48 gap-20 items-center justify-center  w-screen min-h-screen '>
      <h1 className='text-4xl font-bold'>Education</h1>
      
      <div className='flex flex-col md:flex-row-reverse items-center justify-center gap-x-32 gap-y-10 w-[90vw] md:w-[70vw]  h-full'>
        <Image src={resolvedTheme === 'light' ? '/Images/logoJaverianaNegro.png' : '/Images/logoJaverianaBlanco.png'} alt='Pontificia Universidad Javeriana' width={200} height={200} />
        <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-2xl font-bold'>software engineering specialization </h2>
        <h3 className='text-xl font-bold'>Pontificia Universidad Javeriana</h3>
        <p className='text-lg'>2024 - present</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-x-32 gap-y-10 w-[90vw] md:w-[70vw]  h-full'>
        <Image src={resolvedTheme === 'light' ? '/Images/logoJaverianaNegro.png' : '/Images/logoJaverianaBlanco.png'} alt='Pontificia Universidad Javeriana' width={200} height={200} />
        <div className='flex flex-col items-start justify-center gap-2'>
        <h2 className='text-2xl font-bold'>Computer Science        </h2>
        <h3 className='text-xl font-bold'>Pontificia Universidad Javeriana</h3>
        <p className='text-lg'>2018 - 2023</p>
        </div>
      </div>
    </motion.div>
  )
}
