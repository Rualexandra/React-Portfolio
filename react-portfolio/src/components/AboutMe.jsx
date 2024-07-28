// src/components/AboutMe.jsx

import './AboutMe.css';  // Ensure this path is correct

function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <img src="/images/IMG_7627 1.png" alt="Developer" className="about-me__photo" />
      <p>
        Hi, I am Alexandra Ruiz, a passionate web developer with a knack for
        creating dynamic and responsive web applications. With a strong
        foundation in JavaScript and a deep love for React, I enjoy building
        intuitive user interfaces and tackling challenging problems.
      </p>
      <p>
        I started my journey in web development through the UT Coding bootcamp
        and have since honed my skills in various technologies including HTML,
        CSS, and modern JavaScript frameworks. I am always eager to learn and
        stay updated with the latest industry trends and best practices.
      </p>
      <p>
        When I am not coding, you can find me exploring new tech gadgets,
        contributing to open-source projects, or enjoying outdoor activities
        like hiking and traveling. I believe in the power of community and
        collaboration, and I am always excited to work with like-minded
        individuals on innovative projects.
      </p>
    </section>
  );
}

export default AboutMe;
