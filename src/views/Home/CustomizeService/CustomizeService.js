import React from 'react';
import { withTranslation } from 'react-i18next';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './CustomizeService.scss';

class CustomizeService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeServiceIndex: 0
    }

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onClickBackButton = this.onClickBackButton.bind(this);
    this.onClickNextButton = this.onClickNextButton.bind(this);
  }

  onMouseEnterHandler(index) {
    this.setState({
      activeServiceIndex: index
    });
  }

  onClickBackButton() {
    if (this.state.activeServiceIndex !== 0) {
      this.setState({
        activeServiceIndex: this.state.activeServiceIndex - 1
      });
    } else {
      return;
    }
  }

  onClickNextButton() {
    console.log(this.state.activeServiceIndex);
    if (this.state.activeServiceIndex !== 2) {
      this.setState({
        activeServiceIndex: this.state.activeServiceIndex + 1
      });
    } else {
      return;
    }
  }

  render() {
    // Translation Props
    const { t } = this.props;

    return (
      <section className="container-fluid customize-service-wrapper">
        <div className="custom-background"></div>
        <section className="container customize-service">
          <div className="row service-content">
            <div className="col-6 service-list">
              <div className="list-header">
                <div className="header-subtitle">
                  {t('home:ELOHEAVEN SPECIALITY')}
                </div>
                <div className="header-title">
                  {t('home:CUSTOMIZE YOUR ELO BOOST SERVICE!')}
                </div>
              </div>
              <div className="list-body">
                <div className={"list-item" + (this.state.activeServiceIndex === 0 ? " active" : "") } onMouseEnter={() => this.onMouseEnterHandler(0)}>
                  <div className="item-img">
                    <img src="/assets/svg/service-arrow.svg" alt="item-img" />
                  </div>
                  <div className="item-description">
                    {t('home:1.CUSTOMIZE YOUR SERVICE')}
                  </div>
                </div>
                <div className={"list-item" + (this.state.activeServiceIndex === 1 ? " active" : "") } onMouseEnter={() => this.onMouseEnterHandler(1)}>
                  <div className="item-img">
                    <img src="/assets/svg/payment-option.svg" alt="item-img" />
                  </div>
                  <div className="item-description">
                    {t('home:2.SELECT YOUR PAYMENT OPTION')}
                  </div>
                </div>
                <div className={"list-item" + (this.state.activeServiceIndex === 2 ? " active" : "") } onMouseEnter={() => this.onMouseEnterHandler(2)}>
                  <div className="item-img">
                    <img src="/assets/images/manage-feature.png" alt="item-img" />
                  </div>
                  <div className="item-description">
                    {t('home:3.MANAGE YOUR FEATURES')}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 service-slider">
              <div className="hero-img">
                <img src="/assets/images/super-man-service-withback.png" className="hero" alt="super-man-in-service"/>
              </div>
              <div className="computer-img">
                <img src="/assets/images/macbook_desktop_big.png" alt="mac-desk" />
              </div>
              {/* Slider Start */}
              <CarouselProvider
                naturalSlideHeight={300}
                naturalSlideWidth={450}
                totalSlides={3}
                className="custom-slider"
                >
                <Slider className="slider">
                  <Slide index={0} className="slide">
                    <div className="slider-item">
                      <img src="/assets/images/com-screen-1.png" className="item-img customize-screen" alt="item-img"/>
                      <div className="screen-overlay"></div>
                      <h2>{t('home:1.SELECTION TO OPERATION PAGE')}</h2>
                    </div>
                  </Slide>
                  <Slide index={1} className="slide">
                    <div className="slider-item">
                      <img src="/assets/images/com-screen-2.png" className="item-img customize-screen" alt="item-img"/>
                      <div className="screen-overlay"></div>
                      <h2>{t('home:2.SELECTION TO OPERATION PAGE')}</h2>
                    </div>
                  </Slide>
                  <Slide index={2} className="slide">
                    <div className="slider-item">
                      <img src="/assets/images/com-screen-3.png" className="item-img customize-screen" alt="item-img"/>
                      <div className="screen-overlay"></div>
                      <h2>{t('home:3.SELECTION TO OPERATION PAGE')}</h2>
                    </div>
                  </Slide>
                </Slider>
                <ButtonBack className="slider-back-button" onClick={this.onClickBackButton}/>
                <ButtonNext className="slider-next-button" onClick={this.onClickNextButton}/>
              </CarouselProvider>
              {/* Slider End */}
              <div className="divider"></div>
            </div>
          </div>
          <div className="row service-desc-list">
            <div className="col-4 service-desc-item">
              <div className="desc-title">
                {t('home:1.PERSONALIZA EL SERVICO')}
              </div>
              <div className="desc-content">
                {t('home:This is the description for the service item and written in French sometimes. We will try to do our best for you customers and you will realize the persi')}
              </div>
            </div>
            <div className="col-4 service-desc-item">
              <div className="desc-title">
                {t('home:2.PERSONALIZA EL SERVICO')}
              </div>
              <div className="desc-content">
                {t('home:This is the description for the service item and written in French sometimes. We will try to do our best for you customers and you will realize the persi')}
              </div>
            </div>
            <div className="col-4 service-desc-item">
              <div className="desc-title">
                {t('home:3.PERSONALIZA EL SERVICO')}
              </div>
              <div className="desc-content">
                {t('home:This is the description for the service item and written in French sometimes. We will try to do our best for you customers and you will realize the persi')}
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default withTranslation()(CustomizeService);
