import React, { useReducer, useState } from 'react'
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

const initialState = {
    name: '',
    email: '',
    phone: '',
    message: '',
}

const formReducer = (state, action) => {
    switch(action.type) {
        case 'SET_FIELD': 
            return {...state, [action.field]: action.value }
        case 'RESET_FIELD':
            return initialState
        default:
            return state
    }
}

function Contact() {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [messageResponse, setMessageResponse] = useState(null)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        dispatch({type: 'SET_FIELD', field: name, value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setMessageResponse(null) // Clear previous messages

        try {
            const response = await fetch('https://formspree.io/f/myzejbwb', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify(state)
            })

            const data = await response.json()
            
            if (data.ok || data.success) {
                setMessageResponse({ 
                    text: 'Your message has been sent successfully!', 
                    isError: false 
                })
                dispatch({ type: 'RESET_FIELD' })
            } else {
                setMessageResponse({ 
                    text: 'An error occurred while sending your message. Please try again.', 
                    isError: true 
                })
            }
        } catch (error) {
            setMessageResponse({ 
                text: 'Network error. Please check your connection and try again.', 
                isError: true 
            })
        } finally {
            setIsLoading(false)
        }
    }

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
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={state.name} 
                            required 
                            placeholder='Enter your name' 
                            onChange={handleInputChange}
                        />
                        <label>Phone</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder='Enter your phone number' 
                            value={state.phone} 
                            onChange={handleInputChange}
                        />
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            required 
                            placeholder='Enter your Email' 
                            value={state.email} 
                            onChange={handleInputChange}
                        />
                        <label>Message</label>
                        <textarea 
                            name="message" 
                            required 
                            placeholder='Write your message here' 
                            rows='5' 
                            value={state.message} 
                            onChange={handleInputChange}
                        ></textarea>
                        <button type="submit" className='btn' disabled={isLoading}>
                            <span>Send</span>
                        </button>
                        {isLoading && <img src={spinner_icon} alt='' className='spinner'/>}
                        {messageResponse && (
                            <div className={`response ${messageResponse.isError ? 'error' : 'success'}`}>
                                {messageResponse.text}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact