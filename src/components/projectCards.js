import React from 'react';
import './css/main.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'J.A.T.E',
      image: 'https://via.placeholder.com/400x250',
      description: 'Just Another Text Editor',
      tags: ['React', 'Javascript', 'PWA'],
      url: 'https://infinite-escarpment-70643.herokuapp.com',
    },
    {
      id: 2,
      title: 'Note Taker',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Express', 'API'],
      url: 'https://vast-shelf-36759.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Techblog',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['MySQL', 'Node', 'Express'],
      url: 'https://aqueous-reaches-57069.herokuapp.com/',
    },
    {
      id: 4,
      title: 'Project 4',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Material UI', 'HTML'],
      url: '#',
    },
    {
      id: 5,
      title: 'Project 5',
      image: 'https://via.placeholder.com/400x250',
      description: '',
      tags: ['React', 'Material UI', 'HTML'],
      url: '#',
    },
    {
      id: 6,
      title: 'Project 6',
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