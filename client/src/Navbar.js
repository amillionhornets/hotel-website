import React from 'react'

export default function Navbar() {
  return (
    <nav className=' bg-HotelWater p-5  shadow md:flex md:items-center md:justify-between text-white'>
        <div>
            <span className=' text-4xl font-[Poppins] cursor-pointer'>
                ~HotelName~
            </span>
        </div>
        <ul className='md:flex md:items-center hidden'>
            <li className=' mx-4'>
                <a href={''}>Login</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Support</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Trips</a>
            </li>
            <button className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] hover:bg-slate-200 mx-2'>
                Button Here
            </button>
        </ul>
    </nav>
  )
}

