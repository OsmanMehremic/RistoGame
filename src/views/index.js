import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router,  Route } from "react-router-dom";

// Import Custom Component
import { Header, Footer, OverLay } from '../components';
import Home from './Home/Home';
import Boosting from './Boosting/Boosting';
import AuthForm from './AuthForm/AuthForm';

class Main extends React.Component {
  render() {
    const { modal_show } = this.props;
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route exact path="/home" component={Home} />
          <Route path="/boosting" component={Boosting} />
          <AuthForm />
          <Footer />
          <OverLay display={modal_show} />
        </React.Fragment>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal_show: state.common.modal_show
  }
}

export default connect(mapStateToProps, null)(Main);