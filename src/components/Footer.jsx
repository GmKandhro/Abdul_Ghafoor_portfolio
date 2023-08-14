import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '../../public/logo1.png' 
const Footer = () => {
  return (
    <div className='mt-10 bg-[#1d1d1d]'>
      <footer className="text-gray-600 body-font Container ">
  <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
    <Link href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
      {/* <svg xmlns="http://www.w3.org/2000/svg" >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <Image src={Logo} width={100} height={100} alt='logo' />
      
    </Link>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Ab Ghafoor —
      Portfolio
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer