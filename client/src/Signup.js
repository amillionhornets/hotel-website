import React from 'react'

function Signup() {
  function signUp(){
    alert("Hello World")
  }
  return (
    <>
    <main className="text-gray-600 text-center">
     <p className="pt-10 font-bold">Login</p>
     <label>Username: <input type="text" id="name" className="border-2 border-black"/></label><br></br>
     <label>Email: <input type="email" id="email" className="border-2 border-black"/></label><br></br>
     <label>Password: <input type="text" id="pass" className="border-2 border-black"/></label><br></br>
     <label>Confirm Password: <input type="text" id="conPass" className="border-2 border-black"/></label><br></br>
     <button onClick={signUp} className="border-2 bg-gray-200 border-black">Sign Up</button>
    </main>
    </>
  )
}
export default Signup;