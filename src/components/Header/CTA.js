import { motion } from 'framer-motion';
import { buttonVariants } from 'constant/framer_motion_confog';

import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href={CV}
        download="Frontend Solod Sergey [JS, React, ReactNative, NodeJs].pdf"
        className="btn"
      >
        Download CV
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#contact"
        className="btn btn-primary"
      >
        Let's Talk
      </motion.a>
    </div>
  );
};

export default CTA;
