import React from 'react';
import './header.css';
import CTA from './CTA';
// import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import TypedText from 'components/TypedText/TypedText';

const Header = () => {
  return (
    <header id="header" className="header-class">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Solod Serhii</h1>
        <h5 className="text-light">JS Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
        <TypedText />
      </div>
    </header>
  );
};

export default Header;
