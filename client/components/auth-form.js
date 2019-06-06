import React, {Component} from 'react'
import {connect} from 'react-redux'
import {auth} from '../store'
import LoginForm from './authformComponents/loginForm'
import SignupForm from './authformComponents/signupForm'
import SocialMedia from './authformComponents/socialMedia'

class AuthForm extends Component {
  animate = evt => {
    if (evt.target.id === 'signup_btn') {
      main.style.transform = 'translate(-146%, -50%)'
      main.style.transition = '1s'

      login.style.transform = 'translate(-180%, -50%)'
      login.style.visibility = 'hidden'
      login.style.transition = '0s'

      signup.style.transform = 'translate(-230%, -50%)'
      signup.style.visibility = 'visible'
      signup.style.transition = '1.3s'

      linkSocialMedia.style.transform = 'translate(145%, -50%)'
      linkSocialMedia.style.transition = '1.3s'

      star.style.transform = 'translate(980%, 1%)'
      star.style.transition = '2.3s'
    } else {
      main.style.transform = 'translate(-50%, -50%)'
      main.style.transition = '1s'

      signup.style.transform = 'translate(-80%, -50%)'
      signup.style.visibility = 'hidden'
      signup.style.transition = '0s'

      login.style.visibility = 'visible'
      login.style.transform = 'translate(-45%, -50%)'
      login.style.transition = '1.3s'

      linkSocialMedia.style.transform = 'translate(1%, -50%)'
      linkSocialMedia.style.transition = '1.3s'

      star.style.transform = 'translate(1%, 1%)'
      star.style.transition = '2.3s'
    }
  }
  handleSubmit = evt => {
    evt.preventDefault()
    const formName = evt.target.name
    if (formName === 'login') {
      const userInfoLogin = {}
      userInfoLogin.email = evt.target.email.value
      userInfoLogin.password = evt.target.password.value
      this.props.authDispatch(userInfoLogin, formName)
    } else {
      const userInfoSignup = {}
      userInfoSignup.email = evt.target.email.value
      userInfoSignup.password = evt.target.password.value
      userInfoSignup.userName = evt.target.userName.value
      this.props.authDispatch(userInfoSignup, formName)
    }
  }
  render() {
    const {error} = this.props
    return (
      <div className="shiftDown" id="box">
        <div className="container">
          <div id="main" />
          <LoginForm
            error={error}
            name="login"
            handleSubmit={this.handleSubmit}
            displayName="LOGIN"
          />

          <SignupForm
            error={error}
            name="signup"
            handleSubmit={this.handleSubmit}
            displayName="SIGN UP"
          />
          <div id="login_msg">Have an account?</div>
          <div id="signup_msg">Don't have an account?</div>

          <button type="submit" onClick={this.animate} id="login_btn">
            LOGIN
          </button>
          <button type="submit" onClick={this.animate} id="signup_btn">
            SIGN UP
          </button>
        </div>
        <SocialMedia />
        <img
          id="star"
          className="star"
          width="80"
          height="80"
          src="assets/star2.png"
        />
      </div>
    )
  }
}

const mapState = state => ({
  error: state.user.error
})

const mapDispatch = dispatch => ({
  authDispatch: (userInfo, formName) => dispatch(auth(userInfo, formName))
})

export default connect(mapState, mapDispatch)(AuthForm)
