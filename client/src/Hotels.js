import React,{useState, useEffect} from 'react'
import Navbar from './Navbar';



export default function Hotels() {
    
    const[data, setData] = useState([[]])

    function getHotels(){
        fetch('/Hotels', {
            method:"POST",
        }).then(
            res => res.json()
        ).then(
            data => {setData(data)}
        )
    }
    useEffect(() => {
        getHotels()

        

        console.log(data)
    },[])


    return (
        <>
        <Navbar/>
        <div className='p-10'>

            <div id='display'>

            </div>

            <img src='./'/>
            <div>
                Hotel Name: <span></span>
            </div>
            <div>
                Rooms: <span></span>
            </div>
        </div>
        </>
    
  )
}
