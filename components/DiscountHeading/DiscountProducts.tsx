import Image from 'next/image'
import React from 'react'
import bigImage from '../../assets/images/Card big.png'
import product1 from '../../assets/images/Card list.png'


export const DiscountProducts = () => {
  return (
    <div className='mt-16 mx-14'>
        <div className='text-4xl m-9 font-bold'>
            Heading
        </div>
       <div className='flex gap-5'> 
        <div>
            <Image src={bigImage} alt='pic'/>
            
        </div>
        <div>
            <Image src={product1}alt='product1'/>
            
        </div>

      </div>

    </div>
  )
}
