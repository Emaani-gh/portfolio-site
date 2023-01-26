import React from 'react'
import pr from '../pr.jpg'


export const About = () => {
  return (
    <section id="about">
          <div className="section-name">
            <h3></h3><span>About Me</span>
          </div>
          <div className="section-container about-box">
            <div className="about-image"><img src={pr} /></div>
            <div className="about-intro">
              <p>I am a Full Stack developer with passion for creating new things. I'm popularly known as Emaani , i love technology, adventures and football. I get intrigued with computers and tech devices and i chose the path of a Software developer.</p>
              <div className="cta"><a href="https://www.linkedin.com/in/seidu-abdul-salam-434b421a2/" target={'_blank'}>Contact Me</a></div>
            </div>
          </div>
        </section>
  )
}
