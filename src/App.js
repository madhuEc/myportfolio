
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Sidebar from './components/sidebaar';
import About from './pages/about';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
    
  <Router>
    <Sidebar>
    <Routes>
    <Route path='/' element={<Home />}></Route>
  </Routes>
  <Routes>
    <Route path='/about' element={<About />}></Route>
  </Routes>
  </Sidebar>
    </Router>      
    </div>
  );
}

export default App;
