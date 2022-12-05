import React from 'react'
import Header from '../components/Header'

const Dinner = () => {
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
              <li className='p-[3px] text-base font-tt font-thin'>Levadura</li>
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
                1. En un vaso, vierte el agua templada. Disuelve la levadura en
                el agua. En un bol ponemos la harina, la sal y, poco a poco,
                vertemos el agua con la levadura. Es más fácil si vamos amasando
                poco a poco a medida que echamos el agua, hasta verter toda y
                lograr una masa homogénea. Tras esto, coloca la masa en la
                encimera, cúbrete las manos de harina para que no se pegue y
                ponte a amasar. Si la masa se queda pegajosa ve añadiendo más
                harina. Ésta tiene que quedar lo suficientemente seca para que
                no se pegue en la mesa o las manos, pero no demasiado, porque si
                no puede romperse en el horno. Una vez que la masa esté
                homogénea, elástica, pero no pegajosa, incorpora el aceite, y
                vuelve a amasar hasta que se integre por completo. Haz una bola
                y realiza dos incisiones para que pueda crecer bien. Devúelvela
                al bol, tápalo con un paño humedo y dejalo que repose a
                temperatura ambiente.
              </li>
              <li className='p-[3px] text-base font-tt font-semibold'>
                2. Con la masa lista, añade todos los toppings que desees.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dinner
