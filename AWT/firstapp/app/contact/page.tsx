import React from 'react'
import page from '../page'

function ContactPage() {
  return (
     <div className='row'>
        <div className='col card p-4 m-4'>
          <h1>Contact Us</h1>
          <p className='text-secondary'>If any query and suggestion that concerns you, please feel free to reach out to us.</p>
          <h4>Contact no.</h4>
          <p className='text-secondary'>1234567890</p>
          <h4>Email</h4>
          <p className='text-secondary'>abc@email.com</p>
        </div>
        <div className='col card p-4 m-4'>
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={5} placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
  )
}

export default ContactPage
