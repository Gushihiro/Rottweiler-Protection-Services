import './ContactForm.css'

export default function index() {
  return (
    <div>
      <section className="wrapper">
        <form id = "contact-form">
          <button className="btn" type = "submit" >
            <a className="btnlink" href="mailto:scotjones@rottprotectionsrvcs.com">
              Email For More Information
            </a>
          </button>
        </form>
      </section>
    </div>
  )
}
