import React from 'react'

const Header = () => {
  return (
    <header className='rounded-none border-b-[1px] border-black flex fixed left-0 top-0 z-10 w-screen h-[100px] bg-white'>
      <div className='flex justify-center items-center relative w-6/12 h-full'>
        <a
          href='/'
          className='m-[20px] p-[10px] text-2xl font-bugaki font-bold text-DarkSeaGreen '
        >
          FoodSR
        </a>
      </div>
      <div className='relative justify-evenly items-center flex w-6/12 f-full flex-shrink '>
        <p className='p-[20px] text-base font-tt'>
          <a href='/'>Home</a>
        </p>
        <p className='p-[20px] text-base font-tt'>
          <a href='/recipe'>Recipe</a>
        </p>
      </div>
    </header>
  )
}

export default Header
