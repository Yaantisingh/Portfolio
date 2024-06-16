import React from 'react';
import './css/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Yaanti Singh</h1>
        <section className="bio-section">
          <p>
            My name is Yaanti Singh and i am a dedicated and accomplished computer science student at Banasthali Vidyapith, currently pursuing a Bachelor of Technology degree. With a CGPA of 9.36 up to the 5th semester, I have consistently demonstrated a strong academic performance and also very passionate about technology and software development, I have acquired proficiency in various programming languages and frameworks, enabling the development of sophisticated applications and systems. Alongside technical expertise, I possess a keen interest in machine learning algorithms and data preprocessing.
          </p>
          <p>
            Apart from this, I have undertaken several significant projects, applying theoretical knowledge to practical scenarios and contributing to meaningful software solutions. This combination of academic excellence, practical experience, and a continuous drive for learning positions I am a promising professional in the field of computer science. I am very dedicated and sincere towards my work and always complete it in the provided timeline.
          </p>
        </section>
        <section className="education-section">
          <h2>Education</h2>
          <p>Graduation: Banasthali Vidyapith</p>
          <p>Bachelors of Technology in Computer Science (2021-2025)</p>
          <p>CGPA: 9.36 (Till 5th semester)</p>
        </section>
      </div>
    </div>
  );
}

export default About;
