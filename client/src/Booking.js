import React from 'react';
import Navbar from "./Navbar";
// const inter = Inter({ subsets: ["latin"] });
import { MdHotel, MdCalendarMonth } from 'react-icons/md';

function Booking() {

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

  return (
    <>
      <Navbar />
      <div className=' bg-HotelWater px-1 pb-40 relative'>
        <div className=' text-HotelWhite py-10'>
          <h1 className='text-3xl font-bold my-2'>Find Hotel!</h1>
          <h2 className='text-xl my-2'>Great Deals are awaiting you</h2>
        </div>
        </div>

        <div className='px-1 top-72 absolute w-full'>
        <div className=' bg-HotelRed p-2 mx-auto'>
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
              <button type="" onClick={postData} className='w-full bg-HotelWater h-12 text-HotelWhite font-medium text-2xl'>Search</button>
            </div>
            
          </form>
        </div>
        </div>
    </>
  );
}
export default Booking;