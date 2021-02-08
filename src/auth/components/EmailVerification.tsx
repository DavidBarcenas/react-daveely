import React from 'react';
import { Button } from '@material-ui/core';
import '../views/AuthView/index.scss';

export const EmailVerification: React.FC = () => {
  return (
    <>
      <h2 className="auth-welcome">Verifica tu correo electrónico</h2>
      <p className="auth_email_verify">
        Hola Davee, se ha enviado un correo de verificación a
        <span>davidbarcenasmx@gmail.com</span> una vez verificado podrás empezar
        a usar Daveely.
      </p>

      <Button variant="contained" color="primary" className="auth-form-btn">
        Reenviar Correo
      </Button>
    </>
  );
};

export default EmailVerification;
