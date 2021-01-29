import React from 'react';
import { Button } from '@material-ui/core';
import {
  AUTH_SOCIAL,
  AUTH_SOCIAL_GITHUB,
  AUTH_SOCIAL_GOOGLE,
  AUTH_SOCIAL_TWITTER,
} from '../../constants';
import googleIcon from '../../../assets/img/google.svg';
import twitterIcon from '../../../assets/img/twitter.svg';
import githubIcon from '../../../assets/img/github.svg';
import './SocialButtons.scss';

export const SocialButtons: React.FC = () => {
  return (
    <div className="social-buttons">
      <span className="social-buttons-text">{AUTH_SOCIAL}</span>
      <div className="social-buttons-wrap">
        <Button variant="outlined" title={AUTH_SOCIAL_GOOGLE}>
          <img src={googleIcon} alt={AUTH_SOCIAL_GOOGLE} />
        </Button>
        <Button variant="outlined" title={AUTH_SOCIAL_TWITTER}>
          <img src={twitterIcon} alt={AUTH_SOCIAL_TWITTER} />
        </Button>
        <Button variant="outlined" title={AUTH_SOCIAL_TWITTER}>
          <img src={githubIcon} alt={AUTH_SOCIAL_GITHUB} />
        </Button>
      </div>
    </div>
  );
};

export default SocialButtons;
