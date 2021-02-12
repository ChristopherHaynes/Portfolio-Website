import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../../Button'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <div className='footer-container'>
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Here is the heading of the subscription section 
          </p>    
          <p className="footer-subscription-text">
            Here is the description of the subscription section
          </p>
          <div className="input-areas">
            <form>
              <input type="email" name ="email" placeholder="Your Email" className="footer-input"/>
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>  
          <div className="footer-links">
            <div className="footer-links-wrapper">
              <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='/'>Link 1</Link>
                <Link to='/'>Link 2</Link>
                <Link to='/'>Link 3</Link>
                <Link to='/'>Link 4</Link>
                <Link to='/'>Link 5</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}
