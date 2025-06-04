<<<<<<< HEAD
import { help, name, nav } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-10 pb-5 text-sm justify-center  '>
      <div className='flex flex-col gap-5 lg:flex-row lg:justify-evenly border-t-2 border-b-2 p-14'>
        <div className='flex flex-col gap-3'>
          <div className='hover:text-c-primary text-xl font-bold text-c-text'>
            {name}.
          </div>
          <div className='font-thin  text-c-title flex flex-row lg:flex-col'>
            <span>490 University Drive suite 200 coral&nbsp;</span>
            <span>Gabies,&nbsp;</span>
            <span>Fl 33134 USA</span>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-5  md:gap-20 lg:justify-center'>
          <div className='flex flex-row mt-4 justify-around gap-5 md:gap-20'>
            <div className='links flex flex-col gap-5 '>
              <div className='text-grey-2'>Links</div>
              {nav.map((link) => (
                <Link key={link.id} href={link.link} className=' hover:text-c-primary active:text-bg-secondary'>
                  {link.text}
                </Link>
              ))}
            </div>
            <div className='help  flex flex-col gap-5'>
              <div className='text-grey-2'>Helps</div>
              {help.map((link) => (
                <Link key={link.id} href={link.link} className='text-c-text hover:text-c-primary active:text-bg-secondary'>{link.text}</Link>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-7 items-center'>
            <div className='font-semibold text-c-title'>newsletter</div>
            <div className='flex flex-row gap-1'>
              <input className="border-b-2 border-c-title" type="email" placeholder='Enter Your Email Address' />
              <button className='hover:text-c-primary font-semibold border-b-2 border-c-text'>SUSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {new Date().getFullYear()} {name} All right reserved
      </div>
    </div>
  )
}

=======
import React from 'react'

const Footer = () => {
  return (
    <div>Footer</div>
  )
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export default Footer