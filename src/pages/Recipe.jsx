import React, { useDebugValue } from 'react'
import Header from '../components/Header'
import Item from '../components/Item'

const Recipe = () => {
  return (
    <>
      <Header></Header>
      <div className='w-screen h-screen flex flex-wrap'>
        <div className='w-full mt-[100px]  bg-DarkSeaGreen flex flex-wrap justify-center'>
          <Item
            title='breakfast'
            subtitle='Huevos rancheros'
            description='Tortillas de maíz con los deliciosos Frijoles Refritos y huevos
            fritos, luego sumergidos en una suave salsa de tomate y chile.'
            src='https://bellyfull.net/wp-content/uploads/2021/04/Huevos-Rancheros-blog.jpg'
          />
          <Item
            title='lunch'
            subtitle='spaghetti a la boloñesa'
            description='Esta receta contiene carne, pasta y verduras. La boloñesa es una salsa típica italiana, elaborada a base de tomate y carne picada'
            src='https://www.gastrolabweb.com/u/fotografias/m/2021/4/28/f850x638-12413_89902_6649.jpg'
          />
          <Item
            title='dessert'
            subtitle='griego con frutas'
            description='Mezcla de diversas frutas (frutos rojos, mango, platano, frutilla, arandanos, etc) junto con yogur griego y avena o frutos secos.'
            src='https://mx.hola.com/imagenes/cocina/recetas/20210318186319/bowl-yogur-natural-fruta-muesli/0-932-147/bowl-yogur-fruta-m.jpg'
          />
          <Item
            title='dinner'
            subtitle='pizza'
            description='Una pizza caliente que satisface el olfato, acompañado de una lluvia mientras ves tu serie favorita o pelicula (la pizza sin grasa)'
            src='https://media-cdn.tripadvisor.com/media/photo-s/08/b3/38/cf/pizza-milano.jpg'
          />
        </div>
      </div>
    </>
  )
}

export default Recipe
