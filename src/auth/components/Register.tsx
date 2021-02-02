import React, { useState } from 'react';
import { useForm } from '../../shared/hooks/useForm';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { REGISTER_BTN, REGISTER_COPY, REGISTER_WELCOME } from '../constants';
import {
  EmailSharp,
  LockSharp,
  Person,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import {
  emailValidation,
  nameValidation,
  pssdRepeatValidation,
  pssdValidation,
} from '../utils/validators';

const formErrorProps = {
  error: false,
  message: '',
};

export const Register: React.FC = () => {
  const [showPssd, setShowPssd] = useState(false);
  const [formData, handleFormChange] = useForm({
    name: '',
    email: '',
    pssd: '',
    pssdRepeat: '',
  });

  const [formError, setFormError] = useState({
    name: formErrorProps,
    email: formErrorProps,
    pssd: formErrorProps,
    pssdRepeat: formErrorProps,
  });

  const validateForm = (): boolean => {
    const nameError: string = nameValidation(formData.name);
    const emailError: string = emailValidation(formData.email);
    const pssdError: string = pssdValidation(formData.pssd);
    const pssdRepeatError: string = pssdRepeatValidation(
      formData.pssd,
      formData.pssdRepeat
    );
    const nameHasError: boolean = nameError !== '';
    const emailHasError: boolean = emailError !== '';
    const pssdHasError: boolean = pssdError !== '';
    const pssdRepeatHasError: boolean = pssdRepeatError !== '';

    setFormError({
      name: {
        error: nameHasError,
        message: nameError,
      },
      email: {
        error: emailHasError,
        message: emailError,
      },
      pssd: {
        error: pssdHasError,
        message: pssdError,
      },
      pssdRepeat: {
        error: pssdRepeatHasError,
        message: pssdRepeatError,
      },
    });

    if (nameHasError || emailHasError || pssdHasError || pssdRepeatHasError) {
      return false;
    }
    return true;
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  return (
    <div className="auth-wrap">
      <p className="auth-welcome">{REGISTER_WELCOME}</p>
      <p className="auth-copy">{REGISTER_COPY}</p>

      <form
        noValidate
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        className="auth-form"
        autoComplete="off"
      >
        <TextField
          type="text"
          name="name"
          variant="outlined"
          placeholder="Nombre"
          className="auth-form-input"
          error={formError.name.error}
          helperText={formError.name.message}
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
          name="email"
          variant="outlined"
          placeholder="Correo electrónico"
          className="auth-form-input"
          error={formError.email.error}
          helperText={formError.email.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailSharp />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type={showPssd ? 'text' : 'password'}
          name="pssd"
          variant="outlined"
          placeholder="Contraseña"
          className="auth-form-input"
          error={formError.pssd.error}
          helperText={formError.pssd.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockSharp />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPssd(!showPssd)}
              >
                {showPssd ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
        <TextField
          type={showPssd ? 'text' : 'password'}
          name="pssdRepeat"
          variant="outlined"
          placeholder="Repetir Contraseña"
          className="auth-form-input"
          error={formError.pssdRepeat.error}
          helperText={formError.pssdRepeat.message}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockSharp />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                onClick={() => setShowPssd(!showPssd)}
              >
                {showPssd ? <VisibilityOff /> : <Visibility />}
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
          {REGISTER_BTN}
        </Button>
      </form>
    </div>
  );
};

export default Register;
