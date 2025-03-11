import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <h1 className='hero-title'>
            Your Best Tech Academy You Can Trust
        </h1>
        <h6 className="hero-subtitle">Our Courses</h6>
        <div className="hero-courses">
            <button className="btn">
                <span>Design</span>
            </button>
            <button className="btn">
                <span>Programming</span>
            </button>
            <button className="btn">
                <span> Marketing</span>
            </button>
            <button className="btn">
                <span>Business</span>
            </button>
            <button className="btn">
                <span>Security</span>
            </button>
            <button className="btn">
                <span>Data</span>
            </button>
        </div>
    </div>
  )
}

export default Hero