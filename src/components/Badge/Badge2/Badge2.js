import React from 'react';

import './Badge2.scss';

class Badge2 extends React.Component {
  render() {
    return(
      <span className="badge2">
        {this.props.children}
      </span>
    )
  }
}

export default Badge2;