import React from 'react'
import images from '../images'

const Options = () => {
  return (
    <>
      <div className='w-full h-1/2 bottom-0 relative'>
        <div className='flex justify-center  border-r-[1px] border-r-mate float-left h-full w-6/12 flex-col'>
          <div className='bg-orangeRed  flex items-center justify-center h-[auto] w-[auto] p-[10px] mx-[30px] my-[10px] rounded-[30px]'>
            <a
              href='/breakfast'
              className='bg-orangeRed text-black text-lg font-tt font-semibold'
            >
              Breakfast
            </a>
          </div>
          <div className='bg-papayaWhip  flex items-center justify-center h-[auto] w-[auto] p-[10px] mx-[30px] my-[10px] rounded-[30px]'>
            <a
              href='/lunch'
              className='bg-papayaWhip  text-black text-lg font-tt font-semibold'
            >
              Lunch
            </a>
          </div>
          <div className='bg-lightGreen  flex items-center justify-center h-[auto] w-[auto] p-[10px] mx-[30px] my-[10px] rounded-[30px]'>
            <a
              href='/dessert'
              className=' bg-lightGreen  text-black text-lg font-tt font-semibold'
            >
              Dessert
            </a>
          </div>
          <div className='bg-DarkSeaGreen  flex items-center justify-center h-[auto] w-[auto] p-[10px] mx-[30px] my-[10px] rounded-[30px]'>
            <a
              href='/dinner'
              className='bg-DarkSeaGreen  text-black text-lg font-tt font-semibold'
            >
              Dinner
            </a>
          </div>
        </div>
        <div className='float-right h-full w-6/12 flex flex-wrap justify-center items-center'>
          {images.map((item) => (
            <img
              className='css animation rounded-full border-[1px] border-mate m-[5px] object-cover w-full text-center h-[auto] max-h-[70px] max-w-[70px]'
              src={item.src}
              alt='FoodSR'
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Options
