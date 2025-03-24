import React, { useState } from 'react';
import './CourseRegistration.css';

const CourseRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    state: '',
    city: '',
    course: '',
    experienceLevel: 'beginner',
    startDate: '',
    comments: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    { id: 'web-dev-frontEnd', name: 'Web Development FrontEnd' },
    { id: 'web-dev-fullstack', name: 'Web Development FullStack' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'cyber-security', name: 'Cyber Security' },
    { id: 'ai-ml', name: 'AI & Machine Learning' },
    { id: 'ui/ux', name: 'UI/UX' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'mobile-dev', name: 'Mobile App Development' },
    { id: 'python', name: 'Python Programming' },
    { id: 'graphic-design', name: 'Graphics Design' },
  ];

  const experienceLevels = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ];

  const nigeriaStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 
    'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 
    'Ekiti', 'Enugu', 'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 
    'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      state: '',
      city: '',
      course: '',
      experienceLevel: 'beginner',
      startDate: '',
      comments: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://formspree.io/f/xvgkrnol', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus({
          success: true,
          message: 'Registration successful! We will contact you soon.'
        });
        resetForm();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: error.message || 'Registration failed. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="course-registration-container">
      <h2 className="registration-title">Course Registration</h2>
      <form 
        onSubmit={handleSubmit}
        className="registration-form"
      >
        <input type="hidden" name="_subject" value="New Course Registration" />
        <input type="hidden" name="_replyto" value={formData.email} />
        <input type="hidden" name="_format" value="plain" />

        <div className="form-group">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Full Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
            required
            placeholder="Street address, house number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state" className="form-label">State</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">-- Select State --</option>
            {nigeriaStates.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="city" className="form-label">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="course" className="form-label">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="">-- Select a course --</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Experience Level</label>
          <div className="radio-group">
            {experienceLevels.map(level => (
              <label key={level.id} className="radio-label">
                <input
                  type="radio"
                  name="experienceLevel"
                  value={level.id}
                  checked={formData.experienceLevel === level.id}
                  onChange={handleChange}
                  className="radio-input"
                />
                {level.name}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="startDate" className="form-label">Preferred Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="comments" className="form-label">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register Now'}
        </button>

        {submissionStatus && (
          <div className={`submission-message ${submissionStatus.success ? 'success' : 'error'}`}>
            {submissionStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default CourseRegistration;