'use client'
import Image from 'next/image'
import React from 'react'
import Profile from "../../public/i.png"
import Link from 'next/link'
import Socials from './Socials'
import { Typewriter } from 'react-simple-typewriter'
const HeroSection = () => {
  return (
    <div className='Hero py-20  Container flex   gap-9 items-center justify-center '>
        <div className='flex-1'>
            <span className='color-primary leading-loose tracking-widest mb-5	'>HELLO AND WELCOME</span>
            <h1 className='text-[2rem] sm:text-[3.5rem] leading-[4rem] mb-12	'>I am <span className='color-primary'>Abdul Ghafoor</span> <br /> <Typewriter
            words={[
              "Frontend developer",
               "Reactjs developer",
              "Freelancer",
              'Programmer'
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
            className='flex'
          /> </h1>
            <p className='text-base text-justify mb-10 font-thin '>Welcome to my portfolio website! I'm a passionate and innovative Frontend Developer dedicated to crafting captivating digital experiences that seamlessly merge design with functionality. With a keen eye for detail and a love for clean, efficient code, I specialize in transforming complex ideas into user-friendly interfaces that leave a lasting impression..</p>

            <Link href='/' className='py-4 px-6 rounded-lg bg-[#5A3427]'>See My Work</Link>
        </div>
        <div className='relative '>
           <div className='overflow-hidden rounded-full p-3 border-2  '>
           <Image src={Profile} alt='img' width={300} height={10} className='rounded-full' />
        <Socials className='Small flex flex-row gap-2 bg-rgba(0, 0, 0, 0.3) backdrop-blur p-3 rounded-md absolute bottom-8   left-[90px]'/>
           </div>
        </div>
    </div>
  )
}

export default HeroSection