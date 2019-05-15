import React from 'react';

import './SocialAuthButton.scss';

const ICON_NAME = {
  google: 'Google',
  twitch: 'Twitch',
  discord: 'Discord'
};

class SocialAuthButton extends React.Component {
  render() {
    return (
      <button type="button" className="social-auth-button">
        <div className={`social-icon ${this.props.social_type}`}></div>
        {ICON_NAME[this.props.social_type]}
      </button>
    )
  }
}

export default SocialAuthButton;