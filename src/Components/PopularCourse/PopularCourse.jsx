import React from 'react'
import './PopularCourse.css';
import Title from '../Title/Title';
import cybersecurityImg from "../../assets/cybersecurityImgR.jpg";
import  DataImag from "../../assets/DataAnalysisImgR.jpg";
import uximg from "../../assets/uxImg.jpg";
import webdevelopmentImg from "../../assets/webdevelopmentR.jpg";


const PopularCourse = () => {
  return (
    <div className='popular-course-main wrapper'>
        <Title title='PopularCourses' titleText='Top Four Most In Demand Courses'/>
        <div className="popular-course">
            <div className="course">
                <img src={cybersecurityImg} alt=''/>
                <div><span className="course-title">Cyber Security</span> </div>
            </div>
            <div className="course">
                <img src={webdevelopmentImg} alt=''/>
                <div><span className="course-title">Web Development</span> </div>
            </div>
            <div className="course">
                <img src={DataImag} alt=''/>
                <div><span className="course-title">Data Analysis</span> </div>
            </div>
            <div className="course">
                <img src={uximg} alt=''/>
                <div><span className="course-title">UI/UX</span> </div>
            </div>
        </div>
    </div>
  )
}

export default PopularCourse