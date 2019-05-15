import React from 'react';
import { withTranslation } from 'react-i18next';

// Import Custom Components
import { GuaranteeBadge, CustomSelect, Button3 } from '../../../../components';
// Import Custom Styles
import './LeagueBoostingForm.scss';

class LeagueBoostingForm extends React.Component {
  render() {
    const { t } = this.props;
    return(
      <section className="container-fluid form-wrapper">
        <div className="container">
          <div className="row badges">
            <GuaranteeBadge type="vpn" />
            <GuaranteeBadge type="safe_boost" />
          </div>
          <div className="form-content">
            <div className="row boosting-select">
              <div className="col-3 select-column league-select">
                <div className="title">
                  <div className="order-number">1</div>
                  { t('boosting:YOUR CURRENT LEAGUE')}
                </div>
                <div className="row">
                  <div className="col-8 selectors">
                    <CustomSelect>
                      <option>Silver</option>
                    </CustomSelect>
                    <CustomSelect>
                      <option>Division I</option>
                    </CustomSelect>
                    <CustomSelect>
                      <option>LP 0-20</option>
                    </CustomSelect>
                  </div>
                  <div className="col-4 icon">
                    <img src="/assets/images/divisions/10.png" alt="icon"/>
                  </div>
                </div>
              </div>
              <div className="col-3 select-column desire-select">
                <div className="title">
                  <div className="order-number">2</div>
                  { t('boosting:YOUR DESIRE LEAGUE')}
                </div>
                <div className="row">
                  <div className="col-8 selectors">
                    <CustomSelect>
                      <option>Gold</option>
                    </CustomSelect>
                    <CustomSelect>
                      <option>Division IV</option>
                    </CustomSelect>
                  </div>
                  <div className="col-4 icon">
                    <img src="/assets/images/divisions/10.png" alt="icon"/>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6 select-colum server-select">
                    <div className="title">
                      <div className="order-number">3</div>
                      { t('boosting:YOUR SERVER')}
                    </div>
                    <CustomSelect>
                      <option>Europ West</option>
                    </CustomSelect>
                  </div>
                  <div className="col-6 select-colum queue-select">
                    <div className="title">
                      <div className="order-number">4</div>
                      { t('boosting:TYPE OF QUEUE')}
                    </div>
                    <CustomSelect>
                      <option>Solo/Duo(5v5)</option>
                    </CustomSelect>
                  </div>
                </div>
                <div className="row duo-select">
                  <div className="title">
                    <div className="order-number">5</div>
                    { t('boosting:TYPE OF DUO')}
                  </div>
                  <div className="col-12 buttons">
                    <div className="custom-duo-select">
                      <input id="duo_regular" type="radio" name="duo[0]" checked/>
                      <label htmlFor="duo_regular" className="regular">{ t('boosting:REGULAR') }</label>
                    </div>
                    <div className="custom-duo-select">
                      <input id="duo_premium" type="radio" name="duo[0]" />
                      <label htmlFor="duo_premium" className="premium">{ t('boosting:PREMIUM') }</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row result">
            <div className="col-6 price-calc">
              <div className="title">{t('boosting:Total Price')}</div>
              <div className="price">22.50€</div>
              <Button3 className="button">{t('boosting:PURCHASE ELO BOOST')}</Button3>
              <div className="description">
                {t('boosting:Our boosters will not chat with anyone from your friend list. We will also refrain from using the chat in-game.')}
              </div>
              <div className="row cupon-info">
                <div className="col-6 discount">
                  <div className="cupon-title">
                    {t('boosting:DISCOUNT FOR COUPON?')}
                  </div>
                  <input type="text" className="cupon"/>
                </div>
                <div className="col-6 loyalty-point">
                  <div className="cupon-title">
                    {t('boosting:LOYALTY POINTS?')}
                  </div>
                  <CustomSelect>
                    <option>0 BP - 0% Discount</option>
                  </CustomSelect>
                </div>
              </div>
            </div>
            <div className="col-6 guide">
              <div className="description conversation">
                {t('boosting:You will be able to communicate with your booster and track your order progress right from your personal area on our website!')}
              </div>
              <div className="description time">
                {t('boosting:Average Completion Time - 1 Division Per Day')}
              </div>
              <div className="row">
                <Button3>
                  {t('boosting:How It Works')}
                </Button3>
                <div className="trustpilot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(LeagueBoostingForm);
