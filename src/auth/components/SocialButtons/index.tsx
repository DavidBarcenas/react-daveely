import React from 'react';
import { Button } from '@material-ui/core';
import googleIcon from '../../../assets/img/google.svg';
import twitterIcon from '../../../assets/img/twitter.svg';
import githubIcon from '../../../assets/img/github.svg';
import './SocialButtons.scss';

export const SocialButtons: React.FC = () => {
  return (
    <div className="social-buttons">
      <span className="social-buttons-text">o puedes ingresar con</span>
      <div className="social-buttons-wrap">
        <Button variant="outlined">
          <img src={googleIcon} alt="Ingresar con google" />
        </Button>
        <Button variant="outlined">
          <img src={twitterIcon} alt="Ingresar con twitter" />
        </Button>
        <Button variant="outlined">
          <img src={githubIcon} alt="Ingresar con github" />
        </Button>
      </div>
      <p className="register-text">
        ¿No tienes una cuenta? <span>Registrate</span>
      </p>
    </div>
  );
};

export default SocialButtons;
