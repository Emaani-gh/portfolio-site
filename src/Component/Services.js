import React from 'react'
import mobile from '../mobile-app.png'
import website from '../web-icon.png'
import web_app from '../web-app.png'

const Services = () => {
  return (
    <section id="services">
        <div className="section-name">
            <h3></h3><span>What I Do</span>
        </div>
        <div className="section-container services-box">
            <div className="service">
              <div className="service-image"><img src={website} /></div>
              <div className="service-content">
                <h4>Website dev</h4>
                <p>I build responsive and interactive websites using modern technologies</p>
              </div>
            </div>
            <div className="service">
              <div className="service-image"><img src={web_app} /></div>
              <div className="service-content">
                <h4>Web App</h4>
                <p>I create functional web based applications with high performance to cater for both your personal and business needs</p>
              </div>
            </div>
            {/* <div className="service">
              <div className="service-image"><img src={mobile} /></div>
              <div className="service-content">
                <h4>Mobile App</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam deleniti doloribus natus voluptatum? Explicabo, modi.</p>
              </div>
            </div> */}
        </div>
    </section>
  )
}

export default Services