import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import huevos from '../assets/huevos.jpg'

const Breakfast = () => {
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
      <>
        <Header />
        <div className='w-full h-screen flex flex-col mt-[100px]'>
          <div className='w-full h-auto bg-DarkSeaGreen'>
            <div className='float-left w-7/12 h-full flex flex-col m-[20px]'>
              <h1 className='text-left font-bugaki text-xl p-[3px]'>
                Boost- Your Mood
              </h1>
              <h1 className='text-left font-bugaki text-base font-thin p-[3px]'>
                with Huevos Rancheros
              </h1>
              <h1 className='text-left font-bugaki text-lg p-[3px]'>. . .</h1>
              <ul>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  4 tomates pera maduros
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  ½ cebolla blanca o morada
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  Cilantro fresco
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  1 diente de ajo
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  2 huevos
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  2 tortillas de trigo o de maíz
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  Aceite de oliva
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  Sal al gusto
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  Azucar a gusto
                </li>
              </ul>
            </div>
          </div>
          <div className='w-full h-full bg-mate'>
            <img
              src={huevos}
              className='w-full h-auto max-h-[200px] object-cover border-t-[1px] border-mate border-b-[1px]'
              alt='Huevos Rancheros'
            />
            <div className='w-full h-auto bg-papayaWhip flex flex-col items-start p-[20px]'>
              <ul>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  1. Lavamos bien los tomates y pelamos, también el diente de
                  ajo y hervimos en una olla durante 10-15 min.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  2. Retiramos de la olla y picamos todo en trocitos pequeños.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  3. Pelamos y picamos la cebolla junto con el cilantro. En una
                  sartén añadimos el aceite de oliva y calentamos a fuego medio.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  4. Sofreímos la cebolla en la sartén hasta que cambie de
                  color, añadimos todos los ingredientes y sofreímos lentamente.
                  En mitad de la cocción, colocamos sal y azúcar a gusto.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  5. En otra sartén, colocamos unas gotas de aceite de oliva y
                  doramos las tortillas. Una a una, por ambas caras. Las
                  retiramos y las reservamos en un ambiente caliente.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  6. Luego freímos los huevos
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  7. Servimos con encima de las tortillas calientes que servirán
                  a modo de plato y perfectas para mojar en el huevo y empujar
                  con la salsa de tomate picante que acompañan los huevos fritos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      <div>Not aveilable</div>
    </>
  )
}

export default Breakfast
