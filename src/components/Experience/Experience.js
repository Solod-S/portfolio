import { motion } from 'framer-motion';
import { pVariants } from 'constant/framer_motion_confog';

import { BsPatchCheckFill } from 'react-icons/bs';

import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <motion.h5
        initial={'hidden_left'}
        whileInView={'visible'}
        transition={'transition_horizontal'}
        variants={pVariants}
      >
        My Experience
      </motion.h5>
      <motion.h2
        initial={'hidden_left'}
        whileInView={'visible'}
        transition={'transition_horizontal'}
        variants={pVariants}
      >
        Technology Stack
      </motion.h2>

      <div className="container experience__container">
        <div>
          <motion.h3
            className="experience__frontend"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            Frontend Development
          </motion.h3>

          <motion.div
            className="experience__content"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Redux Toolkit</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Chrome Scripting API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Jest + React Testing Library</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>React Native</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Expo CLI</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Ant Design</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>SASS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>BEM</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>OpenAI API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>WordPress Rest API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Twitter API V2</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Facebook Graph API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Google Search API</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Google Scripting API/Google Extansions</h4>
              </div>
            </article>
          </motion.div>
        </div>

        <div className="experience__backend">
          <motion.h3
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            Backend Development
          </motion.h3>
          <motion.div
            className="experience__content"
            initial={'hidden_left'}
            whileInView={'visible'}
            transition={'transition_horizontal'}
            variants={pVariants}
          >
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>NodeJS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>NestJS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>MongoDb</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Firebase</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Mongoose</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Swagger</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Jest + Supertest</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Nginx</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Puppeteer</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>PassportJS</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>Telegram Bot API</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
