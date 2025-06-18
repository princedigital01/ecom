"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

const Hero2 = ({className, ...props }) => {
  const pathname= usePathname();
  return (
    <div className={`${className} flex relative overflow-hidden h-[50vh] justify-center items-center`} {...props}>
      <div className=' flex flex-col items-center text-center justify-center content-center align-middle'>
        <Image
          width={200}
          height={200}
          alt='logo'
          src={"/images/logo.svg"}
          className='w-14 h-14'
        />
        <div className='text-5xl font-semibold text-c-text'>{pathname.slice(1)}</div>
        <div>
          <Link href={"/home"} className='font-semibold'>Home {'>'}</Link>
          {pathname.slice(1)}
        </div>
      </div>
      <div className='flex items-end -z-10 left-0 top-0 absolute w-[100vw] blur-sm'>
        <Image
         width={200}
         height={200}
         alt=""
         src={"/images/headbg.png"}
         className='w-full h-auto -translate-y-52' 
        />
      </div>
    </div>
  )
}

export default Hero2