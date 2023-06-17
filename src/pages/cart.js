import React, { useEffect, useState } from 'react'
import Cartitem from '../components/cartitem';
import { banner} from '../assets/images';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import StripeCheckout from "react-stripe-checkout"
const Cart = () => {
  const productData = useSelector((state)=> state.mako.productData)
const [totalAmt , setTotalAmt] = useState("")
const userInfo = useSelector((state)=> state.mako.userInfo)
const [payNow , setPayNow] = useState(false)
useEffect(()=>{
  let price = 0 ;
  productData.map((item)=>{
    price += item.price * item.quantity;
    return price
  })
  setTotalAmt(price.toFixed(3));
},[productData])
const handleCheckout =()=>{
  if(userInfo){
     setPayNow(true)
  }else{
    toast.error("please sign in to checkout")
  }
}
  return (
    <div>
      <img 
      className='w-full h-60 object-cover' src={banner} alt="cartImg" />
  <div className='max-w-screen-x1 ml-10 py-20 flex'>
    <Cartitem/>
    <div className="w-1/3 bg-[#fafafa] py-6 px-4">
      <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
        <h2 className='text-2x1 font-medium'>cart total</h2>
        <p className='flex items-center gap-4 text-base'>
          subtotal
          <span className='font-titleFont font-bold text-lg'>
            $ {totalAmt}
          </span>
          </p>
        <p className='flex items-start gap-4 text-base'>
          shipping
          <span className='font-titleFont font-bold text-lg'>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, quod! 
          </span>
        </p>
      </div>
      <p className='font-titleFont font-semibold flex justify-between mt-6'>
        Total :<span className='text-xl font-bold'>$ {totalAmt}</span>
      </p>
      <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-2 mt-6 hover:bg-gray-800 duration-300'>
      proceed to checkout</button>
      {
        payNow && (
          <div className='w-full mt-6 flex items-center justify-center'>
          <StripeCheckout
          stripeKey="pk_test_51N3NhAAjaxJODuQMKWKHt0wkn9B89QuJqM23MZ6DyNiN9hERStlAnYxQmZVbVtj9s6pFQ2urwHDqt4PfIN2xmz5200AqSGabaK"
          name="rendermart online "
          amount={totalAmt * 100}
          label='Pay Here'
          description={`your payment amount is $ ${totalAmt}`}
           email={userInfo.email}
          />
        </div>
       )}
    </div>
  </div>
</div>
  )
}

export default Cart
