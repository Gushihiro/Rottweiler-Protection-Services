import { useState } from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'
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
          <form action="mailto:someone@example.com" method='post' id='contact-form'>
            <textarea name='message' value={mailContent} onChange={handleInputChange} className='messageText'></textarea>
            <button className='btn'type='submit'>Send an Email</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  )
}
