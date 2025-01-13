import React from 'react'
import './styles.css'
import NavBar from './NavBar.jsx'
import Resume from './page/Resume.jsx'
import About from './page/About.jsx'
import Portfolio from './page/Portfolio.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='bg-dark text-white'>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/" element={<Portfolio />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App