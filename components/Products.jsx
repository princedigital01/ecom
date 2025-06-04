<<<<<<< HEAD
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

=======
import {product} from '@/constants'
import Button from './ui/Button'
import Pcard from './ui/Pcard'



const Products = ({limit,extend}) => {
    return (
        <div className="flex flex-col gap-4 pt-16">
            <div className="flex flex-col justify-center content-center text-center">
                <h1 className="font-bold text-c-text text-4xl">Our Products</h1>
                <div className='pt-10 flex flex-wrap gap-4 justify-center'>
                    {product.map((item)=>(
                        <Pcard className={" self-center"} effect key={item.id} {...item}/>
                    ))}
                    
                </div>
                <div className='flex justify-center mt-4'>
                    {extend ? (
                        <div>extend</div>
                    ):(
                        <Button className={"h-12 w-60 p-4"} stroke={true} href={"/shop"}>Show more</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

>>>>>>> 72ab78614fbbc9379365085ebf0c9f004550bbc9
export default Products