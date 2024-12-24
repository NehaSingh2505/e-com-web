import React, { useEffect, useRef } from 'react';

const Courses = () => {
  const courseBoxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    courseBoxesRef.current.forEach((box) => {
      if (box) {
        observer.observe(box);
      }
    });

    return () => {
      courseBoxesRef.current.forEach((box) => {
        if (box) {
          observer.unobserve(box);
        }
      });
    };
  }, []);

  return (
    <div className="courses-container">
      {/* Video background */}
      <video className="video-background" autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="courses-grid">
        <div className="course-box" ref={(el) => (courseBoxesRef.current[0] = el)}>
          <h2>Data Science & AI</h2>
          <p>
            Learn the fundamentals and advanced concepts of Data Science, Artificial Intelligence, and Machine Learning.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[1] = el)}>
          <h2>Cloud Computing</h2>
          <p>
            Master cloud platforms like AWS, Azure, and Google Cloud for scalable application development.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[2] = el)}>
          <h2>Full Stack Development</h2>
          <p>
            Become a Full Stack Developer by learning front-end and back-end technologies such as React, Node.js, and more.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[3] = el)}>
          <h2>Cybersecurity</h2>
          <p>
            Dive into network security, ethical hacking, and risk management in the ever-evolving field of cybersecurity.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[4] = el)}>
          <h2>DevOps</h2>
          <p>
            Learn how to integrate development and IT operations, with hands-on experience in automation and continuous deployment.
          </p>
        </div>

        {/* Additional Courses for Technology and Marketing */}
        <div className="course-box" ref={(el) => (courseBoxesRef.current[5] = el)}>
          <h2>Blockchain</h2>
          <p>
            Understand the principles of Blockchain technology and its applications in secure, decentralized systems.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[6] = el)}>
          <h2>Digital Marketing</h2>
          <p>
            Learn to create and execute digital marketing strategies, including SEO, social media, and content marketing.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[7] = el)}>
          <h2>Product Management</h2>
          <p>
            Explore the lifecycle of product development, from ideation to launch, with a focus on strategy and market fit.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[8] = el)}>
          <h2>SEO & Content Marketing</h2>
          <p>
            Learn how to optimize websites for search engines and create valuable content that attracts and converts users.
          </p>
        </div>

        <div className="course-box" ref={(el) => (courseBoxesRef.current[9] = el)}>
          <h2>UI/UX Design</h2>
          <p>
            Design user-friendly interfaces and create seamless experiences by mastering UI/UX design principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
