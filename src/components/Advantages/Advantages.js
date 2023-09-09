import './services.css';

import { MdOutlineLanguage } from 'react-icons/md';

import {
  SiPostman,
  SiWebpack,
  SiAdobe,
  SiGithub,
  SiPowershell,
  SiAndroid,
  SiGooglescholar,
} from 'react-icons/si';

const Advantages = () => {
  return (
    <section id="advantages">
      <h5>What Skills do I Have</h5>
      <h2>Advantages</h2>

      <div className="container services__container">
        {/*  UI/UX */}
        <article className="service">
          <div className="services__head">
            <h3>Education</h3>
          </div>

          <ul className="services__list">
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
          </ul>
        </article>

        {/* Content Creation*/}
        <article className="service">
          <div className="services__head">
            <h3>Working Tools</h3>
          </div>

          <ul className="services__list">
            <li>
              <SiGithub className="service__list-icon" />
              <p>GitHub.</p>
            </li>
            <li>
              <SiPowershell className="service__list-icon" />
              <p>Git Bash/PowerShell.</p>
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
              <p>PostMan/Insomnia.</p>
            </li>
            <li>
              <SiWebpack className="service__list-icon" />
              <p>React Create App/Webpack/Parcel.</p>
            </li>
            <li>
              <SiAdobe className="service__list-icon" />
              <p>Figma/LightRoom/Photoshop.</p>
            </li>
          </ul>
        </article>

        {/* Web Development*/}
        <article className="service">
          <div className="services__head">
            <h3>Languages</h3>
          </div>

          <ul className="services__list">
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
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Advantages;
