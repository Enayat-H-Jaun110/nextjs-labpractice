import React from 'react'
import product1 from '../../assets/images/product1.png'
import product2 from '../../assets/images/product2.png'
import product3 from '../../assets/images/product3.png'
import product4 from '../../assets/images/product4.png'
import product5 from '../../assets/images/product5.png'
import product6 from '../../assets/images/product6.png'
import Image from 'next/image'
   
export const Product = () => {
    const product =[
    {
    
        productNo: 1,
        image: product1,
        title: 'product',
        description: 'Description of first product',
        price:'$9.99'

},
{
    
    productNo: 2,
    image: product2,
    title: 'product',
    description: 'Description of second product',
    price:'$9.99'

},
{
    
    productNo: 3,
    image: product3,
    title: 'product',
    description: 'Description of third product',
    price:'$9.99'

},
{
    
    productNo: 4,
    image: product4,
    title: 'product',
    description: 'Description of fourth product',
    price:'$9.99'

},
{
    
    productNo: 5,
    image: product5,
    title: 'product',
    description: 'Description of fifth product',
    price:'$9.99'

},
{
    
    productNo: 6,
    image: product6,
    title: 'product',
    description: 'Description of sixth product',
    price:'$9.99'

}
    ];
   
  return (
       
    
        <div className='mx-14 mt-16'>
            <div className='text-4xl font-bold m-9'>Heading</div> 
    
            <div className='grid grid-cols-3 grid-rows-2 gap-8'>
            { product.map((product) => {
                return(
                 <div key={product.productNo}>
                    <div>
                        <Image src={product.image} alt='product' className='w-[454px] h-[240px] rounded-xl'
                        style={{objectFit: 'cover'}} />
                    </div>
                    <div className='text-[18px] font-medium '>
                        {product.title}
                    </div>
                    <div className='text-[15px] background: #828282 font-normal'>
                        {product.description}
                    </div>
                    <div className='text-[18px] font-medium'>
                        {product.price}
                    </div>

                 </div>   


                )
            }) }
            </div>
        </div>
      );
    }
    
   
  

