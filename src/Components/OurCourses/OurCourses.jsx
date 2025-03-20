import React from 'react'
import './OurCourses.css'
import pic1 from '../../assets/appdev.jpg'
import pic2 from '../../assets/cybersecurity.jpg'
import pic3 from '../../assets/frontend.jpg'
import pic4 from '../../assets/data.jpg'
import pic5 from '../../assets/fullstack.jpg'
import pic6 from '../../assets/digital_marketing.jpg'
import pic7 from '../../assets/python.jpg'
import pic8 from '../../assets/graphics.jpg'
import pic9 from '../../assets/uxImg.jpg'
import pic10 from '../../assets/pic6.jpg'
function OurCourses() {
  return (
    <div className='online-class'>
        <div className="img">
            <img src={pic10} alt="" />
        </div>
        <div className="attendees">
            <div className="item">
                <div className="img-ctn">
                    <img src={pic2} alt="" />
                </div>
                <span>Cybersecurity</span>
                <span className='span'>Duration: 16 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic3} alt="" />
                    
                </div>
                <span>Web Development: FrontEnd</span>
                <span className='span'>Duration: 12 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic5} alt="" />
                    
                </div>
                <span>Web Development: Fullstack</span>
                <span className='span'>Duration: 20 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic7} alt="" />
                </div>
                <span>Python Programming</span>
                <span className='span'>Duration: 12 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic4} alt="" />
                </div>
                <span>Data Science</span>
                <span className='span'>Duration: 16 Weeks</span>

            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic6} alt="" />
                </div>
                <span>Digital Marketing</span>
                <span className='span'>Duration: 16 Weeks</span>
              
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic1} alt="" />
                </div>
                <span>App Development</span>
                <span className='span'>Duration: 16 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic8} alt="" />
                </div>
                <span>Graphics Design</span>
                <span className='span'>Duration: 12 Weeks</span>
            </div>
            <div className="item">
                <div className="img-ctn">
                    <img src={pic9} alt="" />
                </div>
                <span>UI/UX</span>
                <span className='span'>Duration: 12 Weeks</span>
            </div>
           
        </div>
    </div>
  )
}

export default OurCourses