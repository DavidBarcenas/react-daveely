import React, { useState } from 'react';
import { useForm } from '../../shared/hooks/useForm';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { EmailSharp, LockSharp, Person } from '@material-ui/icons';
import { REGISTER_BTN, REGISTER_COPY, REGISTER_WELCOME } from '../constants';
import { emailValidation, nameValidation } from '../utils/validators';

interface prueba {
  name: string;
  email: string;
  pssd: string;
  pssdRepeat: string;
}

export const Register: React.FC = () => {
  const [formData, handleFormChange, reset] = useForm({
    name: '',
    email: '',
    pssd: '',
    pssdRepeat: '',
  });
  const [formError, setformError] = useState({
    name: false,
    email: true,
    pssd: true,
    pssdRepeat: true,
  });

  const validateForm = (): boolean => {
    setformError({
      ...formError,
      name: nameValidation(formData.name) ? true : false,
    });
    const validForm = Object.values(formError).includes(false);
    return !validForm;
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log('El form valid ', validateForm());
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
          error={formError.name}
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
