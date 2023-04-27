import Image from 'next/image'
import Link from 'next/link'
import React, {useRef} from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseSquare} from 'react-icons/ai'



export default function Navbar() {
  const refSideBar = useRef()
  
  const toggleCart = ()=>{
    if (refSideBar.current.classList.contains('translate-x-full')) {
      refSideBar.current.classList.remove('translate-x-full')
      refSideBar.current.classList.add('translate-x-0')
    }
    else if (!refSideBar.current.classList.contains('translate-x-full')) {
      refSideBar.current.classList.remove('translate-x-0')
      refSideBar.current.classList.add('translate-x-full')
    }
  }

  return (
    <div className='flex flex-col justify-between items-center md:flex-row md:justify-start shadow-xl'>
      {/* Navbar */}
      <div className='logo mx-4 my-2 md:my-4'>
        <Link href={'/'}><Image src="/favicon.ico" width={40} height={40} alt='logo'/></Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-5 font-bold md:text-xl'>
            <Link href={'/about'}><li>About</li></Link>
            <Link href={'/tshirts'}><li>Tshirts</li></Link>
            <Link href={'/hoodies'}><li>Hoodies</li></Link>
            <Link href={'/jeans'}><li>Jeans</li></Link>
            <Link href={'/suits'}><li>Suits</li></Link>
        </ul>
      </div>
      {/* Shopping Cart */}
      <div onClick={toggleCart} className='cart absolute right-0 top-4 mx-5 font-bold md:text-xl'>
        <AiOutlineShoppingCart className='cursor-pointer tetxt-xl md:text-4xl'/>
      </div>
      {/* Shopping Cart Sidebar */}
      <div ref={refSideBar} className="sidebar absolute top-0 right-0 bg-violet-200 p-10 transform transition-transform translate-x-full">
        {/* Closing sidebar icon */}
        <AiOutlineCloseSquare onClick={toggleCart} className='text-purple-600 top-2 text-3xl cursor-pointer right-2 absolute'/>
        <h2 className="font-bold text-xl">Shopping Cart</h2>

      </div>
    </div>
  )
}
