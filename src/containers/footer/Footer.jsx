import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others</h1>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-container'>
        <div className='gpt3__footer-container_links'>
          <h3>Links</h3>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-container_company'>
          <h3>Company</h3>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-container_touch'>
          <h3>Get in touch</h3>
          <p>Montreal, Canada</p>
          <p>999-9999999</p>
          <p>abc@def.ghi</p>
        </div>
        <div className='gpt3__footer-container_copyright'>
          <h3>GPT-3</h3>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
    <div className='gpt3__footer-ending'>
      <p>© 2024 GPT-3. All rights reserved.</p>
    </div>
    </>
    
  )
}

export default Footer