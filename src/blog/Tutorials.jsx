import React from 'react';

const TutorialPage = () => {
  return (
    <div className="tutorial-container">
      <div className="tutorial-header">
        <h1>Tutorials</h1>
        <p>Explore our extensive range of tutorials to enhance your skills and knowledge in technology.</p>
      </div>
      <div className="tutorial-grid">
        {tutorials.map((tutorial, index) => (
          <div key={index} className="tutorial-card">
            <h2>{tutorial.title}</h2>
            <p>{tutorial.description}</p>
            <a href={tutorial.link} className="read-more-btn">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample tutorial data
const tutorials = [
  {
    title: 'Getting Started with React',
    description: 'A beginner-friendly guide to start building applications with React.',
    link: 'https://reactjs.org/docs/getting-started.html'
  },
  {
    title: 'Understanding JavaScript Promises',
    description: 'Learn how to work with promises in JavaScript for better asynchronous programming.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises'
  },
  {
    title: 'CSS Flexbox: A Guide',
    description: 'Master the Flexbox layout model to create responsive web designs.',
    link: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
  },
  {
    title: 'Introduction to Node.js',
    description: 'Explore the basics of Node.js and how to create server-side applications.',
    link: 'https://nodejs.org/en/docs/guides/getting-started-guide/'
  },
  {
    title: 'Understanding Git and GitHub',
    description: 'Learn how to use Git for version control and GitHub for collaboration.',
    link: 'https://guides.github.com/activities/hello-world/'
  },
];

export default TutorialPage;
