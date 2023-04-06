import React from 'react';
import Navbar from './Navbar';

export default function account() {
  return (
    <>
    <Navbar/>
    <div className='absolute p-24 w-full flex'>
      <nav className='border-2 rounded-lg h-96'>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Account Information</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Settings</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Previous Hotels</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Privacy Statement</button>
      </nav>
      <div className='pl-24 w-full'>
        <div className='border-2 rounded-lg h-full p-3'>
          <p className='pb-8'>Account Name</p>
          <p className='pb-8'>Email</p>
          <p className='pb-8'>Phone Number</p>
          <p className='pb-8 hover:text-blue-400'>Change Password</p>
          <p></p>
        </div>
      </div>
    </div>
    </>
  )
}
