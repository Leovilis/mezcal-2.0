import CarouselSlider from '@/components/carousel-slider'
import React from 'react'

const Page = () => {
  return (
    <>
      <h1 className='uppercase font-bold text-3xl text-center mb-16 mt-5 md:mb-14 md:mt-10'>
        Galeria de fotos
      </h1>
    <CarouselSlider />
    </>
  )
}

export default Page