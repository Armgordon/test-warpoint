import React, { FC } from 'react';
import TextField from '@mui/material/TextField';

interface ICurInputProps {
  amount: number;
  amountSetter: (amount: number) => void;
}

const CurrencyInput: FC<ICurInputProps> = ({ amount, amountSetter }) => {
  const changeInputHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    if (+value.trim() >= 0) {
      amountSetter(parseFloat(event.target.value));
    }
  };
  return (
    <TextField
      placeholder="Введите значение"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      value={amount || ''}
      onChange={changeInputHandler}
    />
  );
};

export default CurrencyInput;
