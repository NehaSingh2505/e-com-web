import React from 'react';

const BlogPage = () => {
  const blogs = [ 
    {
      title: 'The Future of Artificial Intelligence',
      description: 'Discover the latest trends and innovations in the world of AI and how it’s shaping the future of technology.',
      image: '/AI.jpg',
      link: 'https://www.ducatindia.com/blog/the-future-of-creativity-ai-generated-art-and-design',
    },
    {
      title: 'Cloud Computing: What You Need to Know',
      description: 'Learn about cloud computing, its benefits, and why businesses are moving to the cloud for scalability and efficiency.',
      image: '/cc.jpg',
      link: 'https://www.ducatindia.com/blog/benefits-of-microsoft-azure-cloud-services',
    },
    {
      title: 'Cybersecurity Essentials in 2024',
      description: 'Stay informed about the top cybersecurity practices and how you can protect your business from cyber threats.',
      image: '/cs.jpg',
      link: 'https://www.ducatindia.com/blog/benefits-of-learning-cyber-security',
    },
    {
      title: 'The Rise of Full Stack Development',
      description: 'Explore why full stack development is in high demand and how developers can upskill for modern tech roles.',
      image: '/jfs.jpg',
      link: 'https://www.ducatindia.com/blog/java-full-stack-course-roadmap-for-beginners',
    },
  ];

  return (
    <div className="blog-page-container">
      <div className="background-image"></div>
      <h1 className="page-title" style={{color:"black"}}>Our Latest Blogs</h1>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-box" key={index}>
            <div className="blog-image" style={{ backgroundImage: `url(${blog.image})` }}></div>
            <div className="blog-info">
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <a href={blog.link} className="read-more-btn">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
