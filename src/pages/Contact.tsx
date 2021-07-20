import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className='contactus'>
      <Header/>
      <NavBar
        currentPage='Contact Us'
      />
      <div className='contactusinfo'>

      </div>
      <Footer />
    </div>
  )
}
