import React from 'react';
import './css/main.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'J.A.T.E',
      image: '/assets/jate.png',
      description: 'Just Another Text Editor',
      tags: ['React', 'Javascript', 'PWA'],
      url: 'https://infinite-escarpment-70643.herokuapp.com',
    },
    {
      id: 2,
      title: 'Note Taker',
      image: '/assets/note-taker.png',
      description: 'A note taking React app with save and delete functions',
      tags: ['React', 'Express', 'API'],
      url: 'https://vast-shelf-36759.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Techblog',
      image: '/assets/techblog.png',
      description: 'A CVS style blog about tech!',
      tags: ['MySQL', 'Node', 'Express'],
      url: 'https://aqueous-reaches-57069.herokuapp.com/',
    },
    {
      id: 4,
      title: 'Rock Paper Scissors',
      image: '/assets/rps.png',
      description: 'Simple Rock Paper Scissors game',
      tags: ['React', 'Material UI', 'HTML'],
      url: '',
    },
    {
      id: 5,
      title: 'Discord Bot',
      image: '/assets/discord2.png',
      description: 'Bot for discord to play music via Spotify',
      tags: ['React', 'Javascript', 'Java'],
      url: 'https://discord.com/',
    },
    {
      id: 6,
      title: 'IFTT',
      image: '/assets/iftt.png',
      description: 'IFTT script to automate Spotify playlist',
      tags: ['React', 'Material UI', 'HTML'],
      url: 'https://ifttt.com/',
    },
  ];

  return (
    <main className="container">
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <img src={project.image} alt={project.title} width="400" height="250"/>
          <h2>{project.title}</h2>
          <p className="card-desc">{project.description}</p>
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