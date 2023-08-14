import React from 'react'
import { services } from '../../../data'
import Link from 'next/link'
const page = () => {
  return (
    <div >

        {
            services.map((item)=>{
                return(
                <section className="text-[#ebedff] body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={item.image} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#a8a7a7]">{item.title}</h1>
            <p className="mb-8 leading-relaxed">{item.desc}</p>
            <div className="flex justify-center">
                <Link href={item.path}>  
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none  hover:bg-indigo-600 rounded text-lg">{item.btnText}</button>
                </Link>
            
            </div>
            </div>
        </div>
        </section>

                )
            })
        }
    </div>
  )
}

export default page