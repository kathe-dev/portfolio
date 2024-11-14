import React, { useRef } from 'react'
import Image from 'next/image'
import { video } from 'framer-motion/client';

const projects = [
  { id: 1, name: 'GoBig Agency', link: 'https://www.gobigagency.co/', mediaSource: '/Videos/gobig.mp4' },
  { id: 2, name: 'NMS Shipping', link: 'https://www.nms-shipping.com/', mediaSource: '/Videos/nms.mp4' },
  { id: 3, name: 'Nile Dynamics', link: 'https://www.niledynamics.net/', mediaSource: '/Videos/nile.mp4' },
  { id: 4, name: 'Sabajon Apolo (work in progress)', link: 'https://sabajon-apolo.vercel.app/', mediaSource: '/Images/sabajon.png' },
  
];

export default function Projects() {
  return (
    <div id='Projects' className='flex flex-col pt-48 gap-20 items-center justify-center w-screen min-h-screen'>
      <h1 className='text-4xl font-bold'>Projects</h1>
      <div className='grid grid-cols-1 gap-y-8 gap-x-32 md:grid-cols-2  md:pl-20'>
        {projects.map(proj => (
          <div key={proj.id} className='flex items-center justify-center gap-10 w-[90vw] md:w-[30vw] lg:w-[20vw] h-full py-6 hover:scale-105 transition-all ease-in-out duration-300 px-4 rounded-xl border-2 border-text dark:border-darktext '>
            <a href={proj.link} target='_blank' rel='noreferrer' className='gap-4 flex flex-col'>
            {proj.mediaSource.endsWith('.mp4') ? (
                <video
                ref={videoRef => {
                  if (videoRef) {
                    const playVideo = () => videoRef.play();
                      const pauseVideo = () => {
                        videoRef.pause();
                        videoRef.currentTime = 0;
                      };

                      videoRef.onmouseenter = playVideo;
                      videoRef.onmouseleave = pauseVideo;
                      videoRef.onfocus = playVideo;
                      videoRef.onblur = pauseVideo;
                    
                  }
                }}
                className='w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext '
                muted
                loop
                preload='auto'
              >
                  <source src={proj.mediaSource} type='video/mp4' />
                </video>
              ) : (
                <Image src={proj.mediaSource} alt={proj.name} className='w-full aspect-video rounded-xl shadow-lg shadow-text dark:shadow-darktext ' width={640} height={360} />
              )}
            <h2 className='text-2xl text-center font-bold'>{proj.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
