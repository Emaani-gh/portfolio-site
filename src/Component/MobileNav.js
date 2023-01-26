import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'


export const MobileNav = () => {
    const [mobile,setMoble]=useState(false)

    
  return (
    <>
    
    <header>
      <div className="logo-info"><a href="/about">Seidu</a></div>
      <div className="hamburger-menu" id="hamburger"><i onClick={()=>setMoble(!mobile)} className="fa fa-bars"></i></div>
    </header>
    <SideBar nav={mobile ? 'mobile-toggle' : ''}/>
    </>
  )
}
