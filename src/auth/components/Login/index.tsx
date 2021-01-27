import React from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp } from '@material-ui/icons';
import google from '../../../assets/img/google.svg';
import twitter from '../../../assets/img/twitter.svg';
import github from '../../../assets/img/github.svg';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="login">
      <p className="login-welcome">¡Bienvenido de nuevo!</p>
      <p className="login-copy">
        Para seguir planeando, administrando y creando metas, ingresa con tus
        datos de acceso.
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
  );
};

export default Login;
