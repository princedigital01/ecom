<<<<<<< HEAD
"use client"
import React, { useEffect, useState } from 'react'
import { product } from '@/constants'
import Image from 'next/image'
import Button from './ui/Button'
import { Right } from "@/assets/icons";


const slides = product

const Carousel = () => {

  const [curr, setCurr] = useState(0);
  const autoSlide = true;
  const autoSlideInterval = 3000;

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {

    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className=' pt-12 pb-12 '>
      <div className='lg:hidden text-2xl font-bold text-c-text text-center'>50+ Beautiful fasion inspiration</div>
      <div className=' relative mt-12 mb-6  pt-6 pb-6 bg-c-secondary bg-opacity-0 h-[80vh]'>


        <div className=' flex absolute left-0 top-0'>

          <div className='hidden w-[40%] overflow-hidden lg:flex flex-col justify-center'>
            <div className=' text-c-text lg:flex flex-col gap-4 p-12 pl-24'>
              <div className=' font-bold text-4xl'>50+ Beautiful fasion inspiration</div>
              <p className='font-medium text-c-title'>Our designer already made a lot of beautiful prototipe that will inspire you</p>

              <Button href={"/shop/inspire"} className="h-12 w-48">Explore More</Button>
            </div>
          </div>
          <div className='overflow-hidden relative lg:w-[60%] w-full pt-6'>
            <div className={`flex transition-transform ease-out duration-500`} style={{ transform: `translateX(-${curr * 68}%)` }}>
              {slides.map((item, i) => (
                <div key={i} className='relative flex-none  text-white h-[60vh] md:h-[70vh] w-[70%]'>

                  <div className={`flex flex-row justify-center items-center transition-all ease-out duration-500 w-auto ${curr == i ? "h-full" : "h-[80%]"}`}>
                    <Image

                      src={item.img}
                      width={200}
                      height={200}
                      alt={"img"}
                      className='border border-c-black h-[100%] w-auto '

                    />
                  </div>

                  <div className='absolute top-0 pb-12 left-0 w-full h-full flex justify-center'>
                    {
                      curr == i ? (
                        <div className='flex flex-row justify-end items-end'>
                          <div className=' bg-white bg-opacity-60 p-4  min-w-52 max-w-[80%] max-h-96 h-32 overflow-hidden justify-center items-center flex flex-col'>
                            <div className='text-c-text'>{curr + 1}_{item.name}</div>
                            <div className=' text-c-title font-bold text-3xl'>{item.name}</div>

                          </div>
                          <Button className={'w-10 h-10 flex justify-center items-center'}>
                            <Right />
                          </Button>
                        </div>
                      ) : ("")
                    }
                  </div>
                </div>
              ))
              }
              

            </div>
            <div className='h-[50%] absolute flex inset-0 items-end  justify-between p-3'>
              <button onClick={prev} className='icon-btn bg-white text-c-primary rounded-full text-lg font-bold p-1 shadow-lg w-10 h-10'>{"<"}</button>
              <button onClick={next} className='icon-btn bg-white text-c-primary rounded-full text-lg font-bold p-1 shadow-lg w-10 h-10'>{'>'}</button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
              <div className=' flex items-center justify-center gap-3'>
                {slides.map((_, i) => (

                  <div key={i} className={` flex justify-center items-center transition-all w-3 h-3 rounded-full ${curr == i ? 'bg-c-primary' : 'bg-grey-3 bg-opacity-50'}`} >
                    <div key={i} className={` transition-all w-3 h-3 rounded-full ${curr == i ? 'border border-c-primary p-3' : ''}`} />
                  </div>


                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='lg:hidden text-center flex content-center items-center flex-col'>
        <Button href={"/shop/inspire"} className="h-12 w-48">Explore More</Button>
      </div>
    </div>
  )
}

=======
import React from 'react'

const Carousel = () => {
  return (
    <div>
        
    </div>
  )
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export default Carousel