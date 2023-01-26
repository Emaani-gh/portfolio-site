import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div class="logo-info"><Link to="/about">Seidu</Link></div>
      <div class="hamburger-menu" id="hamburger"><i onClick={()=>console.log("u clicked")} class="fa fa-bars"></i></div>
    </header>
  )
}

export default Header