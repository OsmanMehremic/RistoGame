import React from 'react';
import { Route } from 'react-router-dom';
import BoostingHeader from './BoostingHeader/BoostingHeader';
import BoostingAction from './BoostingAction/BoostingAction';
import { LeagueBoostingForm } from './BoostingContents';

import './Boosting.scss';

class Boosting extends React.Component {
  render() {
    const { match } = this.props;
    return(
      <React.Fragment>
        <BoostingHeader />
        <BoostingAction />
        <Route path={`${match.path}/league`} component={LeagueBoostingForm}/>
      </React.Fragment>
    )
  }
}

export default Boosting;