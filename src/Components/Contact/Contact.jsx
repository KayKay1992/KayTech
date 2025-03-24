import React from 'react'
import './Contact.css'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import facebook_icon from '../../assets/facebook-icon.png'
import instagram_icon from '../../assets/instagram-icon.png'
import twitter_icon from '../../assets/twitter-icon.png'
import whatsapp_icon from '../../assets/whatsapp-icon.png'
import youtube_icon from '../../assets/youtube-icon.png'
import tiktok_icon from '../../assets/tik-tok-icon.png'
import spinner_icon from '../../assets/spinner-icon.png'


function Contact() {
  return (
    <div className='contact-us'>
        <div className="contact-container">
            <div className="left">
                <h3>Need Help?</h3>
                <p> 
                    We're here to help you. Feel free to reach out to us at any time.
                    </p>
                    <div className="contact">
                        <img src={mail_icon} alt=''/>
                       <p>Contact@online-university.com</p>
                    </div>
                    <div className="contact">
                        <img src={phone_icon} alt=''/>
                       <p>+23467834526534</p>
                    </div>
                    <div className="contact">
                        <img src={location_icon} alt=''/>
                       <p>24, Ada-Goerge ph</p>
                    </div>
                    <div className="social-links">
                        <img src={facebook_icon} alt=''/>
                        <img src={instagram_icon} alt=''/>
                        <img src={twitter_icon} alt=''/>
                        <img src={tiktok_icon} alt=''/>
                        <img src={youtube_icon} alt=''/>
                        <img src={whatsapp_icon} alt=''/>
                    </div>
             
            </div>
            <div className="right">
                <form action="" className="contact-form">
                    <label>Name</label>
                    <input type="text" name="name" required placeholder='Enter your name'/>
                    <label>Phone</label>
                    <input type="tel" name="phone" required placeholder='Enter your phone number'/>
                    <label>Email</label>
                    <input type="email" name="Email" required placeholder='Enter your Email'/>
                    <label>Message</label>
                    <textarea name="message" required placeholder='Write your message here' rows='5'></textarea>
                    <button type="submit" className='btn'>
                        <span>Send</span>
                    </button>
                    <img src={spinner_icon} alt='' className='spinner'/>
                    <span className="response">Message sent Successfully</span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact