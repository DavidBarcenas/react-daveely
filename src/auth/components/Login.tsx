import React from 'react';
import SocialButtons from './SocialButtons';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp } from '@material-ui/icons';

const Login: React.FC = () => {
  return (
    <div className="auth-wrap">
      <p className="auth-welcome">¡Bienvenido de nuevo!</p>
      <p className="auth-copy">
        Para seguir planeando, administrando y creando metas, ingresa con tus
        datos de acceso.
      </p>
      <form className="auth-form">
        <TextField
          type="email"
          variant="outlined"
          placeholder="Correo electrónico"
          className="auth-form-input"
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
          className="auth-form-input-psswd"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockSharp />
              </InputAdornment>
            ),
          }}
        />
        <span className="auth-form-forgot">¿Olvidaste tu contraseña?</span>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="auth-form-btn"
        >
          Ingresar
        </Button>
      </form>

      <SocialButtons />
    </div>
  );
};

export default Login;
