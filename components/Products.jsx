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

export default Products