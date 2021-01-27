import React from 'react';
import logoImg from '../../assets/img/logo.svg';
import './Auth.scss';

export const Auth: React.FC = () => {
  return (
    <section className="auth">
      <div className="auth-login flex-center">
        <div className="auth-login-wrap">
          <img src={logoImg} alt="daveely" className="login-logo" />
          <h1 className="login-logo-text">Daveely.</h1>
        </div>
      </div>
      <div className="auth-bg"></div>
    </section>
  );
};

export default Auth;
