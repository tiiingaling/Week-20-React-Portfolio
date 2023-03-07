import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const GithubIcon = () => <FaGithub style={{ backgroundColor: "var(--dark)" }} size={30}/>;
const LinkedInIcon = () => <FaLinkedin style={{ backgroundColor: "var(--dark)" }} size={30}/>;
const TwitterIcon = () => <FaTwitter style={{ backgroundColor: "var(--dark)" }} size={30}/>;



const Footer = () => {
  return (
    <footer className="footer " >
      <div className="footer-icons">
        <a href="https://github.com/tiiingaling" className='icon'>
          <GithubIcon/>
          </a>
        <a href='https://www.linkedin.com/in/ting-wong-605a77136/'className='icon'>
          <LinkedInIcon/>
        </a>
        <a href='https://twitter.com/tiiingaling'className='icon'>
          <TwitterIcon/>
        </a>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;