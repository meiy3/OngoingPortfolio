import React from "react";
import "./styles.css";
import birdImg from "./assets/bird.png";
import jobImg from "./assets/job.png";
import ledgerImg from "./assets/ledger.png";
import docImg from "./assets/docs.png";
import cv from "./assets/Resume.pdf";

const Home = () => {

  function SkillProgress({ name, level }) {
    return (
      <div className="mb-3">
        <div className="d-flex justify-content-between">
          <span className="fw-bold">{name}</span>
        </div>
        <div className="progress" style={{ height: "25px" }}>
          <div
            className="progress-bar"
            style={{ width: level, backgroundColor: "#FD8302" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div>
        <section id="introPage">
          <div className="introPage p-4">
            <div className="row container mt-5 justify-content-center d-lg-flex">
              <div className="intro col-md-6">
                <p className="h1 fw-bolder">
                  <span className="h3 fw-bold">Hello!</span>
                  <br />
                  I'm John Meynard Demandante
                  <br />
                  <span className="h2 fw-bold">A Computer Science Student</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="aboutPage" className="p-4">
          <div className="aboutPage col-8 mx-auto">
            <h1 className="fw-bolder">About</h1>
            <p className="p-4 col-11 mx-auto fw-bold">
              A 4th-year Computer Science student at Holy Angel University,
              currently working in Clark International Airport Corporation as
              an Intern.
            </p>
            <div className="col-6 mx-auto text-center">
              <ul className="about-info">
                <li className="info-item d-flex justify-content-between">
                  <span>Name:</span>
                  <span className="fw-normal">John Meynard Demandante</span>
                </li>
                <li className="info-item d-flex justify-content-between">
                  <span>Date of birth:</span>
                  <span className="fw-normal">July 03, 2003</span>
                </li>
                <li className="info-item d-flex justify-content-between">
                  <span>Address:</span>
                  <span className="fw-normal">San Fernando, Pampanga</span>
                </li>
                <li className="info-item d-flex justify-content-between">
                  <span>Email:</span>
                  <span className="fw-normal">demandantem5@gmail.com</span>
                </li>
                <li className="info-item d-flex justify-content-between">
                  <span>Phone: </span>
                  <span className="fw-normal">+639704953435</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btnCert fw-bold">Certificates</button>
              <a href={cv} download="Meynard_CV.pdf">
                <button className="btnCV fw-bold">Download CV</button>
              </a>
            </div>
          </div>
        </section>

        <section id="skillsPage" className="">
          <div className="skillsPage p-4 col-8 mx-auto bg-custom">
            <h1 className="fw-bolder">Tech Skills</h1>
            <div className="skillsPage p-3">
              <div className="row mx-auto justify-content-center">  
                <div className="col-md-6">
                  <SkillProgress name="HTML" level="90%" />
                  <SkillProgress name="CSS" level="75%" />
                  <SkillProgress name="Python" level="80%" />
                  <SkillProgress name="Power BI" level="75%" />
                </div>
                <div className="col-md-6">
                  <SkillProgress name="JavaScript" level="60%" />
                  <SkillProgress name="React" level="75%" />
                  <SkillProgress name="Java" level="75%" />
                  <SkillProgress name="Excel" level="80%" />
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 col-8 mx-auto bg-custom">
            <h1 className="fw-bolder">Soft Skills</h1>
            <div className="skillsPage p-3">
              <div className="row mx-auto justify-content-center">  
                <div className="col-md-6">
                  <SkillProgress name="Teamwork" level="90%" />
                  <SkillProgress name="Problem Solving" level="85%" />
                  <SkillProgress name="Time Management" level="75%" />
                </div>
                <div className="col-md-6">
                  <SkillProgress name="Flexibility" level="75%" />
                  <SkillProgress name="Problem Analysis" level="80%" />
                  <SkillProgress name="Decision Making" level="65%" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projectsPage" className="pt-4">
          <div className="projectsPage col-8 mx-auto">
            <h1 className="fw-bolder">Projects</h1>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="project-card">
                  <div className="project-info">
                    <img src={birdImg} alt="Bird Sound Classification" className="project-image pb-4" />
                    <h5 className="project-title fw-bolder text-center">Bird Sound Classification</h5>
                    <div className="title-line mx-auto p-6"></div>
                    <p className="project-desc fw-normal text-center pt-4">A CNN model developed in Python classifies bird sounds from audio spectrograms. Integrated into a Flutter-based mobile app, it enables real-time bird sound recognition for research and birdwatching.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="project-card">
                  <div className="project-info">
                    <img src={jobImg} alt="Job Satisfaction Prediction" className="project-image pb-4" />
                    <h5 className="project-title fw-bolder text-center">Job Satisfaction Prediction</h5>
                    <div className="title-line mx-auto p-6"></div>
                    <p className="project-desc fw-normal text-center pt-4">This application utilizes multiple linear regression in Python to predict job satisfaction based on various workplace factors, such as salary, and type of industry. By analyzing input data, it generates predictive insights, helping to assess overall employee satisfaction trends.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="project-card">
                  <div className="project-info">
                    <img src={ledgerImg} alt="Decentralized Ledger" className="project-image pb-4" />
                    <h5 className="project-title fw-bolder text-center">Decentralized Ledger</h5>
                    <div className="title-line mx-auto p-6"></div>
                    <p className="project-desc fw-normal text-center pt-4">A blockchain-based healthcare ledger system built on Solana (SOL) to securely store and manage patient records. It ensures data integrity, transparency, and fast transactions while maintaining patient privacy through decentralized encryption.  </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="project-card">
                  <div className="project-info">
                    <img src={docImg} alt="Document Management System" className="project-image pb-4" />
                    <h5 className="project-title fw-bolder text-center">Document Management System</h5>
                    <div className="title-line mx-auto p-6"></div>
                    <p className="project-desc fw-normal text-center pt-4">An ongoing project that aims to create an administrative hub, implementing a document tracker and dedpartmental calendar for the office using React JS and Firebase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default Home;