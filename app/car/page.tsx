import Image from "next/image"

const Carousel = () => {
  return (
    <div className='container mt-6 mb-6'>
      <div className='relative'>
        <button id='prev-btn' className='absolute left-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10'>{'<'}</button>
        <button id='next-btn' className='absolute right-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 rounded-full p-2 shadow-lg z-10'>{'>'}</button>
        <div className='overflow-hidden'>
          <div id='carousel' className='carousel-container flex gap-6 overflow-x-auto py-7 px-2'>
            <div className='product-card flex-none w-72 bg-gray-800 rounded-xl overflow-hidden shadow-lg'>
              <div className='relative'>
                <Image alt="d"
                  src="/"
                  className='bg-red-600 h-48 w-full object-cover' 
                />
                <div className='absolute top-2 right-2 flex'>
                  <button className='icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg'>like</button>
                  <button className='icon-btn bg-white text-gray-900 rounded-full py-2 px-3 shadow-lg'>like</button>
                </div>
              </div>
              <div>
                <a href="" className='text-lg font-semibold'>Headphone</a>
                <span className='text-indigo-400 font-bold'>#1000</span>
                <div className='flex items-center text-yellow-400'>
                  <span className='text-grey-400 text-xs ml-2'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Carousel