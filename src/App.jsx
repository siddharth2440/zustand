import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center gap-3 py-4'>
      <h1 className='text-center text-[1.6rem] opacity-85 font-[500]'>Welcome to the ,ZUSTAND</h1>
      <ProductList/>
      <Cart/>
    </div>
  )
}

export default App
