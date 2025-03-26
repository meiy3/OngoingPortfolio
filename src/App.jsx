import React from 'react'
import './styles.css'
import NavBar from './NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className=''>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App