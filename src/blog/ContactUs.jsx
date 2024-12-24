import React, { useEffect, useRef } from 'react';

const ContactUs = () => {
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
    <div className="contact-container">
      <section ref={(el) => sections.current.push(el)} className="contact-section">
        <div className="text-box">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you! Please fill out the form below or reach out to us directly.</p>
        </div>
      </section>

      <section ref={(el) => sections.current.push(el)} className="contact-section">
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
