import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';
import SocialButtons from '../components/SocialButtons';
import logoImg from '../../assets/img/logo.svg';
import './Auth.scss';

export const Auth: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="auth">
      <div className="auth-login flex-center">
        <div className="auth-login-wrap">
          <img src={logoImg} alt="daveely" className="auth-logo" />
          <h1 className="auth-logo-text">Daveely.</h1>
          {showLogin ? <Login /> : <Register />}
          {showLogin ? (
            <p className="auth-login-register">
              ¿No tienes una cuenta?
              <span onClick={() => setShowLogin(false)}>Registrate</span>
            </p>
          ) : (
            <p className="auth-login-register auth-register-text">
              ¿Ya tienes una cuenta?
              <span onClick={() => setShowLogin(true)}>Ingresar</span>
            </p>
          )}
        </div>
      </div>
      <div className="auth-bg"></div>
    </section>
  );
};

export default Auth;
