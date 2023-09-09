import './about.css';
import ME from '../../assets/me-about.jpg';

import { FaAward } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me_image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>

            <article className="about__card">
              <GoRocket className="about__icon" />
              <h5>Opportunity</h5>
              <small>Open for any suggestions</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Many interesting projects</small>
            </article>
          </div>
          <p>
            Hello, I'm a JavaScript developer with experience in
            JS/React/NodeJS/React-Native. I'm currently located in Kiev. I look
            forward to hearing from you with any job opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
