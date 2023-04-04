import React from 'react'
import Navbar from './Navbar';

function BusinessSignUp() {
  function signUp(){
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    // let conPass = document.getElementById("conPass").value;
    // if(pass != conPass){
    //   throw "Enter the Identical Password";
    // }
    let jsonObj = {"username": ""+username+"", "email": ""+email+"", "password": ""+pass+""};
    let bodyObj = JSON.stringify(jsonObj, null, 4);
    fetch("/businessesSign",{
      method:"POST",
      body: bodyObj
    }
    )
  }
    return (
    <>
    <Navbar/>
    <main className="text-gray-600 text-center">
     <p className="pt-10 font-bold">Business Sign Up!</p>
     <label>Username: <input type="text" id="username" className="border-2 border-black"/></label><br></br>
     <label>Email: <input type="email" id="email" className="border-2 border-black"/></label><br></br>
     <label>Password: <input type="text" id="pass" className="border-2 border-black"/></label><br></br>
     <label>Confirm Password: <input type="text" id="confirmPass" className="border-2 border-black"/></label><br></br>
     <button onClick={signUp} className="border-2 bg-gray-200 border-black">Sign Up</button> <br></br>
     <a href='/Signup'>Not a business? Sign Up here!</a>
    </main>
    </>
  )
}
export default BusinessSignUp;