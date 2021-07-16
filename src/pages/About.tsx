import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'
export default function About() {
  return (
    <div className='aboutpage'>
      <Header/>
      <NavBar
        currentPage='About Us'
      />
      <PageHead
        currentPageHead='ABOUT US'
      />
      <div className='aboutpageinfo'>
      <p>
        Rottweiler Protection Services LLC is a Black and Veteran owned business that was established in 2014 with the vision for providing Security, 
        Personal Protection, and Escorts to meet the needs of our client(s), while helping the United States Government preserve and protect our borders using 
        anti-terrorism and counter-terrorism measures.
      </p>
      </div>
      <Footer/>
    </div>
  )
}
