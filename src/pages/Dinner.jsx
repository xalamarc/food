import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Error from '../components/Error'

const Dinner = () => {
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
            <div className='float-left w-full h-auto flex flex-col bg-orangeRed p-[20px] text-mate'>
              <h1 className='text-left font-bugaki text-xl p-[3px]'>
                Boost- Your Mood
              </h1>
              <h1 className='text-left font-bugaki text-base font-thin p-[3px]'>
                with yogur griego
              </h1>
              <h1 className='text-left font-bugaki text-lg p-[3px]'>. . .</h1>
              <ul className='text-white'>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Para 2 unidades
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Harina de trigo 160 g
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Agua templada 100 ml
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>Sal</li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Aceite de oliva virgen extra cucharada
                </li>
                <li className='p-[3px] text-base font-tt font-thin'>
                  Levadura
                </li>
              </ul>
            </div>
            <div className='w-full h-1/6 bg-mate border-t-[1px] border-mate border-b-[1px] '>
              <img
                className='w-full h-full  object-cover'
                src='https://i.pinimg.com/564x/90/66/e9/9066e989de22c6590ff215de92ef46f7.jpg'
                alt=''
              />
            </div>
            <div className='w-full h-auto bg-DarkSeaGreen flex flex-col items-start p-[20px]'>
              <ul>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  1. En un vaso, vierte el agua templada. Disuelve la levadura
                  en el agua. En un bol ponemos la harina, la sal y, poco a
                  poco, vertemos el agua con la levadura. Es m??s f??cil si vamos
                  amasando poco a poco a medida que echamos el agua, hasta
                  verter toda y lograr una masa homog??nea. Tras esto, coloca la
                  masa en la encimera, c??brete las manos de harina para que no
                  se pegue y ponte a amasar. Si la masa se queda pegajosa ve
                  a??adiendo m??s harina. ??sta tiene que quedar lo suficientemente
                  seca para que no se pegue en la mesa o las manos, pero no
                  demasiado, porque si no puede romperse en el horno. Una vez
                  que la masa est?? homog??nea, el??stica, pero no pegajosa,
                  incorpora el aceite, y vuelve a amasar hasta que se integre
                  por completo. Haz una bola y realiza dos incisiones para que
                  pueda crecer bien. Dev??elvela al bol, t??palo con un pa??o
                  humedo y dejalo que repose a temperatura ambiente.
                </li>
                <li className='p-[3px] text-base font-tt font-semibold'>
                  2. Con la masa lista, a??ade todos los toppings que desees.
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

export default Dinner
