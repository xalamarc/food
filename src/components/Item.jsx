import React from 'react'

const Item = ({ title, subtitle, description, src }) => {
  return (
    <>
      <div className='h-[350px] w-[300px] border-[1px] border-mate m-[5px]'>
        <a href={`/${title}`}>
          <div className='w-full h-4/6 flex flex-col p-[10px] border-b-[1px] border-mate'>
            <div className='w-full border-b-[1px] border-mate'>
              <h1 className='text-lg font-bugaki p-[5px] text-left'>{title}</h1>
              <h1 className='text-lg font-bugaki p-[5px] text-left'>
                {subtitle}
              </h1>
            </div>
            <p className='p-2 font-tt text-lg text-justify'>{description}</p>
          </div>
        </a>
        <div className='w-full h-2/6'>
          <a href={`/${title}`}>
            <img className='w-full h-full object-cover' src={src} alt='' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Item
