import Button from "./ui/Button"
import Image from "next/image"

const Hero1 = ({ className }) => {
  return (

    <div className={` ${className || ""} relative overflow-hidden h-[70vh] w-full pb-2 lg:pb-4  bg-c-light`}>

      <div className="left-0 top-0 lg:hidden absolute h-[70vh] w-full flex justify-end flex-col content-start md:justify-start">
        <img
          alt={"bg"}
          src={"/images/header.jpg"}
          className=""
        />
      </div>
      <div className="left-0 top-0 lg:flex hidden absolute  h-[70vh] w-full justify-start flex-col">
        <img
          alt={"bg"}
          src={"/images/header2.jpg"}
          className=""
        />
      </div>

      <div className=' lg:h-[100%] h-full lg:w-full lg:pr-10 w-full flex justify-center  items-center lg:justify-end lg:content-end'>

<div className="absolute  bg-c-secondary opacity-65  w-[80vw] h-[80%] lg:w-[600px] lg:h-[400px]  flex flex-col lg:pl-10 lg:pt-14 lg:gap-3 items-center p-2 gap-3 lg:items-start text-center lg:text-left pt-5 rounded-xl overflow-hidden"></div>
        <div className=' relative w-[80vw] h-[80%] lg:w-[600px] lg:h-[400px]  flex flex-col lg:pl-10 lg:pt-14 lg:gap-3 items-center p-2 gap-3 lg:items-start text-center lg:text-left pt-5 rounded-xl overflow-hidden'>
          

          <p className="text-sm font-semibold  text-c-text ">New Arrival</p>
          <h1 className=' text-2xl font-bold text-c-primary'>Discover Our <br />New Collection</h1>
          <p className=" text-c-text text-sm ">Browse through our diverse range of meticulously crafted
            garments, designed to bring out your individuality and
            cater to your sense of style.
          </p>
          <Button href={"/shop/new"} className={""}>BUY NOW</Button>

          
        </div>
      </div>



    </div>

  )
}

export default Hero1