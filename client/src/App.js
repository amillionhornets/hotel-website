import Login from './Login';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
 return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </div>
 );
}

export default App;
