"use client";

import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import {motion} from "framer-motion";

import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';



const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // New state to manage the background color transparency
  const [bgTransparent, setBgTransparent] = useState(true);


  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavFalse = () => {
    setNav(false);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Inicio' },
    { id: 2, text: 'Tecnologias' },
    { id: 3, text: 'Proyectos' },
    { id: 4, text: 'Educacion' },
    { id: 5, text: 'Experiencia laboral' },
    { id: 6, text: 'Contacto' },
  ];

  // Handle scroll position and visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = (currentScrollPos >= -10 && currentScrollPos <= 200) || (prevScrollPos > currentScrollPos);
      // Update the background transparency based on scroll position
      setBgTransparent(currentScrollPos >= 0 && currentScrollPos <= 200);


      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`z-20 fixed w-full transition-transform  duration-200 ease-in-out ${visible ? '' : '-translate-y-full'}`}>
    
    
    <div className={
      nav ?
      ' backdrop-filter z-10 left-0 top-0 ease-in-out duration-500  w-[100vw] h-[100vh] inset-0   bg-text bg-opacity-70  backdrop-blur-lg fixed flex justify-center items-center md:justify-normal md:items-normal mt-24 '
      : 'ease-in-out w-[100vw] h-[100vh]  duration-500 fixed top-0 left-[-100vw]  '
    }>
      <div className={` ease-in-out transition-all h-[90vh]   flex md:flex-wrap md:flex-row flex-col justify-center md:justify-between  items-center   ${visible ? ' -mt-24 ' : ' mt-0 '}`}>
      <ul className='flex md:flex-wrap md:flex-row flex-col md:w-[70vw] w-[90vw]  py-10 justify-center border-b-2 md:border-b-0 border-details'>
        {navItems.map(item => (
          <Link href={`/#${item.text}` } key={item.id} onClick={handleNav} >
          <li className=' Heavitas text-xl md:text-3xl p-2 md:p-4 rounded-xl  cursor-pointer duration-300 text-details hover:text-details text-left md:text-center'>
            {item.text}
          </li>
        </Link>
        ))}
      </ul>
      
      <div className=' md:w-[30vw] flex flex-col  w-[90vw] py-5 md:py-10    '>
        <h2 className='Clinton-Extra-Bold text-2xl md:text-3xl p-2 md:p-4 rounded-xl    text-details text-left'>
          Social
        </h2>

          

          <a
              href="https://www.linkedin.com/in/kathdev/"
              rel="noreferrer"
              target="_blank"
              className="Clinton text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details text-left"
            >
          <div className="flex  justify-start  items-center gap-2 ">
            <FaLinkedin size={30} className='fill-details' />
            
            kathdev
            
          </div>
          </a>

          <a
              href="https://github.com/kathe-dev"
              rel="noreferrer"
              target="_blank"
              className="Clinton text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details text-left"
            >
          <div className="flex  justify-start items-center gap-2 ">
            <FaGithubAlt size={30} className='fill-details' />
            
            kathe-dev
            
          </div>
          </a>

          <h2 className='Clinton-Extra-Bold text-2xl md:text-3xl p-2 md:p-4 rounded-xl    text-details text-left'>
          Contacto
        </h2>

        <a
              href="mailto:kathramz25@gmail.com"
              className="Clinton text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details text-left"
            >
          <div className={`flex ${nav ? ' visible ' : ' hidden '} justify-start  items-center gap-2 `}>
            <FaEnvelope size={25} className='fill-details' />
            <p className='flex w-[88vw] md:w-[28vw]'>
            kathramz25@gmail.com
            </p>
          </div>
          </a>

          <a
              href="https://wa.me/573175479834"
              rel="noreferrer"
              target="_blank"
              className="Clinton text-lg md:text-xl p-2 md:p-4 rounded-xl cursor-pointer hover:underline   text-details text-left"
            >
          <div className="flex  justify-start  items-center gap-2 ">
            <FaPhoneAlt size={25} className='fill-details' />
            
            (+57) 317 547 9834
            
          </div>
          </a>

          </div>
      </div>
    </div>


    <motion.div className={`Clinton-Extra-Bold transition ease-in-out duration-300  ${bgTransparent && nav ? ' bg-text bg-opacity-70 backdrop-filter backdrop-blur-lg text-details ' : bgTransparent ? ' bg-transparent text-text' : 'bg-text shadow-lg shadow-black/[0.03] bg-opacity-95 text-details'}  flex justify-between items-center h-24 mx-auto px-10 md:px-32  text-lg top-0 w-full `}
    initial = {{ y: -100, opacity: 0}}
    animate = {{ y:0 , opacity: 1}}
    >
  
      {/* Logo */}
      <Link href={"/"} className='z-30' onClick={handleNavFalse} >
        <Image src={bgTransparent ? '/Images/kathe-icon-clean.png' : '/Images/kathe-icon-clean.png'} alt='Logo GoBig' width={80} height={80}/>
      </Link>

      {/* Desktop Navigation */}
      {/* <ul className='hidden md:flex'>
        {navItems.map(item => (
          <Link href={`/#${item.text}`} key={item.id}>
          <li className='p-4 rounded-xl m-2 cursor-pointer duration-300 hover:text-[#c48ef6] hover:bg-[#f5f5f5]'>
            {item.text}
          </li>
        </Link>
        ))}
      </ul> */}
     <button className={` z-30 hidden md:flex   px-4 py-2 rounded-xl duration-300 ${bgTransparent && nav? 'hover:bg-details hover:text-text' : bgTransparent ? 'hover:bg-text hover:text-details' : 'hover:bg-details hover:text-text'} `} type='button' onClick={handleNav}> Menu </button>

     


      {/* Mobile Navigation Icon */}
    <div onClick={handleNav}  onKeyDown={handleNav} className='block md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={30} color={bgTransparent ? 'bg-text' : ' bg-details'} /> : <AiOutlineMenu size={30} color={bgTransparent ? 'bg-text' : 'bg-details'}/>}
    </div>

      {/* Mobile Navigation Menu */}
      {/* <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r pt-10 border-r-gray-100 bg-[#ffffff] ease-in-out duration-500 pl-4 bg-opacity-95'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] '
        }
      >
        {/* Mobile Logo 
        <Link href={"/"}  onClick={() => setNav(false)} onKeyDown={() => {}}>
            <Image src="/Images/logo.svg" alt='Logo GoBig' width={100} height={100} className=' text-[#ada8f9] '/>
        </Link>

        /* Mobile Navigation Items 
        {navItems.map(item => (
          <Link href={`/#${item.text}`} key={item.id}>
          <li className='p-4 hover:bg-[#f5f5f5] rounded-xl duration-300 hover:text-[#c48ef6] cursor-pointer ' onClick={() => setNav(false)} onKeyDown={() => {}}>
            {item.text}
          </li>
        </Link>
        ))}
      </ul> */}
    </motion.div>
    </header>
  );
};

export default Header;