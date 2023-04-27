import React, {useEffect, useState} from 'react'
import { VscAccount } from "react-icons/vsc";


export default function Navbar() {
    // Gets and returns the cookies
    function getCookies(){
        let currentCookies = document.cookie
        if(currentCookies != ""){
            let cookies = document.cookie;        
            let splitCookie = cookies.split(";")
            let token = splitCookie[0].split("=");
            let username = splitCookie[1].split("=");
            let login = splitCookie[2].split("=");
            let info = {
                "csrftoken": token[1],
                "username" : username[1],
                "isLoggedIn" : login[1]
            }
            return info
        }
        return "false"
    }
    // Checks to see if the user is logged in
    let log = true;
    useEffect(() => {
        getCookies()
    }, [])
    var loggedIn = getCookies().isLoggedIn;
    if (loggedIn == "true"){
         log = true
    }else{
         log = false
    }
    function changeUrl(){
        window.location.replace("http://localhost:3000/Account")
    }
    console.log(getCookies().username)
  const [showlist, setToggle] = useState(false)
  return (
    <nav className=' bg-HotelWater p-5 shadow flex md:items-center justify-between text-white'>
        {/* HOTEL LOGO/NAME */}
        <div className='flex'>
            <span className=' text-4xl font-[Poppins] cursor-pointer'>
                <a href={'./Homepage'}>
                    ~Oklahoma Hotels~
                </a> 
            </span>
            <div className='ml-5 text-lg'>
                {/* DROP DOWN BUTTON */}
                {/* <button onClick={() => setToggle(!showlist)} className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] inline-flex items-center hover:bg-slate-200'>
                    Button Here
                </button>
                {showlist && (
                    <div className='mt-1 shadow-lg shadow-Black bg-white rounded absolute z-50' id='Drowdown'>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Deals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Car Rentals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Groups & Meetings</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Gift Cards</a>
                    </div>
                )} */}
            </div>
        </div>
        {/* SIDE LINKS */}
        <ul className='md:flex md:items-center hidden'>
            <li className=' mx-4'>
                <a href={'#'}>Support</a>
            </li>
            <li className=' mx-4'>
                <a href={'#'}>Trips</a>
            </li>
            {
                true? 
                <>
                    <button onClick={changeUrl}>
                            <li className='mx-4 rounded-full w-10 h-10 bg-white'><VscAccount className='w-10 h-10 text-gray-600'/></li>
                    </button>
                </> 
                :   
                <>
                <li className=' mx-4'>
                    <a href={'/login'}>Login</a>
                </li>
                <li className=' mx-4'>
                    <a href={'/Signup'}>Register</a>
                </li>
                </>          
            }
        </ul>
        <button className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] hover:bg-slate-200 md:hidden'>
            Button Here
        </button>
        {/* <button onClick={() => setToggle(!showlist)} className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] inline-flex items-center hover:bg-slate-200'>
                    Button Here
                </button>
                {showlist && (
                    <div className='mt-1 shadow-lg shadow-Black bg-white rounded absolute z-50' id='Drowdown'>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Deals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Car Rentals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Groups & Meetings</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Gift Cards</a>
                    </div>
                )} */}
    </nav>
  )
}

