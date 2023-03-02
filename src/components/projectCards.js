import React from 'react';
import './css/main.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'J.A.T.E',
      image: 'https://infinite-escarpment-70643.herokuapp.com/assets/icons/icon_96x96.png',
      description: 'Just Another Text Editor',
      tags: ['React', 'Javascript', ''],
      url: 'https://infinite-escarpment-70643.herokuapp.com',
    },
    {
      id: 2,
      title: 'Project 2',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Material UI', 'HTML'],
      url: '#',
    },
  ];

  return (
    <main className="container">
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </main>
  );
};

export default Portfolio;