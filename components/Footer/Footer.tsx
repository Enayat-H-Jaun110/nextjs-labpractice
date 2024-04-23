import { Fullscreen } from 'lucide-react'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='flex mx-12 mt-20 justify-between' >
        <div className='flex flex-col'>
        <div className='flex  p-4 font-bold'>
            SiteName
        </div>
        <div className='flex p-4 gap-2'>
            <FaFacebookF />
            <IoLogoLinkedin />
            <FaYoutube />
            <FaInstagramSquare />
        </div>
        </div>
       <div className='flex justify-center items-center gap-44'> 
        <div>
            <div>Topic</div>
            <div>Page</div>
            <div>Page</div>
            <div>Page</div>
        </div>

        <div>
            <div>Topic</div>
            <div>Page</div>
            <div>Page</div>
            <div>Page</div>
        </div>
        <div>
            <div>Topic</div>
            <div>Page</div>
            <div>Page</div>
            <div>Page</div>
        </div>
        </div> 
        </div>
  )
}
