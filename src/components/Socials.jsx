
import Link from 'next/link'
import React from 'react'
import {BsLinkedin }from 'react-icons/bs'
import {FaGithubSquare }from 'react-icons/fa'
import {TbBrandFiverr }from 'react-icons/tb'
import {BsFacebook }from 'react-icons/bs'
const Socials = ({className}) => {
  return (
    <div className={className}>
       
        <Link href='/' className='text-[20px] sm:text-[25px] socails_color'><TbBrandFiverr/></Link>
        <Link href='/' className='text-[20px] sm:text-[25px] socails_color'><FaGithubSquare/></Link>
        <Link href='/' className='text-[20px] sm:text-[25px] socails_color'><BsFacebook/></Link>
        <Link href='/' className='text-[20px] sm:text-[25px] socails_color'><BsLinkedin/></Link>
        
    </div>
  )
}

export default Socials