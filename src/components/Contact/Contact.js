import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer, Flip } from 'react-toastify';

import { motion } from 'framer-motion';
import { buttonVariants } from 'constant/framer_motion_confog';

import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

import 'react-toastify/dist/ReactToastify.css';
import './contact.css';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } =
  process.env;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = async e => {
    setLoading(true);
    e.preventDefault();

    try {
      await emailjs.sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        form.current,
        REACT_APP_PUBLIC_KEY
      );
      console.log('Email sent successfully');

      toast.success('Email sent successfully', {
        position: 'top-right',
        icon: <MdOutlineEmail />,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Error sending email', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      });
      setLoading(false);
    }

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>solodsn098@gmail.com</h5>
            <a
              href="mailto:solodsn098@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Telegram</h5>
            <a
              href="https://t.me/sergey_nicol"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Viber</h4>
            <h5>+38037717070</h5>
            <a
              href="viber://chat?number=+38037717070"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <motion.button
            whileHover={'hover'}
            variants={buttonVariants}
            type="submit"
            className={`btn btn-primary ${loading ? 'disabled' : ''}`}
            disabled={loading}
          >
            Send Message
          </motion.button>
        </form>
      </div>
      <ToastContainer
        transition={Flip}
        theme="dark"
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-toast-progress"
      />
    </section>
  );
};

export default Contact;
