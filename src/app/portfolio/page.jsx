"use client"
import React, { useState } from 'react'
import {Projects} from "@/../data"
import Image from 'next/image'
import {AiOutlineGithub} from "react-icons/ai"
import Link from 'next/link'
import Banner from '@/../public/portfolio.jpg'
import TruncateText from './practice'
const page = () => {
  
  return (
    <div className=' '>
        <div className=''>
        <Image src={Banner} alt='amsgd'
          className='w-full'
          width={1800} height={700} 
          />
          
        </div>
        <div className='Container'>
        <div className='flex justify-center flex-wrap items-center gap-10 mt-10'>
        {
            Projects.map((item, index)=>{
                return(

               
                 <div key={index} className='w-[300px] min-h-[300px]  bg-[#333233] cursor-default transition-all  ease-in duration-300 hover:bg-[gray] p-2 rounded-[20px] '>
                <div className="relative h-[150px] object-cover object-center ">
                        <Image
                        src={item.image}
                          fill={true}
                        alt="Car Rent"
                        className="  rounded-2xl"
                        />
                        <Link href={item.source_code_link} target='_blank' className='absolute top-[10px] right-[20px] z-10 w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center'>
                            <AiOutlineGithub/>
                        </Link>
                    </div>
                    <div className='ml-[8px] mb-5'>
                        <h1 className='text-[1.2rem] mt-[10px] mb-[15px] font-medium color-primary'>{item.name}</h1>
                        {/* <p className='mb-6 font-thin '>{item.description}</p> */}
                        <TruncateText className="mb-6 font-thin "  text={item.description} maxWords={10}/>
                        <Link href={item.liveDemo} target='_blank' className=' mt-6 py-2 px-6 rounded-lg bg-[#5A3427] mb-5'>Live Demo</Link>

                    </div>
                </div>
              
                )
            })
        }

        </div>
        </div>
    </div>
  )
}

export default page