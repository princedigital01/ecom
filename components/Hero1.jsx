import Button from "./ui/Button"
import Image from "next/image"

const Hero1 = ({ className }) => {
  return (

    <div className={`header ${className || ""} h-[100%] w-full pb-4  bg-c-light flex flex-row justify-end`}>


      <div className='h-[100vh] w-1/2 flex  items-center'>

        <div className='bg-c-secondary w-[600px] h-[400px]  flex flex-col pl-10 pt-14 gap-3 rounded-xl'>

          <p className="font-semibold  text-c-text">New Arrival</p>
          <h1 className=' text-5xl font-bold text-c-primary'>Discover Our <br />New Collection</h1>
          <p className=" text-c-text">Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and
            cater to your sense of style.
          </p>
          <Button href={"/shop/new"}>BUY NOW</Button>

        </div>
      </div>

    </div>

  )
}

export default Hero1