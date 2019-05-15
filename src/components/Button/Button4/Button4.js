import React from 'react';

import './Button4.scss';

class Button4 extends React.Component {
  render() {
    return (
      <div className="button4">
        {this.props.children}
      </div>
    )
  }
}

export default Button4;