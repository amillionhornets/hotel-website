import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
  const [data, setData] = useState([{}])
  function canLogin(){
    let dataUser = [{"username": "test4"}]
      fetch("/users",{
        method:"POST",
        body: dataUser
      }
  ).then(
    res => res.json()
  ).then(
    data => {
      setData(data)
    }
  )}
  useEffect(() => {
    fetch("/home").then(
      res => res.json()
    ).then(
        data => {
          setData(data)
        }
    )
  }, [data])
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
        <div>
      {(typeof data === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.map((user, i) => (
          <p key={i}>{user.username}</p>
        ))
      )}
    </div>
      </>
  );
}

export default App;
