import Image from 'next/image'
import React from 'react'
import Banner from '@/../public/about-banner.png'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <div className=' '>
          <Image src={Banner} alt='amsgd'
          className='w-full'
          width={1800} height={700} 
          />
          
        </div>
        <div className='Container'>
        <div className='flex flex-col md:flex-row  gap-12  mt-10 mb-16' >
          <div  className='flex-1' >
            <h1 className='text-[2rem] mt-5' >Who I'am</h1>
            <p >Welcome to my portfolio website! I'm a passionate and innovative Frontend Developer dedicated to crafting captivating digital experiences that seamlessly merge design with functionality. With a keen eye for detail and a love for clean, efficient code, I specialize in transforming complex ideas into user-friendly interfaces that leave a lasting impression.
            <br />
            <br />
            As a creative problem solver, I thrive on challenges that push the boundaries of web development. My expertise lies in translating design concepts into responsive and intuitive websites, ensuring an exceptional user journey across devices and browsers. Through a combination of HTML, CSS, and JavaScript wizardry, I bring designs to life, adding interactive elements and dynamic animations to captivate and engage visitors.
            </p>
          </div>
          <div  className='flex-1'>

          <h1 className='text-[2rem] mt-5' >What I Do?</h1>
          <p  className='mb-10'>
          Responsive design is my compass, guiding me to create interfaces that adapt seamlessly to every screen size and orientation. Whether it's a mobile device, tablet, or desktop, I orchestrate an ensemble of elements that dance in perfect harmony, delivering a consistent and intuitive experience to users across the digital spectrum.
            <br />
            <br />
            ✅ React JS Development
            <br />
            ✅ UI/UX Enhancement
            <br />
            ✅ User-Friendly Interface
            <br />
            ✅ Responsive Design
            <br />
            ✅ Web App Development
            <br />
            ✅ Front-End Expertise
            <br />
          </p>

         <Link href='/contact' className='mt-10 py-3  px-6 rounded-lg bg-[#5A3427]'> Contant Me </Link>
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default page