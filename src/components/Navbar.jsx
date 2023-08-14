'use client'
import React, { useState } from 'react'
import { links } from '../../data'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "../../public/logo1.png"
import {AiOutlineClose} from 'react-icons/ai'
import {HiMenuAlt3} from 'react-icons/hi'
export const Navbar = () => {

  const [isNavShowing, setIsNavShowing] = useState(false)
  return (
    
    <nav className='px-16 sm:px-20 flex justify-between items-center h-[80px] bg-[#1D1D1D] sticky top-0 z-30'>
        <div className=" sm:ml-6">
            <Image src={Logo} height={130} width={130} alt='logo'/>
            
        </div>
        <div className='relative '>
        <ul className={`flex gap-5   Nav_links ${isNavShowing ? "show__nav":"hide__nav"} `}>
            {
            links.map((link)=>(
                <li key={link.name}><Link href={link.path} onClick={()=> setIsNavShowing(false)}>{link.name}</Link></li>
            ))
            }
        </ul>
        
        <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ?<AiOutlineClose/>:<HiMenuAlt3/>
          }
        </button>
        </div>
    </nav>
        
  )
}

export default Navbar