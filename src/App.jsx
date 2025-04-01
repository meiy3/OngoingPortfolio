import React from 'react';
import './styles.css';
import NavBar from './NavBar.jsx';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;