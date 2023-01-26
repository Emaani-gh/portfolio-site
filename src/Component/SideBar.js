import React from 'react'
import { Link } from 'react-router-dom'
import pr from '../pr.jpg'
import Header from './Header'

const SideBar = (props) => {
  return (
    <>
    <div className={`sidebar ${props.nav}`} >
      <div className="sidebar-info-container">
        <div className="profile-pic-container"><img src={pr}/></div>
        <div className="profile-info-box">
          <h1>Abdul Salam Seidu</h1>
          <p>Web Developer</p>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to="resume">resume</Link></li>
            <li><Link to="portfolio">portfolio</Link></li>
          </ul>
        </div>
        <div className="social-media">
          <a href="https://github.com/Emaani-gh" target={'_blank'}><i className="fa fa-github"> </i></a>
          <a href="https://www.instagram.com/emaani_gh/" target={'_blank'}><i className="fa fa-instagram"></i></a>
          <a href="https://www.linkedin.com/in/seidu-abdul-salam-434b421a2/" target={'_blank'}><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    {/* <Header /> */}
    </>
  )
}

export default SideBar