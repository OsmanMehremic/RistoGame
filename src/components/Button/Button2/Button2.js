import React from 'react';

import './Button2.scss';

class Button2 extends React.Component {
  render() {
    return(
      <button className="button2">
        <img className="button2-img" src="/assets/svg/arrow_right_white.svg" alt="arrow-right-back" />
      </button>
    )
  }
}

export default Button2;