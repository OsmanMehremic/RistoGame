// Import Libraries
import React from 'react';
import { connect } from 'react-redux';
// Import Custom Component
import { Button3, SocialAuthButton } from "../../components";
// Import Custom Actions
import { hideModal } from '../../store/actions'
// Import Style
import "./AuthForm.scss";

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal_show: true,
      showDropdownLIst: false,
      selected_dropdown_item_index: 0,
      auth_action: 1 // 0: register, 1: login
    }

    this.onClickActionButton = this.onClickActionButton.bind(this);
    this.onDropdownClick = this.onDropdownClick.bind(this);
    this.onClickDropdownItemClick = this.onClickDropdownItemClick.bind(this);
  }

  onClickActionButton () {
    if (this.state.auth_action === 0) {
      this.setState({
        auth_action: 1
      });
    } else {
      this.setState({
        auth_action: 0
      });
    }
  }

  onDropdownClick () {
    this.setState({
      showDropdownLIst: !this.state.showDropdownLIst
    });
  }

  onClickDropdownItemClick (index) {
    this.setState({
      selected_dropdown_item_index: index,
      showDropdownLIst: false
    });
  }

  onClickCloseModal() {
    this.props.hideModal();
  }

  render() {
    // Define Modal Display Class from modal show store value
    const modal_class = this.props.modal_show ? "show-modal" : "hide-modal";

    // Countries Place holder for temp
    const countries = [
      {
        code: 'en',
        name: 'England'
      },
      {
        code: 'fr',
        name: 'France'
      },
      {
        code: 'de',
        name: 'Germany'
      }
    ];


    return(
      <div className={this.state.auth_action === 0 ? `authform-wrapper register-form ${modal_class}` : `authform-wrapper login-form ${modal_class}`} >
        <div className="back-board">
          <div className="close-button" onClick={() => this.onClickCloseModal()}></div>
          <div className="form-side">
            <div className="form-wrapper">
              <h1 className="title">{this.state.auth_action === 0 ? "Register" : "Sign In"}</h1>
              <div className="social-buttons">
                <div className="row">
                  <div className="col-12">
                    <SocialAuthButton social_type="google" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <SocialAuthButton social_type="discord" />
                  </div>
                  <br />
                  <div className="col-6">
                    <SocialAuthButton social_type="twitch" />
                  </div>
                </div>
              </div>
              <div className="form-inputs">
                {
                  this.state.auth_action === 0 ?
                    <div className="row">
                      <div className="divider">o</div>
                      <div className="col-6">
                        <fieldset className="nickname">
                          <input type="text" placeholder=" " className="input-field nickname"  />
                          <label>Nick</label>
                        </fieldset>
                      </div>
                      <div className="col-6">
                          <fieldset className="country-select">
                            <div className="custom-dropdown">
                              <button type="button" className="dropdown-toggle" onClick={this.onDropdownClick} >
                                <img src={"/assets/svg/flags/" + countries[this.state.selected_dropdown_item_index].code + ".svg"} alt="lang-flag" />
                                {countries[this.state.selected_dropdown_item_index].name}
                              </button>
                              <ul className="custom-dropdown-list" style={{display: this.state.showDropdownLIst ? 'block' : 'none'}}>
                                {
                                  countries.map((country, index) => {
                                    return(
                                      <li key={index} className="custom-dropdown-item" onClick={() => this.onClickDropdownItemClick(index)}>
                                        <img src={`/assets/svg/flags/${country.code}.svg`} alt="lang-flag" />
                                        {country.name}
                                      </li>
                                    )
                                  })
                                }
                              </ul>
                            </div>
                          </fieldset>
                      </div>
                    </div>
                    :
                    null
                }
                <fieldset className="email-field">
                  <input type="email" placeholder=" " className="input-field email"  />
                  <label>Email</label>
                </fieldset>
                <fieldset className="password-field">
                  <input type="password" placeholder=" " className="input-field password" />
                  <label>Password</label>
                </fieldset>
              </div>
              <div className="privacy-policy">
                <input type="checkbox" id="privacy_check"/>
                <label htmlFor="privacy_check">
                  Please check the privacy policy, Terms of Service
                </label>
              </div>
              <div className="auth-button">
                <Button3 className="button">
                    {
                      this.state.auth_action === 0 ?
                        "Register"
                        :
                        "Sign In"
                    }
                </Button3>
              </div>
            </div>
          </div>
          <div className="side">
            <img src="/assets/images/logo.png" alt="logo" className="logo" />
            <h4>
              {
                this.state.auth_action === 0 ?
                  "ALEADY HAVE AN ACCOUNT?"
                  :
                  "DON'T HAVE AN ACCOUNT?"
              }
            </h4>
            <p className="description">
              {
                this.state.auth_action === 0 ?
                  "Please Login if you have an account for more actions"
                  :
                  "Please Register if you don't have an account for future actions"
              }
            </p>
            <Button3 onClick={() =>this.onClickActionButton()}>
              {
                this.state.auth_action === 0 ?
                  "Login"
                  :
                  "Register"
              }
            </Button3>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal_show: state.common.modal_show
  }
}

const mapDispatchToProps = {
  hideModal: hideModal
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);