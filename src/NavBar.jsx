import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';
import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin.png'
import darkIcon from './assets/dark.png'
import lightIcon from './assets/light.png'
import 'bootstrap/dist/css/bootstrap.css';

const CustomLink = ({ to, external, children}) => {
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link to={to}>{children}</Link>
  )
}

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navi container-fluid text-white">
      <div className="row w-100">
        <div className="col-4">
          <ul className="homePage">
            <li><ScrollLink to="introPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>Meynard</ScrollLink></li>
          </ul>
        </div>

        <div className="col-4">
          <ul className="pages">
            <li><ScrollLink to="aboutPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>About</ScrollLink></li>
            <li><ScrollLink to="skillsPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>Skills</ScrollLink></li>
            <li><ScrollLink to="projectsPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>Projects</ScrollLink></li>
            <li><ScrollLink to="othersPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>Others</ScrollLink></li>
          </ul>
        </div>
        
        <div className='col-4'>
          <ul className='socials'>
            <li><CustomLink to="https://github.com/meiy3"><img src={githubLogo} alt="" className='linkIcons' /></CustomLink></li>
            <li><CustomLink to="https://www.linkedin.com/in/john-meynard-demandante-92574931b/"><img src={linkedinLogo} alt="" className='linkIcons' /></CustomLink></li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                <img src={isDarkMode ? lightIcon : darkIcon} alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"} className='linkIcons' />
              </button>
            </li>
          </ul>
        </div>
      </div>
   </nav>
  )
}

export default NavBar