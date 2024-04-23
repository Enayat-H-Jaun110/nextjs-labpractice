import React from 'react'
import { Button } from '../ui/button'
import { CiMenuBurger } from "react-icons/ci";
import { RxHamburgerMenu } from 'react-icons/rx';

const NavBar = () => {
  return (
    <div className='flex  bg-[#EDEFF1] p-10  items-center justify-between    '>
        <div className='pl-14 flex text-2xl'>
            <p className='text-bold'>SiteName</p>
        </div>
        <div className='lg:hidden'>
            <RxHamburgerMenu size={20}/>
        </div>
     <div className='hidden lg:flex gap-4'>
       <div>
        <Button variant={'link'} className='text-[16px]'>page</Button> 
       </div>
       <div>
       <Button variant={'link'} className='text-[16px]'>page</Button> 
       </div>
       <div>
       <Button variant={'link'} className='text-[16px]'>page</Button> 
       </div>
       <div>
       <Button variant={'link'} className='text-[16px]'>page</Button> 
       </div>
       <div className='ml-5'>
       <Button variant={'secondary'} className='bg-black text-white text-[16px]'>Button</Button> 
       </div>

     </div>
    </div>
    

    
    
  )
}

export default NavBar