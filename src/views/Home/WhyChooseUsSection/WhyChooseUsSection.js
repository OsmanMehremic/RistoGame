import React from 'react';
import { withTranslation } from 'react-i18next';

import './WhyChooseUsSection.scss';

class WhyChooseUsSection extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <section className="container why-choose-us">
        <div className="heading">
          <div className="title">WHY CHOOSE US</div>
          <div className="title-description">
            {t('home:Operation for professional to boost Leagues of Legends')}
          </div>
        </div>
        <div className="cards row">
          <div className="statistic-card">
            <div className="card-banner">
              <img src="/assets/svg/mercado.svg" alt="mercado" />
              <div className="number">
                5+
              </div>
            </div>
            <div className="card-name">
              {t('home:ANOS EN EL MERCADO')}
            </div>
          </div>
          <div className="statistic-card">
            <div className="card-banner">
              <img src="/assets/svg/mercado.svg" alt="mercado" />
              <div className="number">
                5+
              </div>
            </div>
            <div className="card-name">
              {t('home:ANOS EN EL MERCADO')}
            </div>
          </div>
          <div className="statistic-card">
            <div className="card-banner">
              <img src="/assets/svg/mercado.svg" alt="mercado" />
              <div className="number">
                5+
              </div>
            </div>
            <div className="card-name">
              {t('home:ANOS EN EL MERCADO')}
            </div>
          </div>
          <div className="statistic-card">
            <div className="card-banner">
              <img src="/assets/svg/mercado.svg" alt="mercado" />
              <div className="number">
                5+
              </div>
            </div>
            <div className="card-name">
              {t('home:ANOS EN EL MERCADO')}
            </div>
          </div>
        </div>
        <div className="options-list">
          <div className="option-item">
            {t('home:Conxenion encriptada de VPN seguro')}
          </div>
          <div className="option-item">
            {t('home:Challenger Booster')}
          </div>
          <div className="option-item">
            {t('home:Precios Asequibles')}
          </div>
          <div className="option-item">
            {t('home:Programa de Fidelizacion')}
          </div>
          <div className="option-item">
            {t('home:Servicio Personalizable')}
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(WhyChooseUsSection);