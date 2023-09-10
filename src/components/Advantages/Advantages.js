import './services.css';

import { MdOutlineLanguage } from 'react-icons/md';
import { motion } from 'framer-motion';
import { pVariants } from 'constant/framer_motion_confog';

import {
  SiPostman,
  SiWebpack,
  SiAdobe,
  SiGithub,
  SiAndroid,
  SiGooglescholar,
} from 'react-icons/si';

const Advantages = () => {
  return (
    <section id="advantages">
      <motion.h5
        initial={'hidden_left'}
        whileInView={'visible'}
        transition={'transition_horizontal'}
        variants={pVariants}
      >
        What Skills do I Have
      </motion.h5>
      <motion.h2
        initial={'hidden_left'}
        whileInView={'visible'}
        transition={'transition_horizontal'}
        variants={pVariants}
      >
        Advantages
      </motion.h2>

      <div className="container services__container">
        <article className="service">
          <div className="services__head">
            <motion.h3
              initial={'hidden_left'}
              whileInView={'visible'}
              transition={'transition_horizontal'}
              variants={pVariants}
            >
              Education
            </motion.h3>
          </div>

          <motion.ul
            className="services__list"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            <li>
              <SiGooglescholar className="service__list-icon" />
              <p>IT School GoIT, Full Stack Developer.</p>
            </li>
            <li>
              <SiGooglescholar className="service__list-icon" />
              <p>IT School ITEA, FrontEnd Pro.</p>
            </li>
            <li>
              <SiGooglescholar className="service__list-icon" />
              <p>IT School ITEA, FrontEnd Advanced.</p>
            </li>
            <li>
              <SiGooglescholar className="service__list-icon" />
              <p>NPU Dragomanov, Foreign Philology.</p>
            </li>
          </motion.ul>
        </article>

        <article className="service">
          <div className="services__head">
            <motion.h3
              initial={'hidden_left'}
              whileInView={'visible'}
              transition={'transition_horizontal'}
              variants={pVariants}
            >
              Working Tools
            </motion.h3>
          </div>

          <motion.ul
            className="services__list"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            <li>
              <SiGithub className="service__list-icon" />
              <p>GitHub.</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>VS Code.</p>
            </li> */}
            <li>
              <SiAndroid className="service__list-icon" />
              <p>Android Studio.</p>
            </li>
            <li>
              <SiPostman className="service__list-icon" />
              <p>PostMan / Insomnia.</p>
            </li>
            <li>
              <SiWebpack className="service__list-icon" />
              <p>React Create App / Webpack / Parcel.</p>
            </li>
            <li>
              <SiAdobe className="service__list-icon" />
              <p>Figma / LightRoom / Photoshop.</p>
            </li>
          </motion.ul>
        </article>

        <article className="service">
          <div className="services__head">
            <motion.h3
              initial={'hidden_left'}
              whileInView={'visible'}
              transition={'transition_horizontal'}
              variants={pVariants}
            >
              Languages
            </motion.h3>
          </div>

          <motion.ul
            className="services__list"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            <li>
              <MdOutlineLanguage className="service__list-icon" />
              <p>English - Intermediate.</p>
            </li>
            <li>
              <MdOutlineLanguage className="service__list-icon" />
              <p>Ukrainian – Native.</p>
            </li>
            <li>
              <MdOutlineLanguage className="service__list-icon" />
              <p>Russian - Native.</p>
            </li>
          </motion.ul>
        </article>
      </div>
    </section>
  );
};

export default Advantages;
