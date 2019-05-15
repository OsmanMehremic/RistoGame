import React from 'react';
import { withTranslation } from 'react-i18next';

import './AnalyzeSection.scss';

class AnalyzeSection extends React.Component {
  render() {
    const { t } = this.props;
    return(
      <section className="container-fluid analyze-section-wrapper">
        <div className="container analyze-section">
          <div className="row main-row">
            <div className="col-7 img-div">
              <img src="/assets/images/league_of_legends.png" alt="hero-img" />
            </div>
            <div className="col-5 analyze-data">
              <div className="data-heading">
                <img className="logo" src="/assets/images/logo-black.png" alt="logo-img" />
                <div className="title">
                  {t('home:NUMBERS DE ELO BOOSTER')}
                </div>
              </div>
              <div className="data-numbers row">
                <div className="col-6 data-item">
                  <div className="number">
                    400
                  </div>
                  <div className="description">
                    {t('home:BOOSTERS AVAILABLE')}
                  </div>
                </div>
                <div className="col-6 data-item">
                  <div className="number">
                    13273
                  </div>
                  <div className="description">
                    {t('home:ACCOUNTS CREATED')}
                  </div>
                </div>
                <div className="col-6 data-item">
                  <div className="number">
                    26633
                  </div>
                  <div className="description">
                    {t('home:ORDERS COMPLETED')}
                  </div>
                </div>
                <div className="col-6 data-item">
                  <div className="number">
                    6982
                  </div>
                  <div className="description">
                    {t('home:POSITIVE REVIEWS')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(AnalyzeSection);