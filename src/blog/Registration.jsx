import React, { useEffect, useRef } from 'react';

const RegistrationForm = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  return (
    <div className="registration-container">
      <div className="form-box" ref={formRef}>
        <h1>Register for Our Courses</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>

          <div className="form-group">
            <label htmlFor="course">Select Course</label>
            <select id="course" name="course">
              <option value="data-science">Data Science & AI</option>
              <option value="cloud-computing">Cloud Computing</option>
              <option value="full-stack">Full Stack Development</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="devops">DevOps</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
