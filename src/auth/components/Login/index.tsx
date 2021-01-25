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
      <div className="login-container">
        <img src={logo} alt="daveely" />
        <h1>Daveely.</h1>
        <h2>¡Bienvenido de nuevo!</h2>
        <p>Sigue planeando, administrando y creando metas. </p>
        <p>Ingresa con tus datos de acceso.</p>
        <form>
          <TextField
            type="text"
            label="Correo electrónico"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailSharp />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            label="Contraseña"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LockSharp />
                </InputAdornment>
              ),
            }}
          />
          <span>¿Olvidaste tu contraseña?</span>
          <Button variant="contained">Ingresar</Button>
        </form>
        <span>O puedes ingresar con:</span>
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
        <p>¿No tienes una cuenta? Registrate</p>
      </div>
      <div className="login-bg"></div>
    </section>
  );
};

export default Login;
