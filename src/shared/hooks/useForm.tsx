import { useState } from 'react';

export const useForm: UseFormProps = (initialState: IUseFormValues = {}) => {
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

interface IUseFormValues {
  [key: string]: string;
}

type UseFormProps = (initialState: {}) => [
  IUseFormValues,
  ({ target }: IHandleFormChange) => void,
  () => void
];
