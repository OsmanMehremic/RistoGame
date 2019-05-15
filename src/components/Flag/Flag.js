import React from 'react';

import './Flag.scss';

class Flag extends React.Component {
  render() {
    return(
      <div className="flag">
        {this.props.children}
      </div>
    )
  }
}

export default Flag;