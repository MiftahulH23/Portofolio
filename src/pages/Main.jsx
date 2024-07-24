import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'

const Main = () => {
  return (
    <div className='bg-dark h-fit flex flex-col gap-10 px-10 py-5'>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default Main