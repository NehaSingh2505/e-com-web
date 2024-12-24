
import React, { useEffect, useRef } from 'react';

const AboutPage = () => {
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
    <div className="about-container">
      <section ref={(el) => sections.current.push(el)} className="about-section">
        <div className="text-box">
          <h2>Who We Are</h2>
          <p>
            {/* At Ducat Institution, we are pioneers in delivering world-class education and training in the technology sector.  */}
            For over two decades, we have been equipping students with the skills they need to excel in the ever-evolving IT industry.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="about-section">
        <div className="text-box">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap between academic knowledge and industry requirements by offering courses that align 
            with the latest technological advancements. We aim to empower students to pursue successful careers in technology.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="about-section">
        <div className="text-box">
          <h2>Why Choose Us?</h2>
          <p>
            Industry-Relevant Curriculum, Expert Faculty, Placement Assistance, and State-of-the-Art Infrastructure make us the 
            top choice for aspiring tech professionals.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="about-section">
        <div className="text-box">
          <h2>Our Journey</h2>
          <p>
            {/* Since our inception in 1999, Ducat Institution has grown into one of the leading tech training institutes, helping  */}
            over 50,000 students secure careers in top IT companies worldwide.
          </p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="about-section">
        <div className="text-box">
          <h2>Our Values</h2>
          <p>
            Excellence, Integrity, and Innovation are the core values that guide our institution as we constantly evolve to meet 
            the needs of the tech industry.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
