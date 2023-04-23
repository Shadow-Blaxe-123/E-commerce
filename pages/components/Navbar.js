import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='logo'>
        <Image src="/vercel.svg" width={100} height={100}/>
      </div>
    </div>
  )
}
