import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './navBarStyle.css';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin.png';
import darkIcon from './assets/dark.png';
import lightIcon from './assets/light.png';
import 'bootstrap/dist/css/bootstrap.css';

const CustomLink = ({ to, external, children }) => {
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link to={to}>{children}</Link>
  );
};

const NavBar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="navi container-fluid text-white">
      <div className="row w-100">
        <div className="col-4">
          <ul className="homePage">
            <li>
              <ScrollLink to="introPage" smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>
                Meynard
              </ScrollLink>
            </li>
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

        <div className='col-4 d-flex justify-content-end align-items-center'>
          <ul className='socials'>
            <li><CustomLink to="https://github.com/meiy3"><img src={githubLogo} alt="GitHub" className='linkIcons' /></CustomLink></li>
            <li><CustomLink to="https://www.linkedin.com/in/john-meynard-demandante-92574931b/"><img src={linkedinLogo} alt="LinkedIn" className='linkIcons' /></CustomLink></li>
            <li><button className="theme-toggle" onClick={toggleTheme}>
            <img src={theme === 'dark' ? lightIcon : darkIcon} alt="Theme Toggle" className="theme-icon" />
          </button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
