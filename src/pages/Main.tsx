import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Main() {

  return (
    <div className='mainpage'>
      <Header/>
      <NavBar
        currentPage='Home'
      />
      <div className='mainpageinfo'>
        <div className='mainpageabout'>
          <h1>OUR MISSION</h1>
          <h2>
            Rottweiler Protection Services LLC is a Black and Veteran owned business that was established in 2014 with the vision for providing Security, 
            Personal Protection, and Escorts to meet the needs of our client(s), while helping the United States Government preserve and protect our borders using 
            anti-terrorism and counter-terrorism measures.
          </h2>
        </div>
        <div className='mainpageabout'>
          <h2>
            Rottweiler Protection Services Mission is to provide exceptional service to all  clients and preserve their safety by having a great friendly attitude 
            and being first rate professionals.
          </h2>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
