import React, { Component } from 'react';
import './SolidButton.scss';

class SolidButton extends Component {
  render() {
    return(
      <button className="solid-button">
        {this.props.children}
      </button>
    )
  }
}

export default SolidButton;
