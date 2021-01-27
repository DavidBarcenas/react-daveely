import React from 'react';
import Login from '../components/Login';
import SocialButtons from '../components/SocialButtons';
import logoImg from '../../assets/img/logo.svg';
import './Auth.scss';

export const Auth: React.FC = () => {
  return (
    <section className="auth">
      <div className="auth-login flex-center">
        <div className="auth-login-wrap">
          <img src={logoImg} alt="daveely" className="auth-logo" />
          <h1 className="auth-logo-text">Daveely.</h1>
          <Login />
          <SocialButtons />
        </div>
      </div>
      <div className="auth-bg"></div>
    </section>
  );
};

export default Auth;
