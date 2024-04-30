// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
    <Router>   
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />}  />
        <Route path='/About' element={<About />} />
        <Route path='/Logements' element={<Logements />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
