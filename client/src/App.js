import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [data, setData] = useState([{}])
  function canLogin(){
    let dataUser = {"username":"Admin", "password":"Password1"}
      fetch("/users/4",{
        method:"POST",
        body: dataUser
      }).then(res => {
          fetch("/").then(
            res => res.json()
          ).then(
              data => {
                setData(data)
              }
          )
      }).then(
        // alert(data.Username)
      )
      // console.log(dataUser[0][1])
  }
    return (
      <>
        <main className="text-gray-600 text-center">
          {/* <Navbar></Navbar> */}
          <p className="pt-10 font-bold">Login</p>
          <label>Username: <input type="text" className="border-2 border-black"/></label><br></br>
          <label>Password: <input type="text" className="border-2 border-black"/></label><br></br>
          <button onClick={canLogin} className="border-2 bg-gray-200 border-black">Sign In</button>
          {/* <form>
          </form> */}
        </main>
      </>
  );
}

export default App;
