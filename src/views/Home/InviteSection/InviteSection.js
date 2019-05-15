import React from 'react';
import { withTranslation } from 'react-i18next';

import './InviteSection.scss';

class InviteSection extends React.Component {
  render() {
    const { t } = this.props;
    return(
      <section className="containter-fluid invite-section">
        <div className="container main-part">
          <h1 className="invite-slogan">
            {t('home:Invita a tus amigos ahora!')}
          </h1>
          <button className="invite-button" type="button">
            {t('home:COMMENZAR')}
          </button>
        </div>
      </section>
    )
  }
}

export default withTranslation()(InviteSection);