import React,{useState} from 'react'



export default function Navbar() {

  const [showlist, setToggle] = useState(false)
  return (
    <nav className=' bg-HotelWater p-5  shadow md:flex md:items-center md:justify-between text-white'>
        {/* HOTEL LOGO/NAME */}
        <div className='flex'>
            <span className=' text-4xl font-[Poppins] cursor-pointer'>
                ~HotelName~
            </span>
            <div className='ml-5 text-lg'>
                <button onClick={() => setToggle(!showlist)} className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] inline-flex items-center hover:bg-slate-200'>
                    Button Here
                </button>
                {showlist && (
                    <div className='mt-1 shadow-lg shadow-HotelGrey bg-white rounded absolute' id='Drowdown'>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer'>Deals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer'>Car Rentals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer'>Groups & Meetings</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer'>Gift Cards</a>
                    </div>
                )}
            </div>
        </div>

        {/* DROP DOWN BUTTON */}
        
        
        {/* SIDE LINKS */}
        <ul className='md:flex md:items-center hidden'>
            <li className=' mx-4'>
                <a href={'/login'}>Login</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Support</a>
            </li>
            <li className=' mx-4'>
                <a href={''}>Trips</a>
            </li>
        </ul>
        <button className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] hover:bg-slate-200 md:hidden'>
            Button Here
        </button>
        
    </nav>
  )
}

