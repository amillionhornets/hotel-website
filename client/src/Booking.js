import React from 'react';
import Navbar from "./Navbar";
// const inter = Inter({ subsets: ["latin"] });
import { MdHotel, MdCalendarMonth } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { GiCheckMark, GiCigarette, GiSittingDog } from "react-icons/gi";
import AvailableHotels from './AvailableHotels';


function Booking() {
  const [data, setData] = useState([[]])
  function postData() {
    // let location = document.getElementById('where').value;
    // let date = document.getElementById('date').value;
    // let people = document.getElementById('people').value;

    // let jsonObj = {
    //   "location": location,
    //   "date": date,
    //   'people': people
    // }
    // let bodyObj = JSON.stringify(jsonObj)
    let jsonObj = {

    }
    let bodyObj = JSON.stringify(jsonObj)

    fetch("/Hotels",{
      method:"POST",
      body: bodyObj
    }
    ).then(
      res => res.json()
      ).then(
        data => {
          setData(data)
        }
        )}
  
  const seasons = data;
  const [showfilters, setToggle] = useState(false)
  useEffect(() =>{
    postData()
  }, [])
  // const seasons = ["Spring"];



    return (
      <>
        <Navbar />
        <div className='text-lg'>
            {/* SHOW FILTERS */}
              {showfilters && (
                <div className='m-4 p-0 bg-HotelWhite z-50 w-full h-full block font-bold text-2xl' id='Drowdown'>
                  <div className='flex'>
                    <div className='flex'>
                      <button onClick={() => setToggle(!showfilters)} className=' text-red-600'>X</button>
                      <p className='px-6'>Sort and Filter</p>
                    </div>
                    <div className=' right-4 absolute'>
                      <button className='text-right '>CLEAR</button>
                    </div>
                  </div>
                  <div>
                    <div className='mb-14 mt-6 mx-10'>
                      <div className='py-5 px-6 rounded-xl bg-HotelNavy'>
                        <input className=' border-2 border-black rounded w-full my-1 py-2' placeholder=''/>
                        <input className=' border-2 border-black rounded w-full my-1 py-2'/>
                        <input className=' border-2 border-black rounded w-full my-1 py-2'/>
                      </div>
                      <br/>
                      <p>Filter by</p>
                      <br/>
                      <div>
                        <input type='checkbox'/>
  
                      </div>
                    </div>
                  </div>
               </div>
              )}
          </div>
        {/* Hotel Card */}
        <main href="#" className='lg:flex m-4'>
          
          <div className='mb-4 '>
            <button onClick={() => setToggle(!showfilters)} className='block m-auto rounded-lg w-72 h-10 bg-HotelNavy text-HotelWhite font-bold text-lg'>Filter</button>
          </div>
            <AvailableHotels />
        </main>
      </>
    );
  }
export default Booking;