import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css';
import lightLogo from './assets/dark.png'
import darkLogo from './assets/light.png'
import githubLogo from './assets/github-logo.png'
import linkedinLogo from './assets/linkedin.png'
import 'bootstrap/dist/css/bootstrap.css';

const CustomLink = ({ to, external, children}) => {
  return external ? (
    <a href={to} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link to={to}>{children}</Link>
  )
}

const NavBar = () => {
  return (
    <nav className="navi container-fluid">
      <div className="row w-100">

        <div className="col-4">
          <ul className="homePage">
            <li><Link to="/" className="nav-link">Home</Link></li>
          </ul>
        </div>

        <div className="col-4">
          <ul className="pages">
            <li><Link to="/about" className="nav-link">About Me</Link></li>
            <li><Link to="/resume" className="nav-link">Resume</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          </ul>
        </div>

        <div className='col-4'>
          <ul className='socials'>
            <li><CustomLink to="https://github.com/meiy3"><img src={githubLogo} alt="" className='linkIcons' /></CustomLink></li>
            <li><CustomLink to="https://www.linkedin.com/in/john-meynard-demandante-92574931b/"><img src={linkedinLogo} alt="" className='linkIcons' /></CustomLink></li>
          </ul>
        </div>

      </div>
   </nav>
  )
}

export default NavBar