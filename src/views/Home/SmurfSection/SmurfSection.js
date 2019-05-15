import React from 'react';
import { withTranslation } from 'react-i18next';
import { Button3 } from '../../../components';

import './SmurfSection.scss';
import { Button2 } from '../../../components/Button';

class SmurfSection extends React.Component {
  render() {
    const { t } = this.props;
    return(
      <section className="container-fluid smurfs-section-wrapper">
        <div className="img-background">
          <img src="/assets/images/league_of_legends_smurfs_bg.png" alt="smurf-section-league-of-legend" />
        </div>
        <div className="smurfs-section">
          <div className="row">
            <div className="col-4 smurf-title">
              <div className="main-title">
                {t('home:BUY')} <br />{t('LEAGUE OF LEGENDS')}<br />{t('SMURFS')}
              </div>
              <div className="divider">
                <img src="/assets/images/bar.png" alt="bar" />
              </div>
              <div className="description">
                {t('home:We are the most trustworthy shop on the market related to lol accounts. We’ve been selling league of legend accounts for a very long time, even before starting eloheaven.Pro we were in the business. When we saw the bad management of the related web pages, ban rates, and ridiculous prices we decided to create our own with the best quality and best prices. We are very serious when we say we want the top quality overall. If you buy from us you can be assured of the best quality and prices, instant delivery and 24/7 support and also our lifetime guarante!')}
              </div>
            </div>
            <div className="col-8 boards">
              <div className="row">
                <div className="col-4 board">
                  <img className="board-bg-img" src="/assets/images/account-delivery-icon.png" alt="instant-accoutn" />
                  <div className="board-title">
                    {t('home:24/7 Instant Account Delivery')}
                  </div>
                  <div className="board-desc">
                    {t('home:At any time! Yes! When you buy a LoL account from us it will be delivered instantly after completing your purchage to your selected email. Our automated systems works 24/7, 365 days a year')}
                  </div>
                </div>
                <div className="col-4 board">
                  <img className="board-bg-img" src="/assets/images/hand-levelled-icon.png" alt="instant-accoutn" />
                  <div className="board-title">
                    {t('home:Hand Levelled Accounts')}
                  </div>
                  <div className="board-desc">
                    {t('home:Our League of Legends accounts are levelled and/or supervized by real players using a variety of methods')}
                  </div>
                </div>
                <div className="col-4 board">
                  <img className="board-bg-img" src="/assets/images/lifetime-guarantee-icon.png" alt="instant-accoutn" />
                  <div className="board-title">
                    {t('home:Free Lifetime Guarantee')}
                  </div>
                  <div className="board-desc">
                    {t('home:We provide a lifetime guarantee and excellent support for all of our accounts. If something happens to your League of Legends account, you are covered by our guarantee!')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container shops-section">
          <div className="row">
            <div className="col-8">
              <div className="shop-card-featured" style={{backgroundImage: "url('assets/images/TARHMFF.jpg')"}}>
                <div className="shop-text">
                  <h4>{t('home:HUNDREDS')}</h4>
                  <h1>{t('home:UNIQUE ACCOUNTS')}</h1>
                </div>
                <Button3>
                  {t('home:VIEW SMURFS')}
                </Button3>
              </div>
            </div>
            <div className="col-4">
              <div className="shop-card-small" style={{backgroundImage: "url('assets/images/Cyberpop-Zoe-Splash.jpg')"}}>
                <h1 className="shop-action-title">{t('home:FULL SHOP')}</h1>
                <Button2></Button2>
              </div>
              <div className="shop-card-small" style={{backgroundImage: "url('assets/images/Lunar-Wraith-Sylas.jpg')"}}>
                <h1 className="shop-action-title">{t('home:BECOME A SELLER')}</h1>
                <Button2></Button2>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(SmurfSection);