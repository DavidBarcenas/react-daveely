import React from 'react';
import SocialButtons from './SocialButtons';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp } from '@material-ui/icons';
import {
  LOG_IN_BTN,
  LOG_IN_COPY,
  LOG_IN_FORGOT_PSSW,
  LOG_IN_WELCOME,
} from '../constants';

const LoginForm: React.FC = () => {
  return (
    <>
      <p className="auth-welcome">{LOG_IN_WELCOME}</p>
      <p className="auth-copy">{LOG_IN_COPY}</p>
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
        <span className="auth-form-forgot">{LOG_IN_FORGOT_PSSW}</span>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="auth-form-btn"
        >
          {LOG_IN_BTN}
        </Button>
      </form>

      <SocialButtons />
    </>
  );
};

export default LoginForm;
