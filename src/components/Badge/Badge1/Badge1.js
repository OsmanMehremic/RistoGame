import React from 'react';

import './Badge1.scss';

class Badge1 extends React.Component {
  render() {
    return(
      <span className="badge1">
        {this.props.children}
      </span>
    )
  }
}

export default Badge1;