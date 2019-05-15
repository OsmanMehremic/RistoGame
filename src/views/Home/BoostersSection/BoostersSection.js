import React from 'react';
import { withTranslation } from 'react-i18next';
import { CarouselProvider, Slider, Slide, ButtonNext  } from 'pure-react-carousel';


import "./BoostersSection.scss";
import { Badge1, Badge2, Button3 } from '../../../components';

class BoostersSection extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <section className="container-fluid boosters-section-wrapper">
        <div className="boosters-section-back"></div>
        <div className="container boosters-section">
          <div className="row boosters-section-top">
            <div className="col-1 section-title">
              <div className="subtitle">
                {t('home:FROM GAMERS BY GAMERS.')}
              </div>
              <div className="maintitle">
                {t('home:MEET THE BOOSTERS')}
              </div>
            </div>
            <div className="col-11 cards-list">
              <div className="row cards">
                <CarouselProvider
                  naturalSlideHeight={200}
                  naturalSlideWidth={170}
                  totalSlides={5}
                  visibleSlides={4}
                  className="cards-carousel"
                  >
                  <Slider className="cards-slider">
                    <Slide index={0} className="card-slide">
                      <div className='card'>
                        <div className="overlay"></div>
                        <div className="badge-row">
                          <Badge1>
                            {t('home:COACH')}
                          </Badge1>
                          <Badge2>
                            {t('home:PREMIUM BOOSTER')}
                          </Badge2>
                        </div>
                        <div className="user-img">
                          <span className="status"></span>
                          <img src="/assets/images/user-icon.png" className="user-icon" alt="user-icon" />
                        </div>
                        <div className="perkz">
                          {t('home:G2 PERKZ')}
                        </div>
                        <div className="item-img">
                          <img src="/assets/images/divisions/27.png" className="division" alt="division" />
                        </div>
                      </div>
                    </Slide>
                    <Slide index={1} className="card-slide">
                      <div className='card'>
                        <div className="overlay"></div>
                        <div className="badge-row">
                          <Badge1>
                            {t('home:COACH')}
                          </Badge1>
                          <Badge2>
                            {t('home:PREMIUM BOOSTER')}
                          </Badge2>
                        </div>
                        <div className="user-img">
                          <span className="status"></span>
                          <img src="/assets/images/user-icon.png" className="user-icon" alt="user-icon" />
                        </div>
                        <div className="perkz">
                          {t('home:G2 PERKZ')}
                        </div>
                        <div className="item-img">
                          <img src="/assets/images/divisions/27.png" className="division" alt="division" />
                        </div>
                      </div>
                    </Slide>
                    <Slide index={2} className="card-slide">
                      <div className='card'>
                        <div className="overlay"></div>
                        <div className="badge-row">
                          <Badge1>
                            {t('home:COACH')}
                          </Badge1>
                          <Badge2>
                            {t('home:PREMIUM BOOSTER')}
                          </Badge2>
                        </div>
                        <div className="user-img">
                          <span className="status"></span>
                          <img src="/assets/images/user-icon.png" className="user-icon" alt="user-icon" />
                        </div>
                        <div className="perkz">
                          {t('home:G2 PERKZ')}
                        </div>
                        <div className="item-img">
                          <img src="/assets/images/divisions/27.png" className="division" alt="division" />
                        </div>
                      </div>
                    </Slide>
                    <Slide index={3} className="card-slide">
                      <div className='card'>
                        <div className="overlay"></div>
                        <div className="badge-row">
                          <Badge1>
                            {t('home:COACH')}
                          </Badge1>
                          <Badge2>
                            {t('home:PREMIUM BOOSTER')}
                          </Badge2>
                        </div>
                        <div className="user-img">
                          <span className="status"></span>
                          <img src="/assets/images/user-icon.png" className="user-icon" alt="user-icon" />
                        </div>
                        <div className="perkz">
                          {t('home:G2 PERKZ')}
                        </div>
                        <div className="item-img">
                          <img src="/assets/images/divisions/27.png" className="division" alt="division" />
                        </div>
                      </div>
                    </Slide>
                    <Slide index={4} className="card-slide">
                      <div className='card'>
                        <div className="overlay"></div>
                        <div className="badge-row">
                          <Badge1>
                            {t('home:COACH')}
                          </Badge1>
                          <Badge2>
                            {t('home:PREMIUM BOOSTER')}
                          </Badge2>
                        </div>
                        <div className="user-img">
                          <span className="status"></span>
                          <img src="/assets/images/user-icon.png" className="user-icon" alt="user-icon" />
                        </div>
                        <div className="perkz">
                          {t('home:G2 PERKZ')}
                        </div>
                        <div className="item-img">
                          <img src="/assets/images/divisions/27.png" className="division" alt="division" />
                        </div>
                      </div>
                    </Slide>
                  </Slider>
                  <ButtonNext className="button-next">
                    <img src="assets/svg/pagination_next_white.svg" alt="next-slider-btn" />
                  </ButtonNext>
                </CarouselProvider>
              </div>
              <div className="cards-desc">
                {t('home:With a certified team of over 400 Master/Challenger Boosters, we provide the best boosting experience to our community.')}
              </div>
            </div>
          </div>

          <div className="boosters-section-bottom">
            <Button3 className="view-all-btn">
              {t('home:+VIEW ALL')}
            </Button3>
            <div className="join-us-text">
              {t("home:WE'RE HIRING. JOIN US")}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(BoostersSection);
