import { useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {

  const [mailContent, setMailContent] = useState("")

  const handleInputChange = (event: any) => {
    setMailContent(event.target.value)
  }

  return (
    <div className='contactus'>
      <Header/>
      <NavBar
        currentPage='Contact Us'
      />
      <div className='contactusinfo'>
        <section className='wrapper'>
          <form action="mailto:scotjones@rottprotectionsrvcs.com" method='post' id='contact-form'>
            <textarea name='message' value={mailContent} onChange={handleInputChange} className='messageText'></textarea>
            <button className='btn'type='submit'>Email for more Information</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  )
}
