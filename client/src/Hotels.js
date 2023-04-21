import React,{useState, useEffect} from 'react'
import Navbar from './Navbar';



export default function Hotels() {
    
    const[data, setData] = useState([{}])
    let body = JSON.stringify({ })
    function getHotels(){
        fetch('/Hotels', {
            method:"POST",
            body:body
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

            <div id='display' className=' md:grid md:grid-cols-3 md:gap-3.5'>
                <div >
                    <img src='./Hotels-imgs/innerMarriott.jpg'/>
                    <div>
                        Hotel Name: <span></span>
                    </div>
                    <div>
                        Rooms: <span></span>
                    </div>
                </div>
                <div>
                    <img src='./Hotels-imgs/innerMarriott.jpg'/>
                    <div>
                        Hotel Name: <span></span>
                    </div>
                    <div>
                        Rooms: <span></span>
                    </div>
                </div>
                
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
