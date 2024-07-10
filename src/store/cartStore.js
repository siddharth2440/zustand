import { create } from "zustand"

const useCartStore = create(
    (set) => ({
        cart: [],

        addToCart: (product) => {
            console.log("Hello World");
            set((state) => (
                    {cart:[...state.cart, product]}
                )
            )
        },
        removeFromcart: (productId) => {
            set((state) => ({
                cart:state.cart.filter(item => item.product_id !== productId)
            }))
        }
    })
)

export default useCartStore;