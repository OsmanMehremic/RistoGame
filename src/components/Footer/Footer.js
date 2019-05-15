import React from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './Footer.scss';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      showLangDropdown: false,
    }

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickLangItem = this.onClickLangItem.bind(this);
  }

  onClickHandler() {
    this.setState({
      showLangDropdown: !this.state.showLangDropdown
    });
  }

  onClickLangItem(lang) {
    this.setState({
      lang: lang,
      showLangDropdown: false
    })
  }
  render() {
    const { t } = this.props;
    return(
      <section className="container-fluid footer-wrapper">
        <div className="container footer-content">
          <div className="row">
            <div className="col-3 share">
              <img src="/assets/images/logo.png" alt="logoimage" className="logo"/>
              <p className="copyright">
                {/* {t('footer:© Elo Heaven 2019. All rights reserved.')} */}
                {t('footer:copyright')}
              </p>
              <div className="social-icons">
                <img src="/assets/svg/social/footer_icon_tw.svg" alt="twitter" className="tw-share-icon"/>
                <img src="/assets/svg/social/footer_icon_pin.svg" alt="pinterest" className="pin-share-icon"/>
                <img src="/assets/svg/social/footer_icon_you.svg" alt="youtube" className="you-share-icon"/>
                <img src="/assets/svg/social/footer_icon_fb.svg" alt="facebook" className="fb-share-icon"/>
              </div>
            </div>
            <div className="col-6 footer-navigations">
              <div className="row">
                <div className="col-4 footer-nav-list">
                  <div className="footer-nav-header">
                    {t('footer:information:title')}
                  </div>
                  <ul className="list">
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:information:privacy')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:information:terms')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:information:faq')}
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-4 footer-nav-list">
                  <div className="footer-nav-header">
                    {t('footer:eloheaven:title')}
                  </div>
                  <ul className="list">
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:eloheaven:jobs')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:eloheaven:contact')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:eloheaven:referalsystem')}
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="col-4 footer-nav-list">
                  <div className="footer-nav-header">
                    {t('footer:leagueoflegend:title')}
                  </div>
                  <ul className="list">
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:leagueoflegend:eloboosting')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:leagueoflegend:coaching')}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/" className="footer-navlink">
                        {t('footer:leagueoflegend:smurf_accounts')}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3 lang">
              <div className="lang-dropdown">
                <button type="button" className="dropdown-toggle" onClick={this.onClickHandler} >
                  <img src={"/assets/svg/flags/" + this.state.lang + ".svg"} alt="lang-flag" />
                  {t('footer:lang:' + this.state.lang)}
                </button>
                <ul className="lang-dropdown-list" style={{display: this.state.showLangDropdown ? 'block' : 'none'}}>
                  <li onClick={() => this.onClickLangItem('en')}>
                    <img src={"/assets/svg/flags/en.svg"} alt="lang-flag" />
                    {t('footer:lang:en')}
                  </li>
                  <li onClick={() => this.onClickLangItem('ru')}>
                    <img src={"/assets/svg/flags/ru.svg"} alt="lang-flag" />
                    {t('footer:lang:ru')}
                  </li>
                </ul>
              </div>
              <div className="lang-desc">
                {t('footer:lang:desc')}
              </div>
            </div>
          </div>
        </div>
        <div className="payment-options-wrapper">
          <div className="container options-cotainer">
            <img src="/assets/svg/payments/mc.svg" alt="master card" className="payment-option"/>
            <img src="/assets/svg/payments/mc_secure.svg" alt="master card secure" className="payment-option"/>
            <img src="/assets/svg/payments/visa.svg" alt="visa card" className="payment-option"/>
            <img src="/assets/svg/payments/visa_secure.svg" alt="visa card secure" className="payment-option"/>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(Footer);