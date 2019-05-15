import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import './BoostingAction.scss';

class BoostingAction extends React.Component {
  render() {
    const items = ['league', 'duo', 'win', 'placement', 'normal', 'packages', 'mastery', 'giftbox'];

    const { t,  } = this.props;

    return(
      <section className="container-fluid boosting-action-wrapper">
        <div className="container boosting-actions-selector">
          {
            items.map(item => (
              <Link to={`/boosting/` + item} key={item} className="boosting-action-link">
                <div className="boosting-item" >
                  <div className={"icon " + item}></div>
                  <div className="name">
                    { t('boosting:actions:' + item) }
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </section>
    )
  }
}

export default withTranslation()(BoostingAction);
