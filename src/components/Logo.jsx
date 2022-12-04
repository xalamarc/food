import React from 'react'
import peace from '../assets/peace.png'
import depresse from '../assets/depresse.png'

const Logo = () => {
  return (
    <>
      <div className=' flex justify-center items-center p-[10px] h-1/2 min-h-[250px] w-screen  border-b-black border-b-[1px] bg-Moccasin'>
        <div className='flex mt-[50px] justify-center items-center'>
          <img
            className='  w-full h-[auto] sm:min-h-[90px] sm:min-w-[90px] min-h-[50px] max-h-[50px] min-w-[50px] opacity-70 max-w-[50px]'
            src={depresse}
            alt='Depresse food'
          />
          <h1 className='sm:text-4xl m-[10px] text-3xl font-bugaki text-center text-black'>
            <p>Food Mood</p>
          </h1>
          <img
            className='  w-full h-[auto] sm:min-h-[90px] sm:min-w-[90px] min-h-[50px] max-h-[50px] min-w-[50px] opacity-70 max-w-[50px]'
            src={peace}
            alt='Happy food'
          />
        </div>
      </div>
    </>
  )
}

export default Logo
