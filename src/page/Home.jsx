import React from 'react'
import '../styles.css';

const Home = () => {
    function SkillProgress({ name, level, color }) {
        return (
          <div className="mb-3">
            <div className="d-flex justify-content-between">
              <span className="fw-bold">{name}</span>   
            </div>
            <div className="progress" style={{ height: "25px" }}>
              <div className={`progress-bar ${color}`} style={{ width: level }}></div>
            </div>
          </div>
        );
    }

    return (
        <div>
            <section id="introPage">
                <div className='introPage'>
                    <div className='row container mt-5 justify-content-center d-lg-flex'>
                        <div className='intro col-md-6'>
                            <p className='h1 fw-bolder'>     
                                <span className='h3 fw-bold'>Hello!</span><br/>
                                I'm John Meynard Demandante <br/>
                                <span className='h2 fw-bold'>A Computer Science Student</span>
                            </p>   
                        </div>
                    </div>
                </div>
            </section>

            <section id="aboutPage" className="text-white p-4">
                <div className='aboutPage'>
                    <h1 className='fw-bolder'>About</h1>
                    <div className='row'>
                        <h4 className="info p-4 col-9 text-white mx-auto text-center fw-bolder">A 4th-year Computer Science student at Holy Angel University, 
                        currently working in Clark International Airport Corporation as an Intern. 
                        Besides programming and scripting, I am passionate about data analytics, machine learning. 
                        In my free time, I enjoy watching tech-related videos online, and playing video games.
                        </h4>       
                    </div>
                        <button className="btn-primary bg-success text-white fw-bolder float-end">Certificates</button>
                        <button className="btn-primary bg-success text-white fw-bolder float-end">Download CV</button>
                </div>
            </section>
      
            <section id="skillsPage" className="skillsPage text-white p-4">
                <h1 className="fw-bolder">Tech Skills</h1>
                <div className="skillsPage p-3 text-white">
                    <div className="row">
                        <div className="col-md-6">
                            <SkillProgress name="HTML" level="90%" color="bg-success" />
                            <SkillProgress name="CSS" level="75%" color="bg-success" />
                            <SkillProgress name="Python" level="80%" color="bg-success" />
                            <SkillProgress name="Power BI" level="75%" color="bg-success" />
                        </div>
                        <div className="col-md-6">
                            <SkillProgress name="JavaScript" level="60%" color="bg-success" />
                            <SkillProgress name="React" level="75%" color="bg-success" />
                            <SkillProgress name="Java" level="75%" color="bg-success" />
                            <SkillProgress name="Excel" level="80%" color="bg-success" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="projectsPage" calssName="projectsPage text-white p-4">
                <h1 className="fw-bolder">Projects</h1>
                <div className="projectsPage">

                </div>
            </section>
        </div>
    )
}

export default Home