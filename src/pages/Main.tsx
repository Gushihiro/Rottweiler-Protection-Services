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
        <h1>Main Page</h1>
      </div>
      <Footer/>
    </div>
  )
}
