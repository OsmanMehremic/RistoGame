import React from 'react';

import './Button3.scss';

class Button3 extends React.Component {
  render() {
    return(
      <button className="button3" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}

export default Button3;