import React from 'react'

export default function Navbar() {
  return (
    <nav className=' bg-cyan-900 p-5 shadow md:flex md:items-center md:justify-between text-white'>
        <div>
            <span className=' text-4xl font-[Poppins] cursor-pointer'>
                ~HotelName~
            </span>
        </div>
        <ul className='md:flex md:items-center'>
            <li className=' mx-4'>
                <a href={''}>Login</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Support</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Trips</a>
            </li>
        </ul>
    </nav>
  )
}

