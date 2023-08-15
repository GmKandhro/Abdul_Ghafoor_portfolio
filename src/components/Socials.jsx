
import Link from 'next/link'
import React from 'react'
import {BsLinkedin }from 'react-icons/bs'
import {FaGithubSquare }from 'react-icons/fa'
import {TbBrandFiverr }from 'react-icons/tb'
import {BsFacebook }from 'react-icons/bs'
const Socials = ({className}) => {
  return (
    <div className={className}>
       
        <Link href='http://surl.li/kchab' className='text-[20px] sm:text-[25px] socails_color' target='_blank'><TbBrandFiverr/></Link>
        <Link href='https://github.com/GmKandhro' className='text-[20px] sm:text-[25px] socails_color' target='_blank'><FaGithubSquare/></Link>
        <Link href='https://www.facebook.com/abdulghafoor.kandhro.790' className='text-[20px] sm:text-[25px] socails_color' target='_blank'><BsFacebook/></Link>
        <Link href='https://www.linkedin.com' className='text-[20px] sm:text-[25px] socails_color' target='_blank'><BsLinkedin/></Link>
        
    </div>
  )
}

export default Socials