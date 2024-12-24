import React from 'react';

const CertificatePage = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-header">
        <h1>Get Your Course Completion Certificate</h1>
        <p>Once you complete a course, you are eligible to receive an official certificate that validates your new skills and achievements.</p>
      </div>

      <div className="certificate-grid">
        <div className="certificate-feature">
          <h2>Why Get Certified?</h2>
          <p>Our certificates serve as proof of your mastery in various technology and marketing courses. Enhance your resume and increase your chances of landing a job with a recognized certificate.</p>
        </div>
        <div className="certificate-feature">
          <h2>Verification Process</h2>
          <p>Enter your course completion ID, and we’ll verify your completion status before providing access to your personalized certificate.</p>
        </div>
        <div className="certificate-feature">
          <h2>Printable and Shareable</h2>
          <p>Once downloaded, you can print your certificate or share it on social media platforms and with potential employers.</p>
        </div>
      </div>

      <div className="certificate-form">
        <h2>Claim Your Certificate</h2>
        <form>
          <label htmlFor="name" style={{color:"black"}}>Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="course" style={{color:"black"}}>Course Name:</label>
          <input type="text" id="course" name="course" required />

          <label htmlFor="completionID" style={{color:"black"}}>Course Completion ID:</label>
          <input type="text" id="completionID" name="completionID" required />

          <button type="submit">Get Certificate</button>
        </form>
      </div>
    </div>
  );
};

export default CertificatePage;
