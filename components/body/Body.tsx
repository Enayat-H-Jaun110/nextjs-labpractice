import Image from 'next/image'
import React from 'react'
import frontImage from '../../assets/images/download (1).jpeg'
import { Button } from '../ui/button'
const Bodye = () => {
  return (
    <div className='flex justify-center py-5'>
     <div className='absolute'>
        <Image 
        src={frontImage}
        alt='image'
        className='flex items-center bg-gray-400 w-[1275px] h-[597px] rounded-xl opacity-70'
        style={{ objectFit:"cover"}}

        />
     </div>
     <div className='flex flex-col relative h-[597px] gap-y-5 justify-center items-center'>
            <div className='text-6xl sm:text-6xl text-white font-bold'>Shop Title
            </div>
        
        <div className=' text-xl sm:text-xl text-white font-medium'>
            
            Subheading with description with your Shopping site
        </div>
         
        <div>
            <Button>Button</Button>
        </div>
     </div>
     

    </div>
  )
}

export default Bodye