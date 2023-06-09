import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import BusinessSignUp from './BusinessSignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Booking from './Booking';
import BusinessSignIn from './BusinessSignIn';
import Account from './Account';
import Hotels from './Hotels';
function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/BusinessSignIn" element={<BusinessSignIn />} />
          <Route path="/BusinessSignUp" element={<BusinessSignUp />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Hotels" element={<Hotels />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;
