import React, {useRef} from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseSquare, AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import { BsBagCheckFill} from 'react-icons/bs'
import { toggleCartState } from '@/store/cartSlice'
import { useDispatch } from 'react-redux'

export const Cart = () => {
    const refSideBar = useRef()
    const dispatch = useDispatch()
  
  const toggleCart = ()=>{
    if (refSideBar.current.classList.contains('translate-x-full')) {
      refSideBar.current.classList.remove('translate-x-full')
      refSideBar.current.classList.add('translate-x-0')
      dispatch(toggleCartState())
    }
    else if (!refSideBar.current.classList.contains('translate-x-full')) {
      refSideBar.current.classList.remove('translate-x-0')
      refSideBar.current.classList.add('translate-x-full')
      dispatch(toggleCartState())
    }
  }
  return (
    <div>
              {/* Shopping Cart */}
              
      <div onClick={toggleCart} className='cart absolute right-0 top-4 mx-5 font-bold md:text-xl'>
        <AiOutlineShoppingCart className='cursor-pointer tetxt-xl md:text-4xl'/>
      </div>
      {/* Shopping Cart Sidebar */}
      <div ref={refSideBar} className="w-80 z-10 sidebar top-0 right-0 bg-violet-200 p-7 transform transition-transform translate-x-full fixed h-full">
        {/* Closing sidebar icon */}
        <AiOutlineCloseSquare onClick={toggleCart} className='text-purple-700 top-2 text-3xl cursor-pointer right-2 absolute'/>
        <h2 className="font-bold text-xl flex justify-center border-b-2 border-green-500">Shopping Cart Redux do something</h2>

        <ol className='list-decimal'>
          <li>
            <div className='flex m-2'>
              <div className='w-2/3 items-center justify-center font-semibold text-lg m-2'>Tshirt - Wear the code</div>
              <div className='w-1/3 flex justify-evenly items-center'><AiOutlinePlusCircle className='text-2xl text-pink-600 cursor-pointer hover:text-pink-800'/> 1 <AiOutlineMinusCircle className='text-2xl  text-pink-600 cursor-pointer hover:text-pink-800'/></div>
            </div>
          </li>
          <li>
            <div className='flex m-2'>
              <div className='w-2/3 items-center justify-center font-semibold text-lg m-2'>Tshirt - Wear the code</div>
              <div className='w-1/3 flex justify-evenly items-center'><AiOutlinePlusCircle className='text-2xl text-pink-600 cursor-pointer'/> 1 <AiOutlineMinusCircle className='text-2xl text-pink-600 cursor-pointer'/></div>
            </div>
          </li>
        </ol>

        <div className='flex'>
        <button className="flex mr-auto text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded"> <BsBagCheckFill className='my-1 mx-2'/> Checkout</button>
        <button className="mr-auto text-white bg-pink-400 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded">Clear Cart</button>
        </div>

      </div>
    </div>
  )
}
