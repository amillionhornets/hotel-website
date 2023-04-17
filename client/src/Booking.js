import React from 'react';
import Navbar from "./Navbar";
// const inter = Inter({ subsets: ["latin"] });
import { MdHotel, MdCalendarMonth } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { GiCigarette, GiSittingDog } from "react-icons/gi";


function Booking() {
  const [data, setData] = useState({})
  function postData() {
    let location = document.getElementById('where').value;
    let date = document.getElementById('date').value;
    let people = document.getElementById('people').value;

    let jsonObj = {
      "location": location,
      "date": date,
      'people': people
    }
    let bodyObj = JSON.stringify(jsonObj)

    fetch('/Booking', {
      method: 'POST',
      body: bodyObj
    })
  }
  const seasons = ["Spring", "Summer", "Autumn", "Winter","super cool awesome amazinh hotel thingy fighting ring"];
  const [showfilters, setToggle] = useState(false)

  // const seasons = ["Spring"];
  return (
    <>
      <Navbar />
      <div className='text-lg'>
            {/* SHOW FILTERS */}
            {showfilters && (
              <div className='m-0 p-0 bg-HotelGrey absolute z-50 w-full h-full block font-bold text-2xl' id='Drowdown'>
                <div>
                  <button onClick={() => setToggle(!showfilters)}>X</button>
                </div>
             </div>
            )}
        </div>
      {/* Hotel Card */}
      <main href="#" className='lg:flex m-4'>
        
        <div className='mb-4 '>
          <button onClick={() => setToggle(!showfilters)} className='block m-auto rounded-lg w-72 h-10 bg-HotelNavy text-HotelWhite font-bold text-lg'>Filter</button>
        </div>
          {seasons.map((season) => (
            <a className='border-2 rounded-2xl lg:mr-20 sm:mb-5 border-gray-400 w-full h-48 flex brightness-90 hover:brightness-105 duration-200'>
              <div className='rounded-2xl overflow-hidden -translate-x-1  w-full flex'>
                <img src="Marriott.jpg" className='h-full' alt="hotel" />
                <div className=' block w-full w- overflow-hidden px-2 py-1'>
                  <div className=''>
                    <p className=' font-bold text-lg '>Hotel {season}</p>
                    <p className=''>city name</p> 
                  </div>
                  <div className=' '>
                    <p className='flex'><GiCigarette className=''/><GiSittingDog/></p>
                    <p><span className=' font-bold'>8.7</span>/10 <span>Excellant</span> <span>(1,228)</span></p>
                  </div>
                  <div className=' h-1/3 text-right  '>
                    <p className=' font-bold text-2xl'>$144</p>
                    <p>$167 after taxes and fees</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
      </main>
    </>
  );
}
export default Booking;