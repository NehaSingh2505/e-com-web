import React, { useEffect, useRef } from 'react';

const Placement = () => {
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
    <div className="placement-container">
      <section ref={(el) => sections.current.push(el)} className="placement-section">
        <div className="text-box">
          <h1>Our Placement Success</h1>
          <p>
            At Ducat Institution, we prioritize your career aspirations. Our dedicated placement cell works tirelessly to ensure our students find the best job opportunities in the tech industry.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="placement-section">
        <div className="text-box">
          <h2>Why Choose Us for Your Placement?</h2>
          <p>
            We provide comprehensive placement support, including:
            <ul>
              <li>Resume building workshops</li>
              <li>Interview preparation sessions</li>
              <li>Networking opportunities with industry leaders</li>
              <li>Access to exclusive job openings</li>
            </ul>
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="placement-section">
        <div className="text-box">
          <h2>Success Stories</h2>
          <p>
            Our alumni have successfully secured positions in top companies, showcasing their skills and knowledge gained through our programs. Here are some of our top placement partners:
            <ul>
              <li>Google</li>
              <li>Amazon</li>
              <li>Microsoft</li>
              <li>IBM</li>
              <li>Accenture</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Placement;
