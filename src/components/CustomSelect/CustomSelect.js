import React from 'react';

import './CustomSelect.scss';

class CustomSelect extends React.Component {
  render() {
    return(
      <label className="select-label">
        <select className="form-control custom-item-select">
          {this.props.children}
        </select>
      </label>
    )
  }
}

export default CustomSelect;
