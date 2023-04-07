import React, {useEffect, useState} from 'react'


export default function Navbar() {

    function getCookies(){

        let thing = document.cookie

        if(thing != "isLoggedIn=flase"){
            let cookies = document.cookie;        
            let splitCookie = cookies.split(";")
            let username = splitCookie[0].split("=");
            let login = splitCookie[1].split("=");
            let stuff = {
                "username" : username[1],
                "isLoggedIn" : login[1]
            }
            return stuff
        }
        return
    }
    var loggedIn = getCookies().isLoggedIn;
    console.log(getCookies().isLoggedIn)
    console.log(getCookies().username)
    // console.log(getCookies().username);
    // console.log(getCookies().username);
    let log = "";
    let username = getCookies().username;
    if (loggedIn == "true"){
         log = true
    }else{
         log = false
    }
    // console.log(log)
    function changeUrl(){
        window.location.replace("http://localhost:3000/Account")
    }
    useEffect(() => {
        getCookies()
    })
  const [showlist, setToggle] = useState(false)
  return (
    <nav className=' bg-HotelWater p-5 shadow flex md:items-center justify-between text-white'>
        {/* HOTEL LOGO/NAME */}
        <div className='flex'>
            <span className=' text-4xl font-[Poppins] cursor-pointer'>
                <a href={'./Homepage'}>
                    ~HotelName~
                </a> 
            </span>
            <div className='ml-5 text-lg'>
                {/* DROP DOWN BUTTON */}
                <button onClick={() => setToggle(!showlist)} className=' bg-white text-cyan-900 p-2 duration-500 rounded font-[Poppins] inline-flex items-center hover:bg-slate-200'>
                    Button Here
                </button>
                {showlist && (
                    <div className='mt-1 shadow-lg shadow-Black bg-white rounded absolute z-50' id='Drowdown'>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Deals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Car Rentals</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Groups & Meetings</a>
                        <a className='block text-black p-1 hover:bg-HotelGrey cursor-pointer' href='#'>Gift Cards</a>
                    </div>
                )}
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
                log? 
                <>
                    <button onClick={changeUrl}>
                            <li className='mx-4 rounded-full w-10 h-10 bg-red-700 border-green-50'></li>
                    </button>
                    <li className=''>{username}</li>
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
    </nav>
  )
}

