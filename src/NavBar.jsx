import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css';
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
    <nav className="navi container-fluid bg-dark text-white">
      <div className="row w-100">
        <div className="col-4">
          <ul className="homePage">
            <li><a href="#introPage" className="nav-link">Home</a></li>
          </ul>
        </div>

        <div className="col-4">
          <ul className="pages">
            <li><a href="#aboutPage" className="nav-link">About</a></li>
            <li><a href="#skillsPage" className="nav-link">Skills</a></li>
            <li><a href="#projectsPage" className="nav-link">Projects</a></li>
            <li><a href="#othersPage" className="nav-link">Others</a></li>
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