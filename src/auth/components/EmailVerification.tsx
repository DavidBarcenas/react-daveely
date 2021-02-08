import React from 'react';
import { Button } from '@material-ui/core';
import '../views/AuthView/index.scss';

export const EmailVerification: React.FC = () => {
  return (
    <>
      <h2>Verifica tu correo electrónico</h2>
      <p>
        Hola Davee, se ha enviado un correo de verificación a
        <span className="auth_email_verify">davidbarcenasmx@gmail.com</span> una
        vez verificado podrás empezar a usar Daveely.
      </p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/726/726623.svg?token=exp=1612750589~hmac=70c055f5d95749932c4bfefcc3c2fa2c"
        alt=""
        style={{ width: '50px', margin: 'auto', marginBottom: '1.5em' }}
      />
      <Button variant="contained" color="primary" className="auth-form-btn">
        Reenviar Correo
      </Button>
    </>
  );
};

export default EmailVerification;
