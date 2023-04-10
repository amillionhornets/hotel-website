import React from 'react';
import Navbar from "./Navbar";
// const inter = Inter({ subsets: ["latin"] });
import { MdHotel, MdCalendarMonth } from 'react-icons/md';
import { useEffect, useState } from 'react';
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
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  // const seasons = ["Spring"];
  return (
    <>
      <Navbar />
      {/* Hotel Card */}
      <main className='lg:flex m-10'>
          {seasons.map((season) => (
          <div className='border-2 rounded-2xl lg:mr-20 sm:mb-5  border-gray-400 w-full h-48 flex'>
            <div className='w-1/2 rounded-2xl overflow-hidden -translate-x-1'>
              <img src="Marriott.jpg" className='h-full' alt="hotel" />
            </div>
            <div className='w-1/2 overflow-hidden'>
             <a href='#' className='hover:text-blue-400'>cool hotel {season}</a>
             </div>
         </div>
          ))}
      </main>
    </>
  );
}
export default Booking;