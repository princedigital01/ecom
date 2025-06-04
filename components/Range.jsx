"use client"
import {ranges} from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Range = () => {
  return (
    <div className="flex flex-col gap-1 lg:gap-4 pt-5 lg:pt-10">
        <div className="flex flex-col justify-center content-center text-center">
            <h1 className="h2 lg:h1 text-c-text">Browse The Range</h1>
            <p className="text-c-title text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-row justify-evenly ">
            {ranges.map((item,i)=>(
                <Link key={i} href={`/shop/${item.title}`} className="flex flex-col justify-center text-center text-c-text group">
                    <div className="w-[30vw]   justify-center content-center">
                    <Image 
                         src={item.img} width={500} height={500} alt={item.title || "categoty"}
                        className=" w-full rounded-lg transition-all duration-300 pt-10 group-hover:pt-2"
                    />
                    </div>
                    <p className="text-xl font-semibold">{item.title}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Range