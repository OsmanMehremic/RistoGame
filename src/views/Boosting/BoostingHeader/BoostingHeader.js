import React from 'react';
import { withTranslation } from 'react-i18next';
import './BoostingHeader.scss';

class BoostingHeader extends React.Component {

  render() {

    const { match, t } = this.props;
    console.log(match);
    return(
      <section className="container boosting-header">
        <div className="banner">
          <h1 className="title">
            { t('boosting:header:title')}
          </h1>
          <p className="desc">
            { t('boosting:header:desc')}
          </p>
        </div>
      </section>
    )
  }
}

export default withTranslation()(BoostingHeader);