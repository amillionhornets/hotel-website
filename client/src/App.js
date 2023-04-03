import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Navbar';
import Booking from './Booking';

function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;
