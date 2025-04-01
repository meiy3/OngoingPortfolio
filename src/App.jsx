import React from 'react'
import './styles.css'
import NavBar from './NavBar.jsx'
import Home from './Page/Home.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className=''>
      <NavBar />
      <div>
          <Home />
      </div>
    </div>
  );
};

export default App