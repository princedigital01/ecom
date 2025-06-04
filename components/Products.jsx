"use client"
import {product} from '@/constants'
import Button from './ui/Button'
import Pcard from './ui/Pcard'
import { useEffect, useState } from 'react'



const Products = ({limit,extend}) => {


    const[list,setList] = useState(product)
    
    useEffect(()=>{
        if(limit)
        setList(product.slice(0,limit))
    
    },[])


    return (
        <div className="flex flex-col lg:gap-4 gap-2 pt-16">
            <div className="flex flex-col justify-center content-center text-center">
                <h1 className={`font-bold text-c-text h2 lg:text-3xl ${extend ? 'text-left font-serif' :""}`}>Our Products</h1>
                <div className='pt-3 lg:pt-10 flex flex-wrap lg:gap-4 gap-2 justify-center'>
                    {list.map((item)=>(
                        <Pcard className={" self-center shadow-lg"} effect key={item.id} {...item}/>
                    ))}
                    
                </div>
                <div className='flex justify-center mt-4'>
                    {extend ? (
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    ):(
                        <Button className={"h-10 w-48 lg:h-12 lg:w-60 p-4"} stroke={true} href={"/shop"}>Show more</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products