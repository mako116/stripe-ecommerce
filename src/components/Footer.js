import React from 'react'
import {ImGithub} from 'react-icons/im'
 import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from 'react-icons/fa'
import {MdLocationOn} from "react-icons/md"
import {BsPersonFill, BsPaypal} from "react-icons/bs"
 import { imgs, logo } from '../assets/images'
 const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className="max-w-screen-x1 mx-6 grid grid-cols-4">
      {/* logoICOn */}
        <div className="flex flex-col gap-7">
          <img src={logo} alt="text" className='w-32' />
          <p className='text-white text-sm tracking-wide'>
            @rendermart.com
           </p>
         <img src={imgs} alt="" className='w-56'/>
         <div className='flex gap-5 text-lg text-gray-400'>
            <ImGithub className='hover:text-white duration-300 cursor-pointer'/>
            <FaYoutube className='hover:text-white duration-300 cursor-pointer'/>
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
            <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
            <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
         </div>
        </div>
        {/* locating */}
       <div>
          <h2 className='text-2x1 font-semibold text-white mb-4'>know about us</h2>
           <div className='text-base flex flex-col gap-2'>
            <p>No 10, victoria island</p>
            <p>Phone:08100319613</p>
            <p>e-mail:nwakwueemaanuel1@gmail.com</p>
          </div>
       </div>
       <div>
           <h2 className='text-2x1 font-semibold text-white mb-4'>profile</h2>
          <div className="flex  flex-col gap-2 text-base">
          <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
           <span className='text-lg'>
            <BsPersonFill/>
         </span>
            account
           </p>
       
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <BsPaypal/>
        </span>
        checkout
        </p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <FaHome/>
        </span>
        order tracking
        </p>
        <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'>
        <span className='text-lg'>
            <MdLocationOn/>
        </span>
         help & support
        </p>   
          </div>
      </div>
      <div className="flex flex-col justify-center">
        <input type="text"
        className='bg-transparent border px-4 py-2 text-sm'
        placeholder='e-mail'
         />
        <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>subcribe</button>
      </div>
      </div>
    </div>

  )
} 

export default Footer
