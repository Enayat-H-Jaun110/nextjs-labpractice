import Bodye from '@/components/body/Body'
import { DiscountProducts } from '@/components/DiscountHeading/DiscountProducts'
import { Footer } from '@/components/Footer/Footer'
import NavBar from '@/components/navbar/navbar'
import { Product } from '@/components/product/product'

import React from 'react'

const Home = () => {
  return (
    <main>
      <NavBar />
      <Bodye />
      <Product />
      <DiscountProducts />
      <Footer />
    
    </main>
  )
}

export default Home