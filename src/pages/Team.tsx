import NavBar from '../components/NavBar'
import Header from '../components/Header'
import PageHead from '../components/PageHead'
import Footer from '../components/Footer'

export default function Team() {
  
  return (
    <div className='teampage'>
      <Header/>
      <NavBar
        currentPage='Meet The Team'
      />
      <PageHead
        currentPageHead='MEET THE TEAM'
      />
      <div className='teampageinfo'>
        <p>
          President & Founder: Scot Jones Sr.
        </p>
        <br/>
        <p>
          Originally from Bronx, New York and a proud Navy veteran who served 11 years as an Aviation Ordnanceman and Petty Officer. Scot Jones Sr has 30 years 
          of experience in the security field which includes Personal Protection  and  is  a certified Private Investigator for the state of Washington. 
          Scot Jones Sr is a graduate and alumni of Ashford University holding a BA degree in Homeland Security and Emergency Management with a minor in Human Resources.
        </p>
        <br/>
        <p>
          Executive Vice President & Co-Owner: Mario Hall
        </p>
        <br/>
        <p>
          Seattle Washington native with 7 years of experience in the security field and comes from a military family. 
          Mario Hall is very strong and ambitious with a mind for business and how to create a positive team to get the job done.
        </p>
        <br/>
        <p>
          Vice President of Operations: Lawrence Harrison Jr.
        </p>
        <br/>
        <p>
          The Vice President of Operations Lawrence Harrison Jr is  from San Diego California and now resides in Phoenix Arizona. Lawrence Harrison Jr is a 
          US Navy veteran with 8 years of service as a Boatswain Mate and Petty Officer, and  20 years of experience in the security field, which includes 
          Personal Protection.
          Lawrence Harrison Jr is a graduate and a alumni of Glendale Community College  holding an AA degree in Criminal Justice and Psychology.

        </p>
      </div>
      <Footer/>
    </div>
  )
}
