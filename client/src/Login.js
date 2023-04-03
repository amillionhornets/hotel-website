import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';

function Login() {
  // var loginAttempt = [];  
  const [data, setData] = useState([{}])
  // Sends the username and password entered to the server and returns a bool to see if the login is valid
  function canLogin(){
    let username = document.getElementById("name").value;
    let password = document.getElementById("pass").value;
    let dataUser = {"username": ""+ username +"","password": ""+password+""}
    let bodyObj = JSON.stringify(dataUser,null, 4)
    console.log(test)
    fetch("/login",{
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

  // Gets an update of login attempts every time login attempts is changed
  // useEffect(() => {
  //     fetch("/home").then(
  //     res => res.json()
  //   ).then(
  //       data => {
  //         setData(data)
  //         // loginAttempt.push("attempt")
  //       }
  //   )
  // }, [])
    return (
      <>
      <Navbar />
        <main className="text-gray-600 text-center">
          {/* <Navbar></Navbar> */}
          <p className="pt-10 font-bold">Login</p>
          <label>Username: <input type="text" id="name" className="border-2 border-black"/></label><br></br>
          <label>Password: <input type="text" id="pass" className="border-2 border-black"/></label><br></br>
          <button onClick={canLogin} className="border-2 bg-gray-200 border-black">Sign In</button> <br></br>
          <span>
            <a href="businessSignIn">Are you a business? Sign in Here!</a>
          </span>
        </main>
        {/* <div>
      {(typeof data.canLogin === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.canLogin.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div> */}
      </>
  );
}

export default Login;
