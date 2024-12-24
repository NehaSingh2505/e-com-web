import React from 'react';

const CounselingPage = () => {
  return (
    <div className="counseling-container">
      <div className="counseling-header">
        <h1>Counseling Services</h1>
        <p>Our experienced counselors are here to guide you in your career and educational journey. Schedule a session and take the next step toward your future success.</p>
      </div>

      <div className="counseling-grid">
        <div className="counseling-feature">
          <h2>Career Guidance</h2>
          <p>Get personalized advice to help you choose the right career path based on your skills and interests.</p>
        </div>
        <div className="counseling-feature">
          <h2>Job Preparation</h2>
          <p>Receive expert tips on resume building, interview preparation, and landing your dream job.</p>
        </div>
        <div className="counseling-feature">
          <h2>Education Counseling</h2>
          <p>Unsure of what courses to take? Our counselors can help you plan your educational journey.</p>
        </div>
        <div className="counseling-feature">
          <h2>Work-Life Balance</h2>
          <p>Learn how to manage stress and maintain a healthy balance between work, education, and personal life.</p>
        </div>
      </div>

      <div className="counseling-form">
        <h2>Book a Counseling Session</h2>
        <form>
          <label htmlFor="name" style={{color:"black"}}>Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email" style={{color:"black"}}>Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="date" style={{color:"black"}}>Preferred Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="message" style={{color:"black"}}>Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" style={{color:"black"}}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CounselingPage;
