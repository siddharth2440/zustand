import React, { useCallback } from 'react'
import { products } from '../lib/productsData.js'
import useCartStore from '../store/cartStore.js'

const ProductList = () => {
    const addToCart = useCartStore(state=>state.addToCart)
  return (
    <div className='flex items-center justify-center flex-col gap-4 text-center'>
        {
            products.map((product,index) => {
                return (
                    <div key={index} className='flex items-center justify-center gap-1 flex-col'>
                        <h2 className='text-[1.2rem] font-[600] capitalize'>{product.product_title}</h2>
                        <p>{product.product_description}</p>
                        {/* <p>Price: ${product.price}</p> */}
                        <button className='border rounded-md text-white px-2 bg-[#e0c7c7]' onClick={() => {
                            addToCart(product)
                        } } >Add to Cart</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductList