import React from 'react';
import { withTranslation } from 'react-i18next';

// Home Page Customized Component
import HomeHeader from './HomeHeader/HomeHeader';
import HomeActions from './HomeActions/HomeActions';
import WhyChooseUsSection from './WhyChooseUsSection/WhyChooseUsSection';
import CustomizeService from './CustomizeService/CustomizeService';
import BoostersSection from './BoostersSection/BoostersSection';
import AnalyzeSection from './AnalyzeSection/AnalyzeSection';
import SmurfSection from './SmurfSection/SmurfSection';
import ReviewSection from './ReviewSection/ReviewSection';
import ProgramsSection from './ProgramsSection/ProgramsSection';
import InviteSection from './InviteSection/InviteSection';

// Import Home Page shared Style
import './Home.scss';
class Home extends React.Component {
  componentWillReceiveProps(props) {
    console.log(props);
  }
  render() {


    return(
      <div className="home">
        <div className="banner"></div>
        {/* Home Page Component Start */}
        <HomeHeader />
        <HomeActions />
        <WhyChooseUsSection />
        <CustomizeService />
        <BoostersSection />
        <AnalyzeSection />
        <SmurfSection />
        <ReviewSection />
        <ProgramsSection />
        <InviteSection />
        {/* Home Page Component End */}
      </div>
    )
  }
}

export default withTranslation()(Home);
