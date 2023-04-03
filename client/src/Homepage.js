
import React from 'react';
import Navbar from './Navbar';
import { MdHotel, MdCalendarMonth } from 'react-icons/md';
// import Navbar from "./navbar";
// const inter = Inter({ subsets: ["latin"] });

function Homepage() {
  return (
    <>
      <Navbar/>
      <div className=' bg-HotelWater px-1 pb-40 relative text-center'>
        <div className=' text-HotelWhite py-10'>
          <h1 className='text-3xl font-bold my-2'>Find Hotel or whatever ig</h1>
          <h2 className='text-xl my-2'>We might have some deals or something</h2>
        </div>
        </div>

        <div className='px-1 top-72 absolute w-full'>
        <div className=' bg-HotelNavy p-2 mx-auto'>
          <form action="">
            {/* Where To */}
            <div className='mx-auto mb-2'>
            <div className=' bg-HotelWhite rounded-md p-3 flex-1 flex-row'>
              <MdHotel className='text-3xl inline'/>
              <input id='where' type="text" className=' font-medium bg-HotelWhite h-full p-2 ml-1 w-5/6 text-sm placeholder-black' placeholder='Where are you going?'/>
            </div>
            </div>
            {/* When */}
            <div className='mx-auto mb-2'>
            <div className=' bg-HotelWhite rounded-md p-3 flex-1 flex-row'>
              <MdCalendarMonth className='text-3xl inline'/>
              <input id='date' type="date" className=' font-medium bg-HotelWhite h-full p-2 ml-1 w-5/6 text-sm placeholder-black' placeholder='Where are you going?'/>
            </div>
            </div>
            {/* How Many People */}
            <div className='mx-auto mb-2'>
            <div className=' bg-HotelWhite rounded-md p-3 flex-1 flex-row'>
              <MdHotel className='text-3xl inline'/>
              <input id='people' type='number' className=' font-medium bg-HotelWhite h-full p-2 ml-1 w-5/6 text-sm placeholder-black' placeholder='How many Travelers?'/>
            </div>
            </div>
            <div className='mx-auto'>
              <button type="" className='w-full bg-red-600 hover:bg-HotelRed h-12 text-HotelWhite font-medium text-2xl'>Search</button>
            </div>
            
          </form>
        </div>
        </div>
      {/* <div className='p-2'>
        <span className=' text-3xl font-[Poppins]'>Where we droppin'?</span>
        <input placeholder='Going to' className='block ring-1 ring-black placeholder:text-black p-1 my-2 rounded'/>
        <input placeholder='Dates' className='block ring-1 ring-black placeholder:text-black p-1 my-2 rounded'/>
        <input placeholder='Travelers' className='block ring-1 ring-black placeholder:text-black p-1 my-2 rounded'/>
      </div> */}
    </>
  );
}
export default Homepage;