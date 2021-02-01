import React, { useState } from 'react';
import { useForm } from '../../shared/hooks/useForm';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp, Person } from '@material-ui/icons';
import { REGISTER_BTN, REGISTER_COPY, REGISTER_WELCOME } from '../constants';
import {
  emailValidation,
  nameValidation,
  pssdRepeatValidation,
  pssdValidation,
} from '../utils/validators';

export const Register: React.FC = () => {
  const [formData, handleFormChange, reset] = useForm({
    name: '',
    email: '',
    pssd: '',
    pssdRepeat: '',
  });

  const [formError, setFormError] = useState({
    name: {
      error: false,
      message: '',
    },
    email: {
      error: false,
      message: '',
    },
    pssd: {
      error: false,
      message: '',
    },
    pssdRepeat: {
      error: false,
      message: '',
    },
  });

  const validateForm = (): boolean => {
    const nameError = nameValidation(formData.name);
    const emailError = emailValidation(formData.email);
    const pssdError = pssdValidation(formData.pssd);
    const pssdRepeatError = pssdRepeatValidation(
      formData.pssd,
      formData.pssdRepeat
    );

    setFormError({
      name: {
        error: nameError === '' ? false : true,
        message: nameError,
      },
      email: {
        error: emailError === '' ? false : true,
        message: emailError,
      },
      pssd: {
        error: pssdError === '' ? false : true,
        message: emailError,
      },
      pssdRepeat: {
        error: pssdRepeatError === '' ? false : true,
        message: pssdRepeatError,
      },
    });
    // const validForm = Object.values(formError).filter((err) => err !== '');
    // return validForm.length === 0;
    return true;
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    validateForm();
    console.log('El form valid ', formError.name.message !== '');
  };

  return (
    <div className="auth-wrap">
      <p className="auth-welcome">{REGISTER_WELCOME}</p>
      <p className="auth-copy">{REGISTER_COPY}</p>

      <form
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
          type="password"
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
          }}
        />
        <TextField
          type="password"
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
