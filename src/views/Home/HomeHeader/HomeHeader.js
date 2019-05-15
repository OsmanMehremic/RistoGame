import React, { Component } from 'react';
import { SolidButton } from '../../../components';
import { withTranslation } from 'react-i18next';

import './HomeHeader.scss';
class HomeHeader extends Component {
  render() {
    const { t } = this.props;
    return(
      <div className="container home-header">
        <div className="row home-header-row">
          <div className="col-5 slogan">
            <div className="title">
              {t('home:Boost your ingame account to 100%')}
            </div>
            <div className="text">
              {t('home:More than 5 years of experience and team of 600+ professinal players')}
            </div>
            <div className="buttons">
              <SolidButton>
                {t('home:Quick Order')}
              </SolidButton>
              <SolidButton>
                {t('home:Accounts')}
              </SolidButton>
            </div>
          </div>
          <div className="col-7 cards">
            <div className="home-header-card service">
              <div className="order">1</div>
              <div className="img-div">
                <img src="/assets/svg/big_icon_vault.svg" className="card-img" alt="card-service"/>
              </div>
              <div className="card-title">{t('home:header:Outstanding Service')}</div>
              <div className="card-description">{t('home:header:Great quality at a fair price')}</div>
            </div>
            <div className="home-header-card secure">
              <div className="order">1</div>
              <div className="img-div">
                <img src="/assets/svg/big_icon_shield.svg" className="card-img" alt="card-service"/>
              </div>
              <div className="card-title">{t('home:header:Secure')}</div>
              <div className="card-description">{t('home:header:Confidential. No risks for your account')}</div>
            </div>
            <div className="home-header-card in-time">
              <div className="order">1</div>
              <div className="img-div">
                <img src="/assets/svg/big_icon_clock.svg" className="card-img" alt="card-service"/>
              </div>
              <div className="card-title">{t('home:header:In time')}</div>
              <div className="card-description">{t("home:header:We're blazing fast 24/7 support")}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withTranslation()(HomeHeader);