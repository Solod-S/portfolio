import React from 'react';
import './footer.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className="footer__logo">
        Solod Serhii
      </a>

      <ul className="permalinks">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/serhii-solod-557991256/">
          <FaLinkedinIn />
        </a>
        <a href="https::/instagram.com">
          <FaFacebookF />
        </a>
        <a href="https://github.com/Solod-S">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
