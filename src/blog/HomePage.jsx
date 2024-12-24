


import React, { useEffect, useRef } from 'react';

const HomePage = () => {
  const sections = useRef([]);

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

    sections.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="home-container">
      <section ref={(el) => sections.current.push(el)} className="home-section">
        <div className="text-box">
          <h1>Welcome to Ducat Institution</h1>
          <p>
            Your pathway to a successful tech career starts here. At Ducat, we offer world-class training to help you excel in the ever-evolving IT industry.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="home-section">
        <div className="text-box">
          <h2>Explore Our Courses</h2>
          <p>
            We provide a wide range of industry-relevant courses designed to meet the latest trends and technologies. Whether you are a beginner or a professional, we have something for you.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="home-section">
        <div className="text-box">
          <h2>Job-Oriented Programs</h2>
          <p>
            With a strong focus on placements, our training programs are designed to ensure our students get the hands-on experience they need to succeed in today’s job market.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="home-section">
        <div className="text-box">
          <h2>Expert Faculty</h2>
          <p>
            Learn from industry experts with years of experience in their respective fields. Our faculty members are dedicated to providing the best learning experience for our students.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="home-section">
        <div className="text-box">
          <h2>Join Us Today</h2>
          <p>
            Take the first step toward a successful career in technology. Explore our courses and become part of Ducat’s growing community of tech professionals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
