import React from 'react'
import { Link } from 'react-router-dom'
import ecommerceApp from '../images/ecommerceApp.png'
import noteAppImg from '../images/noteApp.png'
import weatherAppImg from '../images/weatherApp.png'

const Portfolio = () => {
  return (
    <div className='wrapper'>
        <div className='wrap '>
            <div className='container py-4'>
              <div className='port'>
                <a href='https://ecommerce-0iru.onrender.com/' target={'_blank'} class="crd ">
                  <img class="img-fluid h-100" src={ecommerceApp} alt="Card image "/>
                  <div class="over-lay  d-flex justify-content-center align-items-center">
                    <h5 class="text-white">Ecommerce Site</h5>
                  </div>
                </a>

                <a href='https://note-app-gk91.onrender.com' target={'_blank'} class="crd">
                  <img class="img-fluid h-100" src={noteAppImg} alt="Card image"/>
                  <div class="over-lay d-flex justify-content-center align-items-center">
                    <h5 class="text-light">Note Taking App</h5>
                  </div>
                </a>

                <a href='https://emaani-gh.github.io/weather-application/' target={'_blank'} class="crd">
                  <img class="img-fluid h-100" src={weatherAppImg} alt="Card image"/>
                  <div class="over-lay d-flex justify-content-center align-items-center">
                    <h5 class="text-light">weatherApp</h5>
                  </div>
                </a>
                
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio