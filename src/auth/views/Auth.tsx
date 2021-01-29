import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import logoImg from '../../assets/img/logo.svg';
import {
  HAS_AN_ACCOUNT,
  LOG_IN,
  NOT_ACCOUNT,
  SIGN_IN,
  TITLE,
} from '../constants';
import './Auth.scss';

export const Auth: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="auth">
      <div className="auth-login flex-center">
        <div className="auth-login-wrap">
          <img src={logoImg} alt="daveely" className="auth-logo" />
          <h1 className="auth-logo-text">{TITLE}</h1>
          {showLogin ? <Login /> : <Register />}
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

export default Auth;
