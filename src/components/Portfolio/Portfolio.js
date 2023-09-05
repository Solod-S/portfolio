import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio/instagram_clone.jpg';
import IMG2 from '../../assets/portfolio/linked_in_clone.jpg';
import IMG3 from '../../assets/portfolio/telegram_megabite_bot.jpg';
import IMG4 from '../../assets/portfolio/linked_in_clone_front.jpg';
import IMG5 from '../../assets/portfolio/contact_book.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Instagram-clone</h3>
          <h5>[React-Native, Expo, Redux, Firebase]</h5>
          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Solod-S/instagram_clone_reactNative"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://expo.dev/@solik/insta-clone"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=lBQYrptkMfI&feature=youtu.be"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Social-media backend</h3>
          <h5>
            [NodeJs, Express, MongoDB, Mongoose, Swagger, Jest, Supertest,
            JSONWebtoken, Bcrypt, PassportJs, Sendgrid]
          </h5>
          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Solod-S/LinkedInClone-backend"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://linkedinclone-backend.onrender.com/api-docs/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            {/* <div>
              <a
                href="https://www.youtube.com/watch?v=lBQYrptkMfI&feature=youtu.be"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            </div> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Telegram bot</h3>
          <h5>
            [NodeJs, Node-Telegram-Bot-Api, Google-Spreadsheet, Date-fns, PM2]
          </h5>
          <h5>
            [React, Redux, React Router Dom, Axios, Styled-Components,
            Styled-System, Cloudinary, Papaparse]
          </h5>
          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Solod-S/LinkedInClone-backend"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github backend
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Solod-S/tg-web-app-react-megabite-front"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github App
              </a>
            </div>
            {/* <div>
              <a
                href="https://linkedinclone-backend.onrender.com/api-docs/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
            {/* <div>
              <a
                href="https://www.youtube.com/watch?v=lBQYrptkMfI&feature=youtu.be"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            </div> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>LinkedInClone</h3>
          <h5>
            [React, Redux, React Router Dom, Axios, Styled-Components, Firebase]
          </h5>
          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Solod-S/LinkedInClone"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://solod-s.github.io/LinkedInClone/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            {/* <div>
              <a
                href="https://linkedinclone-backend.onrender.com/api-docs/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
            {/* <div>
              <a
                href="https://www.youtube.com/watch?v=lBQYrptkMfI&feature=youtu.be"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            </div> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>PhoneBook</h3>
          <h5>
            [React, Redux, React Router Dom, Styled Components, Rest Api, AJAX]
          </h5>
          <div className="portfolio__item-cta">
            <div>
              <a
                href="https://github.com/Solod-S/goit-react-hw-08-phonebook-"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
            <div>
              <a
                href="https://solod-s.github.io/goit-react-hw-08-phonebook-/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
            {/* <div>
              <a
                href="https://linkedinclone-backend.onrender.com/api-docs/"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div> */}
            {/* <div>
              <a
                href="https://www.youtube.com/watch?v=lBQYrptkMfI&feature=youtu.be"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Video
              </a>
            </div> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
