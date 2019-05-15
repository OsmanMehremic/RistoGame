import React from 'react';
import { withTranslation } from 'react-i18next';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import './ReviewSection.scss';

class ReviewSection extends React.Component {

  componentDidMount() {
    var aScript = document.createElement('script');
    aScript.type = 'text/javascript';
    aScript.src = "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
    aScript.async = "true"
    document.head.appendChild(aScript);
    aScript.onload = function () {
        var trustbox = document.getElementById('trustbox');
        window.Trustpilot.loadFromElement(trustbox);
    };
  }

  render() {
    const { t } = this.props;

    return(
      <section className="container-fluid review-section-wrapper">
        <div className="section-back"></div>
        <div className="container review-section">
          <div className="heading">
            {t('home:REVIEWS')}
          </div>
          <div className="review-number">
            { 6567 + t('home:Reviews')}
          </div>
          <div className="review-slider-wrapper">
            <CarouselProvider
              naturalSlideHeight={100}
              naturalSlideWidth={200}
              totalSlides={4}
              visibleSlides={1}
              className="review-carousel"
              >
              <div className="navigation-bar">
                <ButtonBack className="prev-review-btn">
                  <img src="/assets/svg/pagination_prev_white.svg" alt="prev_button" />
                </ButtonBack>
                <span className="button-separator"> | </span>
                <ButtonNext className="next-review-btn">
                  <img src="/assets/svg/pagination_next_white.svg" alt="next_button" />
                </ButtonNext>
              </div>
              <Slider className="review-slider">
                <Slide className="review-slide">
                  <div className="slide-item">
                    <div className="signature">
                      <span className="id">
                        T****L
                      </span>
                      <span className="separator"> - </span>
                      <span className="time">2019-03-25 19:30:30</span>
                    </div>
                    <div className="description">
                      Amazing I really Appreciate it
                    </div>
                    <div className="rank-transfer">
                      <div className="start">
                        <img src="/assets/images/divisions/10.png" alt="start" />
                        <div className="name">
                          {t('home:Silver II')}
                        </div>
                      </div>
                      <div className="arrow">
                        <img src="/assets/svg/arrow_right_black.svg" alt="arrow" />
                      </div>
                      <div className="finish">
                        <img src="/assets/images/divisions/11.png" alt="finish" />
                        <div className="name">
                          {t('home:Silver III')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="review-slide">
                  <div className="slide-item">
                    <div className="signature">
                      <span className="id">
                        T****L
                      </span>
                      <span className="separator"> - </span>
                      <span className="time">2019-03-25 19:30:30</span>
                    </div>
                    <div className="description">
                      Amazing I really Appreciate it
                    </div>
                    <div className="rank-transfer">
                      <div className="start">
                        <img src="/assets/images/divisions/10.png" alt="start" />
                        <div className="name">
                          {t('home:Silver II')}
                        </div>
                      </div>
                      <div className="arrow">
                        <img src="/assets/svg/arrow_right_black.svg" alt="arrow" />
                      </div>
                      <div className="finish">
                        <img src="/assets/images/divisions/11.png" alt="finish" />
                        <div className="name">
                          {t('home:Silver III')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="review-slide">
                  <div className="slide-item">
                    <div className="signature">
                      <span className="id">
                        T****L
                      </span>
                      <span className="separator"> - </span>
                      <span className="time">2019-03-25 19:30:30</span>
                    </div>
                    <div className="description">
                      Amazing I really Appreciate it
                    </div>
                    <div className="rank-transfer">
                      <div className="start">
                        <img src="/assets/images/divisions/10.png" alt="start" />
                        <div className="name">
                          {t('home:Silver II')}
                        </div>
                      </div>
                      <div className="arrow">
                        <img src="/assets/svg/arrow_right_black.svg" alt="arrow" />
                      </div>
                      <div className="finish">
                        <img src="/assets/images/divisions/11.png" alt="finish" />
                        <div className="name">
                          {t('home:Silver III')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide className="review-slide">
                  <div className="slide-item">
                    <div className="signature">
                      <span className="id">
                        T****L
                      </span>
                      <span className="separator"> - </span>
                      <span className="time">2019-03-25 19:30:30</span>
                    </div>
                    <div className="description">
                      Amazing I really Appreciate it
                    </div>
                    <div className="rank-transfer">
                      <div className="start">
                        <img src="/assets/images/divisions/10.png" alt="start" />
                        <div className="name">
                          {t('home:Silver II')}
                        </div>
                      </div>
                      <div className="arrow">
                        <img src="/assets/svg/arrow_right_black.svg" alt="arrow" />
                      </div>
                      <div className="finish">
                        <img src="/assets/images/divisions/11.png" alt="finish" />
                        <div className="name">
                          {t('home:Silver III')}
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
            </CarouselProvider>
          </div>
          <div className="trustpilot-score-board" id="trustbox">

          </div>
        </div>
      </section>
    )
  }
}

export default withTranslation()(ReviewSection);