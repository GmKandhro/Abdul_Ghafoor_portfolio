import React from 'react'
// import Project1 from "../../public/project-1.png"
import Image from 'next/image'
import {projects} from "../../data"
import Link from 'next/link'
import {AiOutlineGithub} from "react-icons/ai"


const Projects = () => {
  return (
    <div className='mt-22   '>
       <div className='Container '>
       <h1 className='text-center text-[2rem] sm:text-[4rem] mb-10 '>My Work</h1>
        <div className='flex-col md:flex-row flex justify-center items-center gap-[10px]'>
        {
            projects.map((item, index)=>{
                return(

               
                 <div key={index} className='w-[300px]  bg-[#333233] cursor-default transition-all  ease-in duration-300 hover:bg-[gray] p-2 rounded-[20px] '>
                <div className="relative object-cover  ">
                        <Image
                        src={item.image}
                          width={400}
                          height={300}
                        alt="Car Rent"
                        className=" object-cover rounded-2xl"
                        />
                        <Link href={item.source_code_link} target='_blank' className='absolute top-[10px] right-[20px] z-10 w-[30px] h-[30px] rounded-full bg-black flex items-center justify-center'>
                            <AiOutlineGithub/>
                        </Link>
                    </div>
                    <div className='ml-[8px] mb-5'>
                        <h1 className='text-[1rem] md:text-[1rem] mt-[10px] mb-[15px] font-medium color-primary'>{item.name}</h1>
                        <p className='mb-6 font-thin  text-[13px] sm:text-[16px] '>{item.description}</p>
                        <Link href={item.liveDemo} target='_blank' className='py-2 px-6 rounded-lg bg-[#5A3427] mb-5'>Live Demo</Link>

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

export default Projects