import Login from './Login';
import Homepage from './Homepage';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;
