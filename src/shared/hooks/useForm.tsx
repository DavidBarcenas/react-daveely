import { useState } from 'react';

export const useForm: TUseForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (): void => {
    setValues(initialState);
  };

  const handleFormChange = ({ target }: IHandleFormChange): void => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return [values, handleFormChange, reset];
};

interface IHandleFormChange {
  target: any;
}

type TUseForm = (initialState: {}) => [
  {},
  ({ target }: IHandleFormChange) => void,
  () => any
];
