import React from 'react'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Options from '../components/Options'

const Home = () => {
  return (
    <div className='relative w-screen h-[100vh]'>
      <Header></Header>
      <Logo></Logo>
      <Options></Options>
    </div>
  )
}

export default Home
