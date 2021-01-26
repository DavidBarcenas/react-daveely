import React from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp } from '@material-ui/icons';
import logo from '../../../assets/img/logo.svg';
import google from '../../../assets/img/google.svg';
import twitter from '../../../assets/img/twitter.svg';
import github from '../../../assets/img/github.svg';
import './login.scss';

const Login: React.FC = () => {
  return (
    <section className="login">
      <div className="login-container flex-center">
        <div className="login-wrap">
          <img src={logo} alt="daveely" className="login-logo" />
          <h1 className="login-title">Daveely.</h1>
          <h2 className="login-welcome">¡Bienvenido de nuevo!</h2>
          <p className="login-copy">
            Para seguir planeando, administrando y creando metas, ingresa con
            tus datos de acceso.
          </p>
          <form className="login-form">
            <TextField
              type="text"
              variant="outlined"
              placeholder="Correo electrónico"
              className="login-form-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailSharp />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type="password"
              variant="outlined"
              placeholder="Contraseña"
              className="login-form-input"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockSharp />
                  </InputAdornment>
                ),
              }}
            />
            <span className="login-form-forgot">¿Olvidaste tu contraseña?</span>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="login-form-btn"
            >
              Ingresar
            </Button>
          </form>

          <span className="login-social-text">o puedes ingresar con</span>
          <div className="login-social">
            <Button variant="outlined">
              <img src={google} alt="Ingresar con google" />
            </Button>
            <Button variant="outlined">
              <img src={twitter} alt="Ingresar con twitter" />
            </Button>
            <Button variant="outlined">
              <img src={github} alt="Ingresar con github" />
            </Button>
          </div>
          <p className="register-text">
            ¿No tienes una cuenta? <span>Registrate</span>
          </p>
        </div>
      </div>
      <div className="login-bg "></div>
    </section>
  );
};

export default Login;
