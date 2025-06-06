"use client"
import { product } from '@/constants'
import Button from './ui/Button'
import Pcard from './ui/Pcard'
import { useEffect, useState } from 'react'



const Products = ({ limit, extend }) => {


    const [list, setList] = useState(product)
    const [num, setNum] = useState(1);


    const getBtn = () => {
        const btn = []
        
        for (let i = 1; i <= Math.ceil(product.length / limit); i++) {
            btn.push((
                <Button 
                    key={i} 
                    href={"#productTitle"}
                    onClick={()=>{setNum(i)}}
                    className={`w-14 h-14 ${num==i ?"bg-c-primary":"bg-c-secondary text-c-text"}`}>{i}</Button>
            ))

        }
        return btn
    }

    useEffect(() => {
        if (limit)
            setList(product.slice(0, limit))

    }, [])

    useEffect(() => {
        setList(product.slice((num*limit)-limit,num*limit))
        

    }, [num,limit])

    useEffect(()=>{
        if(Math.ceil(product.length / limit)< num)
            {setNum(1)}
    },[list])


    return (
        <div className="flex flex-col lg:gap-4 gap-2 pt-16 overflow-hidden">
            <div className="flex flex-col justify-center content-center text-center">
                <h1 id='productTitle' className={`font-bold text-c-text h2 lg:text-3xl ${extend ? 'text-left font-serif' : ""}`}>Our Products</h1>
                <div className='pt-3 lg:pt-10 flex flex-wrap lg:gap-4 gap-2 justify-center'>
                    {list.map((item) => (
                        <Pcard className={" self-center shadow-lg"} effect key={item.id} {...item} />
                    ))}

                </div>
                <div className='flex justify-center mt-4'>
                    {extend ? (
                        <div className='flex gap-6 pt-6 pb-6 w-[80hv] overflow-x-auto'>
                            {getBtn()}
                        </div>


                    ) : (
                        <Button className={"h-10 w-48 lg:h-12 lg:w-60 p-4"} stroke={true} href={"/shop"}>Show more</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Products