import { motion } from 'framer-motion';
import { iconVariants, buttonVariants } from 'constant/framer_motion_confog';

import { FaAward } from 'react-icons/fa';
import { GoRocket } from 'react-icons/go';
import { VscFolderLibrary } from 'react-icons/vsc';

import './about.css';
import ME from '../../assets/me-about.jpg';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <motion.div
            className="about__me-image"
            animate={{ rotate: '10deg' }}
            whileHover={{ rotate: '0deg' }}
            transition={{ ease: 'easeOut', duration: 0.01, delay: 0.2 }}
          >
            <img src={ME} alt="About me_image" />
          </motion.div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <motion.div
                initial={'start'}
                animate={'end'}
                transition={{
                  ...iconVariants.transition_icons,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                variants={iconVariants}
              >
                <FaAward className="about__icon" />
              </motion.div>
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>

            <article className="about__card">
              <motion.div
                initial={'start'}
                animate={'end'}
                transition={{
                  ...iconVariants.transition_icons,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                variants={iconVariants}
              >
                <GoRocket className="about__icon" />
              </motion.div>
              <h5>Opportunity</h5>
              <small>Open for any suggestions</small>
            </article>

            <article className="about__card">
              <motion.div
                initial={'start'}
                animate={'end'}
                transition={{
                  ...iconVariants.transition_icons,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                variants={iconVariants}
              >
                <VscFolderLibrary className="about__icon" />
              </motion.div>

              <h5>Projects</h5>
              <small transition={{ delay: 0.5 }}>
                Many interesting projects
              </small>
            </article>
          </div>
          <p>
            Hello, I'm a Full-Stack Developer with experience in JS / React /
            GoogleExtension / NodeJS / Express / Firebase / MongoDB / OpenAI.
            I'm currently located in Kiev. I look forward to hearing from you
            with any job opportunities.
          </p>

          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={'hover'}
            variants={buttonVariants}
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
