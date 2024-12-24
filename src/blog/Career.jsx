import React from 'react';

const CareerPage = () => {
  const positions = [
    {
      title: 'Software Developer',
      location: 'Noida, India',
      description: 'We are looking for a skilled software developer proficient in JavaScript, React, and Node.js to join our dynamic team.',
      link: '/apply/software-developer',
    },
    {
      title: 'Cloud Engineer',
      location: 'Delhi, India',
      description: 'Join us as a Cloud Engineer, responsible for cloud architecture, deployment, and security using AWS, Azure, and GCP.',
      link: '/apply/cloud-engineer',
    },
    {
      title: 'Data Scientist',
      location: 'Remote',
      description: 'Data-driven professionals are needed! Apply your knowledge of AI and Machine Learning to build innovative solutions.',
      link: '/apply/data-scientist',
    },
    {
      title: 'Marketing Specialist',
      location: 'Mumbai, India',
      description: 'We are hiring a Marketing Specialist to lead and execute marketing strategies in the technology sector.',
      link: '/apply/marketing-specialist',
    },
  ];

  return (
    <div className="career-page-container">
      <div className="background-image"></div>
      <h1 className="page-title" style={{color:"black"}}>Join Our Team - Careers at Ducat Institution</h1>
      <p className="page-description" style={{color:"black"}}>
       <b>At Ducat Institution, we are constantly looking for passionate individuals who are eager to build their careers in the technology and education sectors. Explore our open positions below and take the next step in your professional journey.
       </b> </p>
      
      <div className="positions-grid">
        {positions.map((position, index) => (
          <div className="position-box" key={index}>
            <h2>{position.title}</h2>
            <p>{position.location}</p>
            <p>{position.description}</p>
            <a href={position.link} className="apply-btn">Apply Now</a>
          </div>
        ))}
      </div>
      
      <div className="career-benefits">
        <h2>Why Join Us?</h2>
        <p>We offer a range of benefits to ensure you can thrive in a healthy and fulfilling work environment:</p>
        <ul>
          <li>Competitive Salary Packages</li>
          <li>Health and Wellness Benefits</li>
          <li>Opportunities for Professional Growth</li>
          <li>Work-Life Balance</li>
          <li>Flexible Working Hours and Remote Opportunities</li>
        </ul>
      </div>
    </div>
  );
};

export default CareerPage;
