import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'
import Divider from '@material-ui/core/Divider';

export default function Services() {
  return (
    <div className='servicespage'>
      <Header/>
      <NavBar
        currentPage='Services'
      />
      <PageHead
        currentPageHead = 'WHAT WE PROVIDE'
      />
      <div className='servicespageinfo'>
        <h1>Security Patrols & Special Events</h1>
        <div className='serviceCont'>
          <h3>
            For security patrols, we provide personnel to patrol the client's property on an hourly rotation.
          </h3>
          <h3>
            For special events, we provide personnel to work venues at concerts, festivals, weddings, office holiday parties. And other high-profile special events.
            The safety of the guest in attendance while following the guidelines mandated by local and federal laws.
          </h3>
        </div>
        <Divider />
        <h1>Security Consultation</h1>
        <div className='serviceCont'>
          <h3>
            Providing security consultation  enables our hard -working staff to show their talents and experience while putting their knowledge and 
            professionalism to help the client with selecting the best security monitoring system and surveillance cameras to protect 
            their property and business.
          </h3>
          <h3>
            We strive to provide our clients the best prices and most affordable choices of monitoring companies available.
          </h3>
        </div>
        <Divider />
        <h1>
          Personal Escorts
        </h1>
        <div className='serviceCont'>
          <h3>
            We use armed personnel for escorts and protection for clients in the diamond business, entertainment and athletic figures who travel with 
            expensive jewelry and cash that are in travel bags or briefcases.
          </h3>
        </div>
        <Divider />
        <h1>
          Executive Protection
        </h1>
        <div className='serviceCont'>
          <h3>
            At Rottweiler Protection Services we take the security needs of our clients very seriously while providing  top level staff to protect the 
            client physically with around the clock armed protection we will accompany clients to galas, speaking engagements, concert performances we provide 
            high-level security for foreign diplomatic dignitaries.
          </h3>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
