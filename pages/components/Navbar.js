import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='logo'>
        <Image src="/favicon.ico" width={40} height={40}/>
      </div>
      <div className='nav'>
        <ul className='flex'>
            <li>About</li>
            <li>Tshirts</li>
            <li>Hoodies</li>
            <li>Mugs</li>
            <li>Stickers</li>
        </ul>
      </div>
    </div>
  )
}
