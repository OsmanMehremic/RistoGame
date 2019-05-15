import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import { Button3, Flag, Button4 } from '../../../components';

import './HomeActions.scss';

class HomeActions extends Component {
  render() {
    const { t } = this.props;
    return(
      <div className="container actions-wrapper">
        <div className="top-action-card">
          <div className="hero">
            <img src="/assets/images/QNiYTbl.png" alt="hero"/>
          </div>
          <div className="title">
            {t('home:ELO BOOSTING')}
          </div>
          <div className="row button-price-wrapper">
            <Button3>
              {t('home:GET BOOSTED')}
            </Button3>
            <Flag>
              {t('home:STARTS AT €6.00')}
            </Flag>
          </div>
        </div>
        <div className="row actions-row">
          <div className="action-card coaching">
            <div className="hero">
              <img src="/assets/images/1fP5VHR.png" alt="hero" />
            </div>
            <div className="title">
              {t('home:COACHING')}
            </div>
            <div className="row button-price-wrapper">
              <Button4>
                {t('home:GET COACH >')}
              </Button4>
              <Flag>
                {t('home:FROM € 10.00/H')}
              </Flag>
            </div>
          </div>
          <div className="action-card smurfs">
            <div className="hero">
              <img src="/assets/images/4jVrECI.png" alt="hero" />
            </div>
            <div className="title">
              {t('home:SMURFS')}
            </div>
            <div className="row button-price-wrapper">
              <Button4>
                {t('home:GET YOURS >')}
              </Button4>
              <Flag>
                {t('home:FROM € 14.00')}
              </Flag>
            </div>
          </div>
          <div className="action-card sell-account">
            <div className="hero">
              <img src="/assets/images/nMEK36J.png" alt="hero" />
            </div>
            <div className="title">
              {t('home:SELL YOUR ACCOUNT')}
            </div>
            <div className="row button-price-wrapper">
              <Button4>
                {t('home:GET MONEY >')}
              </Button4>
              <Flag>
                {t('home:FROM YOUR PRICE')}
              </Flag>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withTranslation()(HomeActions);