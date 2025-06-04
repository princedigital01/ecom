import Hero1 from "@/components/Hero1"
import Range from "@/components/Range"
import Products from "@/components/Products"
import Carousel from "@/components/Carousel"
import Testimonial from "@/components/Testimonial"


export default function Home() {

  return (
    <div className="">
      <Hero1 className={""}/>
      <Range/>
      <Products extend={false} limit={"5"}/>
      <Carousel/>
      <Testimonial/>
      </div>
  )
}