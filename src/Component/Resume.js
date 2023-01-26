import React from 'react'

const Resume = () => {
  return (
    <div className='wrapper'>
        <div className='wrap'>
          <section id='resume-container'>
            <h1 className='name'> SEIDU <span className='lastName'>ABDUL SALAM</span> </h1>
            <div className='address'> 
              <p>Accra, Ghana GA 123 | +233249061385 | abdulsalamseidu@protonmail.com</p>
            </div>

            <div className='res-sum'>
              <h4 className='res-header'>Professional Summary</h4>
              <hr/>
              <p>
                To seek and maintain a position that offers professional challenges utilizing interpersonal skills,
                excellent time management and problem solving skills.
              </p>
            </div>

            <div className='res-skills'>
              <h4 className='res-header'> Skills</h4>
              
              <hr/>

              <div className="section-container skills-box">
                <div className="skill client-side-skills">
                  <h4>Client side</h4>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>

                <div className="skill server-side-skills">
                  <h4>Server side</h4>
                  <ul>
                    <li>node Js</li>
                    <li>Express Js</li>
                    <li>Sequelize</li>
                  </ul>
                </div>

                <div className="skill other-skills">
                  <h4>Other skills</h4>
                  <ul>
                    <li>Customer service</li>
                    <li>Data Annotation</li>
                    <li>Phone Verification Specialist</li>
                  </ul>
                </div>
              </div>

              

            </div>

            <div className='res-work'>
              <h4 className='res-header'>Work History</h4>
              <hr/>

              <div className='job'>
                <div>
                  <h4 className='title'>Computing and Coding tutor</h4>
                  <p>05/2022 to 03/2022</p>
                </div>
                <h4 className='company-name'>Iqra Educational Centre</h4>
                {/* <ul>
                  <li>Label Data such as images of people, cars,roads and other objects to be used for artificial intelligence applications such as self-driving cars and smart products </li>
                  <li>Work as part of a team, as well as inspecting and reviewing data labels of other colleagues</li>
                </ul> */}
              </div> 
              
              <div className='job'>
                <div>
                  <h4 className='title'>Entry Level | Data Labeler</h4>
                  <p>11/2020 to 05/2021</p>
                </div>
                <h4 className='company-name'>Data Maker</h4>
                <ul>
                  <li>Label Data such as images of people, cars,roads and other objects to be used for artificial intelligence applications such as self-driving cars and smart products </li>
                  <li>Work as part of a team, as well as inspecting and reviewing data labels of other colleagues</li>
                </ul>
              </div> 

              <div className='job'>
                <div>
                  <h4 className='title'>Volunteer / Internship | Sales personnel / customer Support</h4>
                  <p>05/2017 to 09/2019</p>
                </div>
                <h4 className='company-name'>Mobile Phone People</h4>
                <ul>
                  <li>Assisting customers in product purchase and setting up product for usage</li>
                  <li>Sales of products/ mobile phones</li>
                  <li>Reporting sales to the manager</li>
                </ul>
              </div>
            </div>

            <div className='res-education'>
              <h4 className='res-hearder'>Education</h4>
              <hr/>
              <div>
                <h4>
                  Degree | Bsc In Information Technology
                  Ghana Communication Technology University - Accra-Ghana
                </h4>

                <p>Expected in 09/2023</p>
              </div>
            </div>

            <div className='res-cert'>
             
            </div>
          </section>
        </div>
    </div>
    
  )
}

export default Resume