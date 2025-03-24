import React from "react";
import "./About.css";
import Title from "../Title/Title";
import aboutMainImg from "../../assets/aboutMainImg.jpg";
import aboutImg1 from "../../assets/aboutImg1.jpg";
import aboutImg2 from "../../assets/aboutImg2.jpg";
import aboutImg3 from "../../assets/aboutImg3.jpg";
import aboutImg4 from "../../assets/aboutImg4.jpg";
import knowledgeIconImg from "../../assets/knowledgeIconImg.jpg";
import playIconImg from "../../assets/playIconImg.jpg";

function About({setHideVideoPlayer}) {
  return (
    <div className="about" id="about">
      <div className="about-top">
        <div className="item-left">
          <img src={aboutMainImg} alt="" />
          <span className="play-icon" onClick={()=> setHideVideoPlayer(false)}>
            <img src={playIconImg} alt="" />
          </span>
        </div>
        <div className="item-right">
          <Title title="About Us" titleText="Learn About Us And What We Do" />
          <p>
            At KayTech Academy, we are dedicated to empowering individuals and
            businesses through the transformative power of technology. As a
            leading tech academy, we offer a diverse range of courses designed
            to equip learners with the skills they need to succeed in today’s
            ever-evolving digital landscape. Whether you are an aspiring tech
            professional or a business looking to harness the full potential of
            technology for growth, KayTech is here to guide you every step of
            the way. Our curriculum is crafted by industry experts and focuses
            on the latest technologies and trends, ensuring that our students
            gain hands-on experience and practical knowledge.
          </p>
          <p>
            For businesses, we go beyond teaching — we partner with you to
            understand your unique challenges and provide tailored solutions
            that drive innovation and growth through technology. Our mission is
            to bridge the gap between technical expertise and business needs,
            helping companies streamline processes, increase efficiency, and
            stay ahead of the competition. Join us at KayTech Academy, where we
            inspire, teach, and help you grow in the world of technology!
          </p>
        </div>
      </div>
      <div className="about-middle">
        <div className="item">
          <img src={aboutImg1} alt="" />
        </div>
        <div className="item">
          <img src={aboutImg2} alt="" />
        </div>
        <div className="item">
          <img src={aboutImg3} alt="" />
        </div>
        <div className="item">
          <img src={aboutImg4} alt="" />
        </div>
      </div>
      <div className="about-bottom">
    
     
      
        <div className="item">
          <div className="icon">
            <img src={knowledgeIconImg} alt="" />
          </div>
          <h3>Hands-on Learning</h3>
          <p>
          We believe in learning by doing. Our courses focus on practical, real-world applications, ensuring that students gain experience by working on projects, coding exercises, and case studies. This hands-on approach allows students to develop the technical skills needed to tackle complex problems and succeed in their careers.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src={knowledgeIconImg} alt="" />
          </div>
          <h3>Blended Learning</h3>
          <p>
          Combining online learning with in-person or live sessions, we offer a flexible approach that allows students to learn at their own pace while also benefiting from interactive, instructor-led discussions. This method ensures that learners can access course materials anytime, anywhere, while still receiving personalized support and feedback.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src={knowledgeIconImg} alt="" />
          </div>
          <h3>Collaborative Learning</h3>
          <p>
          Collaboration is key to growth. Our students engage in group projects and peer-to-peer learning, allowing them to share ideas, solve problems together, and learn from one another. This method fosters a supportive learning environment and simulates real-world teamwork in the tech industry.
          </p>
        </div>
        <div className="item">
          <div className="icon">
            <img src={knowledgeIconImg} alt="" />
          </div>
          <h3>Business-Focused Training</h3>
          <p>
          For our corporate clients, we provide tailored training programs that align with specific business goals. These courses integrate industry best practices and tech-driven solutions to help businesses streamline their operations, enhance productivity, and stay competitive in an increasingly digital world.
          </p>
        </div>
        
        
      </div>
     
    </div>

  
  );
}

export default About;
