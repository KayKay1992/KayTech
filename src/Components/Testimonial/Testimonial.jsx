import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";
import Title from "../Title/Title";
import arrow_left from '../../assets/prev-icon.png';
import arrow_right from '../../assets/next-icon.png';
import testimonials from '../../assets/testimonial';
import Indicator from '../Indicator/Indicator';

function Testimonial() {
  const slider = useRef(null);
  const [sliderCount, setSliderCount] = useState(0);
  const [testimonialLength, setTestimonialLength] = useState(testimonials.length);
  const intervalRef = useRef(null);

  // Function to go to the next slide
  const handleNext = () => {
    setSliderCount((prevCount) => (prevCount + 1) % testimonialLength); // Automatically loops back to the first slide when it reaches the last
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setSliderCount((prevCount) => (prevCount - 1 + testimonialLength) % testimonialLength); // Loops back to the last slide when at the first one
  };

  // Function to start the slider autoplay
  const startSlider = () => {
    if (intervalRef.current) return; // Prevent multiple intervals
    intervalRef.current = setInterval(handleNext, 5000); // Move to next slide every 5 seconds
  };

  // Function to stop the slider autoplay
  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Stop the autoplay
      intervalRef.current = null; // Reset the interval reference
    }
  };

  useEffect(() => {
    // Only add event listeners if the slider ref is valid
    if (slider.current) {
      startSlider(); // Start autoplay when the component is mounted
      slider.current.addEventListener('mouseenter', stopSlider); // Stop autoplay on mouse enter
      slider.current.addEventListener('mouseleave', startSlider); // Resume autoplay on mouse leave

      return () => {
        stopSlider(); // Cleanup interval on component unmount
        if (slider.current) {
          slider.current.removeEventListener('mouseenter', stopSlider); // Remove mouse enter listener
          slider.current.removeEventListener('mouseleave', startSlider); // Remove mouse leave listener
        }
      };
    }
  }, [testimonialLength]);

  useEffect(() => {
    // Update slider transform based on sliderCount
    if (slider.current) {
      slider.current.style.transform = `translateX(${sliderCount * (-100 / testimonialLength)}%)`;
      slider.current.style.width = `${testimonialLength * 100}%`;
    }
  }, [sliderCount, testimonialLength]); // Re-run when sliderCount or testimonialLength changes

  return (
    <div className="testimonials" id="testimonials">
      <Title
        title="What Our Students Are Saying"
        titleText="Explore The Impact We Have Made On Our Students"
      />
      <img src={arrow_left} alt="Previous" className="arrow-left" onClick={handlePrev} />
      <img src={arrow_right} alt="Next" className="arrow-right" onClick={handleNext} />
      <div className="slider" ref={slider}>
        {testimonials.map((testimony, index) => (
          <div className="slide" key={index}>
            <div className="content">
              <div className="testifier">
                <div className="img">
                  <img src={testimony.photo} alt={testimony.name} />
                </div>
                <div className="testifier-info">
                  <h4>{testimony.name}</h4>
                  <span>{testimony.course}</span>
                </div>
              </div>
              <div className="testimony">{testimony.message}</div>
            </div>
          </div>
        ))}
      </div>
      <Indicator items={testimonials} counter={sliderCount}/>
    </div>
  );
}

export default Testimonial;
