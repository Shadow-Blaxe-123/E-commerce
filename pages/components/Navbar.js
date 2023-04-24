import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-col justify-between items-center md:flex-row md:justify-start'>
      <div className='logo'>
        <Link href={'/'}><Image src="/favicon.ico" width={40} height={40} alt='logo'/></Link>
      </div>
      <div className='nav'>
        <ul className='flex items-center'>
            <Link href={'/'}><li>About</li></Link>
            <Link href={'/'}><li>Tshirts</li></Link>
            <Link href={'/'}><li>Hoodies</li></Link>
            <Link href={'/'}><li>Jeans</li></Link>
            <Link href={'/'}><li>Suits</li></Link>
        </ul>
      </div>
      <div className='cart'>
        <button>Cart</button>
      </div>
    </div>
  )
}
