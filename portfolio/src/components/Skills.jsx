import React from 'react';
import './css/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        <SkillCard title="Programming Languages" skills={["C++", "Python"]} />
        <SkillCard title="Web Development" skills={["HTML","JavaScript", "CSS","ReactJS"]} />
        <SkillCard title="Databases" skills={["MySQL"]} />
        <SkillCard title="Backend" skills={["FastAPI"]} />
        <SkillCard title="Data Analysis & Visualization" skills={["NumPy", "Pandas", "Scikit-learn", "Matplotlib"]} />
        <SkillCard title="Machine Learning" skills={["Linear Regression", "Logistic Regression", "SVM", "Naive Bayes", "KNN", "Decision Tree", "Random Forest"]} />
        <SkillCard title="Data Preprocessing" skills={["Data Cleaning"]} />
        <SkillCard title="Clustering" skills={["K-means Clustering"]} />
      </div>
    </div>
  );
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
