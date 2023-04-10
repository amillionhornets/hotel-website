import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Account() {
  const [data, setData] = useState([[]]);

  function logOut(){
    document.cookie = "username=;";
    document.cookie = "isLoggedIn=false";
  }

  function getCookies(){
    let thing = document.cookie
    if(thing != ""){
        let cookies = document.cookie;        
        let splitCookie = cookies.split(";")
        let username = splitCookie[0].split("=");
        let stuff = {
            "username" : username[1],
        }
        
        return stuff
    }
    return "false"
  }
  // let dataUser = {"username": ""+ username +"","password": ""+password+""}
  function getUserInfo(){
    let dataUser = {"username": ""+getCookies().username+""}
    let bodyOBJ = JSON.stringify(dataUser, null, 4)
    fetch('/userInfo', {
      method: "POST",
      body: bodyOBJ
    }).then(
      res => res.json()
    ).then(
      data => setData(data)
    )
  }
  useEffect(() =>{
    getUserInfo()
  }, [])
  return (
    <>
    <Navbar/>
    <div className='absolute p-24 w-full flex'>
      <nav className='border-2 rounded-lg h-96'>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey focus:bg-HotelGrey'>Account Information</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Settings</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Previous Hotels</button>
        <button className='block p-3 w-full text-left hover:bg-HotelGrey'>Privacy Statement</button>
        <a href={'/'}><button className='block p-3 w-full text-left hover:bg-red-500 hover:text-white' onClick={logOut}>Log Out</button></a>
      </nav>
      <div className='pl-24 w-full'>
        <div className='border-2 rounded-lg h-full p-3'>
          <p className='pb-8'>Account Name: {getCookies().username}</p>
          <p className='pb-8'>Email: {data[0].email}</p>
          <p className='pb-8'>Phone Number: {data[0].phoneNum}</p>
          <p className='pb-8 hover:text-blue-400'>Change Password</p>
        </div>
      </div>
    </div>
    </>
  )
}
export default Account;