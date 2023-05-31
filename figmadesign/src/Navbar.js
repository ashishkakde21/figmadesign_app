import React from 'react'
import Buttonnavbar from '../shared/Buttonnavbar'
import '../style/navbar.scss'
function Navbar() {
  return (
    <div className='navbar'>
        <h3>Lasles<span>VPN</span></h3>
      </div>

      { /* page btn */}
      
      <div className='header-button'>
        <ButtonHeader name='About'/>
        <ButtonHeader name='Features'/>
        <ButtonHeader name='Pricing'/>
        <ButtonHeader name='Testimonials'/>
        <ButtonHeader name='Help'/>
      </div>

      {/* signin/up */}
      <div className='sign-in-up'>
        <button>Sign in</button>
        <button>Sign Up</button>
      </div>
    )

}

export default Navbar