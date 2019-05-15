import React from 'react';
import { withTranslation } from 'react-i18next';

import { Button3 } from '../../../components';

import './ProgramsSection.scss';

class ProgramsSection extends React.Component {
  render() {
    const { t } = this.props;
    return(
      <section className="container programs-section">
        <div className="heading">
          <div className="gradient-font title">
            {t('home:REFERRAL/LOYALTY PROGRAM')}
          </div>
          <div className="description">
            {t('home:Ofrecemos un servicio de referidos y lealtadad. Get FREE SKINS with us. 5€ por amigo para canjear en skins, cofres misteriosos... etc')}
          </div>
        </div>
        <div className="program-cards">
          <div className="card referral-program-card">
            <img src="/assets/images/referral-program.png" className="back-img" alt="referral-program"/>
            <img src="/assets/images/overlay.png" className="overlay-img" alt="overlay" />
            <div className="program-title">
              {t('home:REFERRAL PROGRAM')}
            </div>
            <div className="program-desc">
              {t('home:Refer your friend to us and he will get a 10% discount for his/her first purchase and you will get 500 EHC. There is no limit on number of friends invited. Claim your skins without spend money.')}
            </div>
            <Button3>
              {t('home:VIEW MORE')}
            </Button3>
          </div>
          <div className="card loyalty-program-card">
            <img src="/assets/images/loyalty-program.png" className="back-img" alt="referral-program"/>
            <img src="/assets/images/overlay.png" className="overlay-img" alt="overlay" />
            <div className="program-title">
              {t('home:LOYALTY PROGRAM')}
            </div>
            <div className="program-desc">
              {t('home:For each purchase no matter if it would be elo boosting, coaching or smurfs you will get certain amount of cashback as EHC depending on the price of your order. That you can use to claim rewards as skins.')}
            </div>
            <Button3>
              {t('home:REWARDS')}
            </Button3>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(ProgramsSection)