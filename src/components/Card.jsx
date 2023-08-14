import React from 'react'
import {CgWebsite} from "react-icons/cg"

import Image from 'next/image'
const Card = ({Img,className,title}) => {
  return (
    <div className={className}>
      <div >
        {Img}
      </div>
      <div>
        <h1 className='text-[1.5rem] leading-5 '>{title}</h1>
        <p className='font-thin '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Card