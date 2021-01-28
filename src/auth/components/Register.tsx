import React from 'react';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp, Person } from '@material-ui/icons';

export const Register: React.FC = () => {
  return (
    <div className="auth-wrap">
      <p className="auth-welcome">¡Hola amigo!</p>
      <p className="auth-copy">
        Ingresa tus datos personales y comienza tu viaje con nosotros.
      </p>

      <form className="auth-form">
        <TextField
          type="text"
          variant="outlined"
          placeholder="Nombre"
          className="auth-form-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
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
          className="auth-form-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockSharp />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type="password"
          variant="outlined"
          placeholder="Repetir Contraseña"
          className="auth-form-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockSharp />
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="auth-form-btn"
        >
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default Register;
