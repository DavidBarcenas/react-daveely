import React, { useState } from 'react';
import LoginView from '../LoginView';
import RegisterView from '../RegisterView';
import logoImg from '../../../assets/img/logo.svg';
import {
  HAS_AN_ACCOUNT,
  LOG_IN,
  NOT_ACCOUNT,
  SIGN_IN,
  TITLE,
} from '../../constants';
import './index.scss';

export const AuthView: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="auth">
      <div className="auth-login flex-center">
        <div className="auth-login-wrap">
          <img src={logoImg} alt="daveely" className="auth-logo" />
          <h1 className="auth-logo-text">{TITLE}</h1>
          <div className="auth-wrap">
            {showLogin ? <LoginView /> : <RegisterView />}
          </div>
          {showLogin ? (
            <p className="auth-login-register">
              {NOT_ACCOUNT}
              <span onClick={() => setShowLogin(false)}>{SIGN_IN}</span>
            </p>
          ) : (
            <p className="auth-login-register auth-register-text">
              {HAS_AN_ACCOUNT}
              <span onClick={() => setShowLogin(true)}>{LOG_IN}</span>
            </p>
          )}
        </div>
      </div>
      <div className="auth-bg"></div>
    </section>
  );
};

export default AuthView;
