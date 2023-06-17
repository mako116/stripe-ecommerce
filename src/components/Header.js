import React from 'react'
import {eco, img} from '../assets/images/index'
import { logo } from '../assets/images'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
  const Header = () => {
    const productData = useSelector((state)=> state.mako.productData)
    const userInfo = useSelector((state)=> state.mako.userInfo)
   return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50'>
       <div className='max-w-screen-x1 h-full mx-auto flex ml-5 mr-5 items-center justify-between'>
        <Link to="/">
        <div>
        <img src={logo} alt=""  className='w-10'/>
       </div>
        </Link>
       <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
            <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Home</li>
             <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>page</li>
             <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>shop</li>
             <li className='text-base text-black font-bold hover:text-orange-900
            hover:underline underline-offset-2 decoration-[1px] cursor-pointer'>Blog</li>
        </ul>
       <Link to="/cart">
       <div className='relative'>
            <img className='w-6' src={eco} alt="CartImg" />
            <span className='absolute w-6 top-2 left-0 text-sm flex items-center
            justify-center font-semibold font-titleFont'>
              {productData.length}
            </span>
        </div>
       </Link>
       <Link to="/login">
       <img className='w-8 h-8 row border-[2px] border-b-gray-800 rounded-full' 
        src={
          userInfo 
          ? userInfo.image
          :  "https://images.pexels.com/photos/15637514/pexels-photo-15637514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
           alt="userLogo" />
       </Link>
       {
        userInfo && <p>{userInfo.name}</p>
       }
     </div>
     </div>
   
     </div>
  )
}

export default Header
