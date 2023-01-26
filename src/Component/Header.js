import React from 'react'

const Header = () => {
  return (
    <header>
      <div class="logo-info"><a href="#">Seidu</a></div>
      <div class="hamburger-menu" id="hamburger"><i onClick={()=>console.log("u clicked")} class="fa fa-bars"></i></div>
    </header>
  )
}

export default Header