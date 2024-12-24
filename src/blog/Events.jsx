import React, { useEffect } from 'react';

const EventsPage = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.event-box');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    });

    boxes.forEach((box) => observer.observe(box));
  }, []);

  return (
    <div className="events-container">
      {/* Background Image */}
      <div className="background-image1"></div>

      {/* Content Section */}
      <div className="events-content">
        <div className="event-box">
          <h1>Upcoming Tech Events at Ducat Institution</h1>
          <p>
            Explore a series of exciting tech events, seminars, and hackathons that are designed to help you stay ahead in the fast-paced world of technology. Gain hands-on experience, network with industry experts, and enhance your knowledge.
          </p>
        </div>

        <div className="event-box">
          <h2>Web Development Bootcamp</h2>
          <p>
            Join our intensive Web Development Bootcamp and learn full-stack development. This event will take you from zero to a full-fledged web developer, equipped with the skills to build and deploy modern web applications.
          </p>
        </div>

        <div className="event-box">
          <h2>AI and Machine Learning Workshop</h2>
          <p>
            Get introduced to the world of Artificial Intelligence and Machine Learning through this workshop. Understand the basics and learn how to apply machine learning algorithms in real-world scenarios.
          </p>
        </div>

        <div className="event-box">
          <h2>Cloud Computing Seminar</h2>
          <p>
            This seminar will cover the fundamentals of cloud computing, including services like AWS and Microsoft Azure. Gain insights into the advantages of cloud platforms and their impact on business operations.
          </p>
        </div>

        <div className="event-box">
          <h2>Cybersecurity Conference</h2>
          <p>
            Learn from the top experts in the cybersecurity field at our annual conference. Stay up-to-date with the latest trends and best practices to secure your applications and systems against modern threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
