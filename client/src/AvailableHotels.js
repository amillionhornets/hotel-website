import React, { useEffect, useState } from 'react';
import { GiCheckMark, GiCigarette, GiSittingDog } from "react-icons/gi";


function AvailableHotels() {
    const [data, setData] = useState([[]])

    let datadata = [];

    

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

    if (data[0][0] != null)
    {

        return (
          <>
          {/* {console.log(data[0][0][1])} */}
          {data && data.map((season) => (
              <a className='border-2 rounded-2xl lg:mr-20 sm:mb-5 border-gray-400 w-full h-48 flex brightness-90 hover:brightness-105 duration-200'>
            <div className='rounded-2xl overflow-hidden -translate-x-1  w-full flex'>
              <img src="Marriott.jpg" className='h-full' alt="hotel" />
              <div className=' block w-full w- overflow-hidden px-2 py-1'>
                <div className=''>
      
                      <p className=' font-bold text-lg '>{season[0][1]}</p>   
      
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
        {
          // data.forEach(element => {
          //     <p>{element}</p>
          //     console.log(element[0])
          // })
        }
        </>
        )
    } else{
      return "Loading ..."
    }
}

export default AvailableHotels