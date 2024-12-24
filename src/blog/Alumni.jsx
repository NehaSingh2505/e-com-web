import React from 'react';

const AlumniPage = () => {
  const alumni = [
    {
      name: 'John Doe',
      position: 'Senior Software Engineer',
      company: 'Google',
      image: '/PIC.jpg',
      description: 'John specializes in AI and has contributed to multiple projects at Google.',
    },
    {
      name: 'Jane Smith',
      position: 'Cloud Architect',
      company: 'Amazon Web Services',
      image: '/PIC1.jpg',
      description: 'Jane is an expert in cloud computing and has designed scalable systems for AWS.',
    },
    {
      name: 'Mike Johnson',
      position: 'Full Stack Developer',
      company: 'Microsoft',
      image: '/PIC2.jpg',
      description: 'Mike works on building innovative full stack solutions for enterprise clients.',
    },
    {
      name: 'Emily Davis',
      position: 'Cybersecurity Analyst',
      company: 'IBM',
      image: '/PIC3.jpg',
      description: 'Emily is responsible for identifying and mitigating security threats at IBM.',
    },
    {
      name: 'Sarah Wilson',
      position: 'Data Scientist',
      company: 'Facebook',
      image: '/PIC4.jpg',
      description: 'Sarah uses data analytics to drive business decisions at Facebook.',
    },
  ];

  return (
    <div className="alumni-page-container">
      <div className="background-image"></div>
      <h1 className="page-title">Meet Our Alumni</h1>
      <div className="alumni-grid">
        {alumni.map((alumnus, index) => (
          <div className="alumni-box" key={index}>
            <div className="alumni-image" style={{ backgroundImage: `url(${alumnus.image})` }}></div>
            <div className="alumni-info">
              <h2>{alumnus.name}</h2>
              <h3>{alumnus.position} at {alumnus.company}</h3>
              <p>{alumnus.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniPage;


