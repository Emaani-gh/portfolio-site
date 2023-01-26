import React from 'react'
import { About } from './About'
import Services from './Services'
import Skills from './Skills'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="wrap">
        <About />
        <Services />
        <Skills />
      </div>
    </div>
  )
}

export default Home