import React, { useEffect } from 'react'
import useCartStore from '../store/cartStore'

const Cart = () => {
    const cart = useCartStore((state)=>state.cart);
    const addToCart = useCartStore((state)=>state.addToCart);
    const removeFromcart = useCartStore((state)=>state.removeFromcart)
    // useEffect(() => {
    //     console.log(cart);
    // },[])
  return (
    <div className='flex flex-col gap-5 items-center justify-center'>
        <h2 className='text-[1.4rem] font-[700] underline'> Cart : {cart.length}</h2>
        {
            cart && cart?.map((item,idx) => {
                return (
                    <div className='flex flex-col items-center justify-center gap-1' key={idx+1}>
                    {/* <h1>CartItem</h1> */}
                    <span>{item?.product_title}</span>
                    <button className='border rounded-md text-white px-2 bg-[#ff2727]' onClick={() => removeFromcart(item.product_id) }>Remove from cart</button>
                    </div>
                )
            } )
        }
    </div>
  )
}

export default Cart 