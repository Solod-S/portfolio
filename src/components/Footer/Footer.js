import { motion } from 'framer-motion';
import { buttonVariants } from 'constant/framer_motion_confog';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';
import { TbBrandReact } from 'react-icons/tb';

import './footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-class">
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
          <a href="#advantages">Advantages</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <motion.a
          whileHover={'hover'}
          variants={buttonVariants}
          href="https://www.linkedin.com/in/serhii-solod-557991256/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </motion.a>
        <motion.a
          whileHover={'hover'}
          variants={buttonVariants}
          href="https://t.me/sergey_nicol"
          target="_blank"
          rel="noreferrer"
        >
          <BsTelegram />
        </motion.a>
        <motion.a
          whileHover={'hover'}
          variants={buttonVariants}
          href="https://www.codewars.com/users/Solod-S"
          target="_blank"
          rel="noreferrer"
        >
          <TbBrandReact />
        </motion.a>
        <motion.a
          whileHover={'hover'}
          variants={buttonVariants}
          href="https://github.com/Solod-S"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </motion.a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
