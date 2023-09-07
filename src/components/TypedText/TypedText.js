import React from 'react';
import Typed from 'react-typed';
import './TypedText.css';

function TypedText() {
  return (
    <div className="typed-wrapper">
      <div className="animated-typing">
        <Typed
          strings={[
            'Wellcome To My Web Site',
            "I'm a Front End Developer",
            'I Love Web Development',
            'Currently Learning Node.js and React Native',
            'Planning to Explore Next.js and Vue in the future',
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
    </div>
  );
}
export default TypedText;
