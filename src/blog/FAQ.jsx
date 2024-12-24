import React, { useState } from 'react';

const FAQPage = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null); // Close the question if it's already open
    }
    setSelected(i); // Open the selected question
  };

  const faqs = [
    {
      question: 'What courses does Ducat Institution offer?',
      answer: 'Ducat offers a wide range of courses, including Data Science, AI, Full Stack Development, Cybersecurity, Cloud Computing, DevOps, and more.',
    },
    {
      question: 'What are the job placement opportunities at Ducat?',
      answer: 'We offer 100% placement assistance for students through our partnerships with top companies and a dedicated placement team.',
    },
    {
      question: 'How can I register for a course?',
      answer: 'You can register through our online portal or visit one of our campus locations for in-person registration.',
    },
    {
      question: 'Does Ducat provide any certification?',
      answer: 'Yes, we provide industry-recognized certificates upon course completion.',
    },
    {
      question: 'Are there any prerequisites for enrolling in a course?',
      answer: 'No specific prerequisites are required. We offer beginner, intermediate, and advanced courses suitable for all levels of learners.',
    },
  ];

  return (
    <div className="faq-page-container">
      <div className="background-image"></div>
      <h1 className="page-title">Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-question" onClick={() => toggle(i)}>
              <h2>{faq.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${selected === i ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
