'use client'
import { Right, Star, Verified } from "@/assets/icons";
import { testimonials } from "@/constants";
import { useEffect, useState } from "react";


const Testimonial = () => {

  const slides = testimonials;
  const autoSlide = false;
  const autoSlideInterval = 3000;
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? 0 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? slides.length - 1 : curr + 1))

  useEffect(() => {

    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])


  return (
    <div className='mt-10  mb-1 p-4 relative overflow-hidden'>
      <div className='text-2xl text-c-text font-bold'>OUR HAPPY CUSTOMERS</div>
      <div className="h-[40vh]">
        <div className="flex justify-between w-[100vw] h-[40vh] absolute z-10">
            <div className="w-[10vw] h-full backdrop-blur-[1px]"></div>
            <div className="w-[10vw] h-full backdrop-blur-[1px]"></div>
        </div>
        <div className="relative w-[70vw] md:w-[46vw] lg:w-[33vw] flex flex-row gap-2 mt-12 transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 99}%)` }}>
          
          {slides.map((item) => (
            <div key={item.id} className="flex-none border p-4 rounded-md flex flex-col gap-2 w-[70vw] md:w-[46vw] lg:w-[33vw]">
              <div className="flex">
                <Star/><Star/><Star/><Star/><Star/>
              </div>
              <div className="text-c-text font-bold text-tiny font-serif flex gap-1">{item.name} <Verified size="14"/></div>
              <div className="text-c-title text-tiny font-thin ">{item.description}</div>

            </div>
          ))}
        </div>
      </div>
      <div className=" absolute left-[80vw] top-0 flex gap-2">
        <button onClick={prev} className='text-c-primary rounded-full text-lg font-bold p-1 w-10 h-10'><Right color={"black"} className={"rotate-180"}/></button>
        <button onClick={next} className='text-c-primary rounded-full text-lg font-bold p-1 w-10 h-10'><Right color={"black"}/></button>
      </div>
    </div>
  )
}

export default Testimonial