import React from 'react'
import './Header.css'
import Logo from '../../images/rottylogosmall.png'
export default function Header() {
  return (
    <div className='header'>
      <div className='headertext'>
        <img src={Logo} alt ='RottweilerLogo'/>
      </div>
    </div>
  )
}
