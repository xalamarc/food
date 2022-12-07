import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Error from '../components/Error'

const Dessert = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 1000

  useEffect(() => {
    const size = () => setWidth(window.innerWidth)
    window.addEventListener('resize', size, false)
    return () => {
      window.removeEventListener('resize', size)
    }
  }, [])
  if (width < breakpoint) {
    return (
      <div>
        <Header />
        <div className='w-full h-screen flex flex-col mt-[100px]'>
          <div className='w-full h-full flex flex-col'>
            <div className='float-left w-full h-auto flex flex-col bg-DarkSeaGreen p-[20px] text-mate'>
              <h1 className='text-left font-bugaki text-xl p-[3px]'>
                Boost- Your Mood
              </h1>
              <h1 className='text-left font-bugaki text-base font-thin p-[3px]'>
                with yogur griego
              </h1>
              <h1 className='text-left font-bugaki text-lg p-[3px]'>. . .</h1>
              <ul className='text-white'>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Yogur griego
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Avena o frutos secos
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Cilantro fresco
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Todas las frutas que desees
                </li>
              </ul>
            </div>
            <div className='w-full h-1/6 bg-mate border-t-[1px] border-mate border-b-[1px] '>
              <img
                className='w-full h-full  object-cover'
                src='https://i.pinimg.com/564x/2e/39/3c/2e393cf49173f0d9add48e71ff12ce5c.jpg'
                alt=''
              />
            </div>
            <div className='w-full min-h-[50%] h-auto bg-lightGreen flex flex-col items-start p-[20px]'>
              <ul>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  1. Súper fácil. Cortas o pelas todas las frutas que quieras,
                  en un bowl, mezclas el yogur griego junto con las frutas y si
                  deseas, viertes avena o frutos secos.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      <Header />
      <Error />
    </>
  )
}

export default Dessert
