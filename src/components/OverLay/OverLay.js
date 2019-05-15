import React from 'react';

import './OverLay.scss';

class OverLay extends React.Component {

  render() {
    // Display Class Define from show modal props
    const display_class = this.props.display ? "show" : "hide";
    return(
      <div className={`overlay ${display_class}`}>
      </div>
    )
  }
}

export default OverLay;