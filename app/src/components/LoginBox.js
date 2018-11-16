import React, { Component } from 'react';
import './../styles/LoginBox.css';

class LoginBox extends Component {
  render() {
    return (
      <div className="login-box" id="login-box">
          <header id="login-header">
              <span className="title">Welcome to Boom <span role="img" aria-label="bomb emoji" class="emoji">💣</span></span>
          </header>
          <div id="login-body">
              <div id="form-wrapper">
                <form action="" id="login-form" class="pull-left">
                    <div className="login-form-row">
                        <label htmlFor="login-form-input-username" id="login-form-label-username"><span role="img" aria-label="user emoji" class="emoji">👤</span>  Username</label>
                        <input type="text" id="login-form-input-username"/>
                    </div>
                    <div className="login-form-row">
                        <label htmlFor="login-form-input-password" id="login-form-label-password">🔐 Password</label>
                        <input type="text" id="login-form-input-password"/>
                    </div>
                    <div className="login-form-row">
                        <div className="pull-left">
                            <button className="cancel" id="login-form-button-cancel">Erase</button>
                        </div>
                        <div className="pull-right">
                            <button className="submit" id="login-form-button-submit">Let's go</button>
                        </div>
                    </div>
                </form>
                <div id="login-profile-image-wrapper" class="pull-right">
                    <img src={require("./../assets/unknown-user.png")} alt="unknown user" id="login-profile-image"/>
                </div>
              </div>
          </div>
          <footer id="login-footer">
              <p>
              Created with <span role="img" aria-label="heart emoji" class="heart emoji">❤️</span> by <span class="bold"><a href="https://www.linkedin.com/in/jorel-amthor-3a4308101/" target="_blank" rel="noopener noreferrer">Jorel Amthor</a></span>
              </p>
          </footer>
      </div>
    );
  }
}

export default LoginBox;
