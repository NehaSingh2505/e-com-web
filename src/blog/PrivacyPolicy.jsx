import React, { useEffect, useRef } from 'react';

const PrivacyPolicy = () => {
  const contentRef = useRef(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="privacy-container">
      <div className="policy-box" ref={contentRef}>
        <h1>Privacy Policy</h1>

        <h2>Introduction</h2>
        <p>
          At Ducat Institution, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your personal information to safeguard your privacy.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect information that you provide to us directly when you register for a course, subscribe to our newsletters, or interact with our platform. This may include your name, email address, phone number, and other personal details.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use your personal information to provide and improve our services, communicate with you, process payments, and ensure the security of our platform. We may also use your information to send you promotional materials or updates about our courses and services.
        </p>

        <h2>Data Protection</h2>
        <p>
          We take your privacy seriously and implement security measures to protect your personal data from unauthorized access, alteration, or disclosure.
        </p>

        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties unless it is necessary for providing our services or if required by law.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have the right to access, modify, or delete your personal information at any time. If you wish to exercise your rights or have any concerns, please contact us at privacy@ducat.com.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
