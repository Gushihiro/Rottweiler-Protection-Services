import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
export default function Contact() {
  return (
    <div className='contactus'>
      <Header/>
      <NavBar
        currentPage='Contact Us'
      />
      <div className='contactusinfo'>
        Phone Number: (206) 578-8388
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}
