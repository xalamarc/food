import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Error from '../components/Error'

const Lunch = () => {
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
          <div className='w-full h-full flex flex-col'>
            <div className='float-left w-full h-auto flex flex-col bg-mate p-[20px] text-papayaWhip'>
              <h1 className='text-left font-bugaki text-xl p-[3px]'>
                Boost- Your Mood
              </h1>
              <h1 className='text-left font-bugaki text-base font-thin p-[3px]'>
                with spaghetti a la boloñesa
              </h1>
              <h1 className='text-left font-bugaki text-lg p-[3px]'>. . .</h1>
              <ul className='text-Moccasin'>
                <li className='p-[3px] text-base font-tt font-thin'>
                  1 bote de tomate triturado
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  1 cucharada de azúcar, Sal al gusto
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Queso parmesano rallado
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  1 diente de ajo
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  2 huevos
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  500 gr de espaguetis
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  1/2 cebolla
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  400 gr de carne picada
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Orégano, Albahaca fresca, Perejil
                </li>
              </ul>
            </div>
            <div className='w-full h-1/6 bg-mate border-t-[1px] border-mate border-b-[1px] '>
              <img
                className='w-full h-full  object-cover'
                src='https://i.pinimg.com/564x/9a/fe/6a/9afe6afce6acb4577a67633f6460dc72.jpg'
                alt=''
              />
            </div>
            <div className='w-full  h-auto bg-papayaWhip flex flex-col items-start p-[20px]'>
              <ul>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  1. Ponemos a calentar la sartén con un chorro de aceite de
                  oliva, luego echamos el diente de ajo junto con la cebolla,
                  esperamos que se doren.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  2. Cuando ya esté listo la cebolla, echamos el tomate
                  triturado y bajamos el fuego. Pasados unos minutos, echamos
                  sal a gusto junto con el azúcar, y un poquito de perejil y
                  orégano. Removemos bien y dejamos que cueza 15 min.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  3. En un bol aparte mezclamos la carne picada con el zumo de
                  medio limón, y lo aderezamos con un poquito de perejil y sal
                  al gusto. Ponemos aceite de oliva virgen extra en una sartén
                  y, cuando esté caliente, echamos la carne en ella y la dejamos
                  hasta que esté doradita pero no hecha del todo.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  4. Entonces, echamos la carne en la cacerola con la salsa de
                  tomate y dejamos que termine de hacerse a fuego lento.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  5. Mientras vamos cociendo los espaguetis en una cacerola con
                  agua abundante y un poquito de sal al gusto. Cuando estén al
                  dente, los escurrimos y los echamos en la cacerola de salsa
                  boloñesa para que cojan todo el sabor de la carne y del
                  tomate.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  6. A la hora de servir los espaguetis boloñesa, podemos añadir
                  un poquito de queso parmesano rallado y, si nos gusta,
                  albahaca fresca que les da un sabor buenísimo.
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
      <Error />
    </>
  )
}

export default Lunch
