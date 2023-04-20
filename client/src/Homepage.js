import React,{useState} from 'react';
import Navbar from './Navbar';
import { MdHotel, MdCalendarMonth } from 'react-icons/md';
// import Navbar from "./navbar";
// const inter = Inter({ subsets: ["latin"] });

function Cerousel(){
}

function Homepage() {
  return (
    <>
      <Navbar/>
      <div className=' bg-HotelWater px-1 pb-40 relative text-center'>
        <div className=' text-HotelWhite py-10'>
          <h1 className='text-3xl font-bold my-2'>Find Hotel</h1>
          <h2 className='text-xl my-2'>Great Deals are Awaiting</h2>
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
      {/* CASINOS */}
      {/* <div className=' mt-48 px-5'>
        <div className='relative  overflow-visible'>
          <img src='./Bellagio-Hotel-Casino.jpeg' alt='Casino-Hotel' className=' h-80 object-cover w-full brightness-75 hover:brightness-100 duration-150'/>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h4 className=' font-[Poppins] font-bold text-5xl text-white'>Casinos</h4>
          </div>
        </div>
        <div className='px-5'>
            <p className='pt-2 font-bold text-lg'>Gamble your life savings away</p>
            <p className='pt-2'>Learn more</p>
        </div>
      </div> */}
      {/* HOTELS */}
      <div className=' mt-48 px-5'>
        <div className='relative  overflow-visible'>
          <a href={'./Hotels'}>
            <img src='./Marriott.jpg' alt='Casino-Hotel' className=' object-cover w-full h-80 brightness-75 hover:brightness-100 duration-150'/>
          </a>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h4 className=' font-[Poppins] font-bold text-5xl text-white'>Hotels</h4>
          </div>
        </div>
        <div className='px-5'>
          <p className='pt-2 font-bold text-lg'>Come visit some of the most popular hotels in Oklahoma.</p>
          <p className='pt-2'>Learn more</p>
        </div>
      </div>
      {/* APARTMENTS */}
      <div className=' mt-10 px-5'>
        <div className='relative  overflow-visible'>
          <img src='./Apartment.jpg' alt='Casino-Hotel' className=' object-cover w-full h-80 brightness-75 hover:brightness-100 duration-150'/>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h4 className=' font-[Poppins] font-bold text-5xl text-white'>Apartments</h4>
          </div>
        </div>
        <div className='px-5'>
          <p className='pt-2 font-bold text-lg'>It's safe, I promise ;)</p>
          <p className='pt-2'>Learn more</p>
        </div>
      </div>
      
    </>
  );
}
export default Homepage;