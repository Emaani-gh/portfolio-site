import React from 'react'

const Skills = () => {
  return (
    <section id="skills">
        <div className="section-name">
            <h3></h3><span>Skills</span>
        </div>
        <div className="section-container skills-box">
            <div className="skill client-side-skills">
              <h4>Client side</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div className="skill server-side-skills">
              <h4>Server side</h4>
              <ul>
                <li>node Js</li>
                <li>Express Js</li>
              </ul>
            </div>
        </div>
    </section>
  )
}

export default Skills