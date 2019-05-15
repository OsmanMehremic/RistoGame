import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { showModal } from '../../store/actions';

import "./Header.scss";

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dropdownOpened: false
    }

    this.dropdownClickHandler = this.dropdownClickHandler.bind(this);
    this.onClickUserIcon = this.onClickUserIcon.bind(this);
  }

  dropdownClickHandler() {
    this.setState({
      dropdownOpened: !this.state.dropdownOpened
    });
  }

  onClickUserIcon() {
    this.props.showModal();
  }

  render() {
    // Detect lang code from url query
    const values = queryString.parse(this.props.location.search);
    const lang = values.lng ? values.lng : 'en';

    return (
      <React.Fragment>
        <div className="main-bg"></div>
        <div className="header">
          <div className="container header-content">
            <div className="main-navbar row">
              <div className="col-2 logo">
                <NavLink to="/" className="logo-link">
                  <img src="/assets/images/logo.png" alt="logo"/>
                </NavLink>
              </div>
              <nav className="col-7 main-nav">
                <div className={"dropdown lang-dropdown " + (this.state.dropdownOpened ? "show" : '')}>
                  <button type="button" className="btn dropdown-toggle" onClick={this.dropdownClickHandler} id="dropdownMenuLink">
                    {lang.toUpperCase()}
                  </button>
                  <a className="item" href="?lng=en">EU</a>
                  <a className="item" href="?lng=fr">FR</a>
                  <a className="item" href="?lng=en">US</a>
                </div>
                <ul className="nav nav-list">
                  <li className="nav-item">
                    <NavLink to="/home" className="nav-link" activeClassName="current-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/boosting" className="nav-link" activeClassName="current-link">Boosting</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/coaching" className="nav-link" activeClassName="current-link">Coaching</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/boosters" className="nav-link" activeClassName="current-link">Boosters</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/demo" className="nav-link" activeClassName="current-link">Demo</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/more" className="nav-link" activeClassName="current-link">More</NavLink>
                  </li>
                </ul>
              </nav>
              <div className="col-3 navbar-actions">
                <div className="action-button free-skins">FREE SKINS</div>
                <div className="action-button user" onClick={() => this.onClickUserIcon()}></div>
                <div className="action-button cart"></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  showModal: showModal
}

export default connect(null, mapDispatchToProps)(withRouter(Header));