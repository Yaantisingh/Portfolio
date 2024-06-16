import React from 'react';
import './css/Projects.css';

const projects = [
  {
    title: "TrainHub",
    description: "A frontend website on a railway management system using HTML, CSS, JavaScript. This website contains basic functionalities like: login user, sign user, user can book their tickets, user can order food, user can search trains between stations this is implemented using real time railway API, etc.",
    link:"https://github.com/Yaantisingh/TrainHub"
  },
  {
    title: "FastDataHub",
    description: "A simple website using basic React.js as frontend and FastAPI as backend to create API endpoints and MySQL as database to perform functionalities like search records from database, insert records, delete records, update records and display all the records present into the database.",
  },
  {
    title: "BookBliss",
    description: "A fullstack project for a Book Selling Website developed in React.js and CSS for the frontend, and FastAPI (Python framework) to create API, with MySQL database. The website features functionalities such as search books by title, author and category. An admin page to manage book inventories and categories. Users can create account, add books to their cart, make payments for their selected books, with Stripe payment gateway. The website will also have a recommendation system.",
    link: "https://github.com/Yaantisingh/BookBliss"
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
