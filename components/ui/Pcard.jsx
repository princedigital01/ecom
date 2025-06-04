"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import * as Icons from "@/assets/icons"


function starGen({star}){
    if(star-1 ==4){
        return(
            <div>
                <img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" />
            </div>
            
        )
    }else if(star-1 ==3){
        return(
            <div>
                <img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" /><img src="/star.svg" className='star' alt="" />
            </div>
            
        )
    }
}

const Pcard = ({id,className, name,star, price, img,discount, tag, oldprice, effect}) => {
  return (
    <div className={`${className} h-[446px] w-[285px] relative inline-flex flex-col text-c-text group overflow-hidden bg-gray-100 group transition-all duration-300 mt-10 hover:mt-1`}>
        <div className="w-full h-[301px] flex justify-center">
        <img src={img || "/images/product/product-1.jpg" }
         className='w-full ' alt="image" 
          />
        </div>
        <div className="flex flex-col gap-3 mt-4">
        <h1 className="text-xl font-bold">{name || "One of a kind"}</h1>
        <div className='flex flex-row justify-start text-sm'> 
        <div className='flex flex-row pl-4'>
            
            <Image width={20} height={20} className='star' src="/images/Star.svg" alt="stars" />
            <Image width={20} height={20} className='star' src="/images/Star.svg" alt="stars" />
            <Image width={20} height={20} className='star' src="/images/Star.svg" alt="stars" />
            <Image width={20} height={20} className='star' src="/images/Star.svg" alt="stars" />
            <Image width={20} height={20} className='star' src="/images/Star.svg" alt="stars" />
        </div>
       <p className="text-black">{star}/</p>
       <p className="text-grey-2">5.0</p>
        </div>
        
        <div className="flex  pl-4 gap-4">
            <p className="text-c-text font-bold">{price || "contact us"}</p>
            <p className="text-grey-2 line-through"> {oldprice || ""}</p>
        </div>
        </div>
        <div className="absolute right-5 top-5">
            {discount ? (
                <div className="rounded-full bg-c-red h-10 w-10 text-sm text-white flex flex-col justify-center">{discount}</div>
            ): tag ?
            (
                <div className="rounded-full bg-c-green h-10 w-10 text-sm text-white flex flex-col justify-center">{tag}</div>
            ):(
                <div></div>
            )}
        </div>
        <div className="absolute left-0 top-0 bg-c-black h-[446px] w-[285px] content-center hidden flex-col justify-center  text-center  items-center gap-6  group-hover:flex ">
            <Button className={"w-[202px] h-[48px] font-bold text-sm"} white >add to cart</Button>
            <div className="flex justify-center gap-6">
                <Button className={" text-c-bg flex gap-1"} none >
                   <Icons.Share  size={20} color={"white"} strokeWidth={1}  fill={"white"}/> share
                </Button>
                <Button className={"text-c-bg flex gap-1"} none >
                    <Icons.Heart size={20} color={"white"} strokeWidth={2} fill={""}/> like
                </Button>
                
            </div>
            <Button href={`/shop/${id}`} className={"w-[202px] h-[48px] font-bold text-sm"} stroke white >read more...</Button>

        </div>
    </div>
  )
}

export default Pcard