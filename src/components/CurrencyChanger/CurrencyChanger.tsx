import React, { FC } from 'react';
import Box from '@mui/material/Box';
import CurrencySelect from '../CurrencySelect/CurrencySelect';
import CurrencyInput from '../CurrencyInput/CurrencyInput';

interface ICurrencyProps {
  currencyLabel: string;
  currencies: string[] | undefined;
  amount: number;
  changeAmount: (amount: number) => void;
  currency: string;
  changeCurrency: (cur: string) => void;
}

const CurrencyChanger: FC<ICurrencyProps> = ({
  currencyLabel,
  currencies,
  amount,
  changeAmount,
  currency,
  changeCurrency,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <CurrencyInput amount={amount} amountSetter={changeAmount} />
      {currencies && (
        <CurrencySelect
          label={currencyLabel}
          currencies={currencies}
          selectedCurrency={currency}
          currencySetter={changeCurrency}
        />
      )}
    </Box>
  );
};

export default CurrencyChanger;
