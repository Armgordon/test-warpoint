import React, { FC } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

interface ICurSelectProps {
  label: string;
  currencies: string[];
  selectedCurrency: string;
  currencySetter: (cur: string) => void;
}

const CurrencySelect: FC<ICurSelectProps> = ({
  label,
  currencies,
  selectedCurrency,
  currencySetter,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      {currencies.length ? (
        <Select
          value={selectedCurrency}
          label={label}
          onChange={(event) => currencySetter(event.target.value)}
        >
          {currencies.map((curr, index) => {
            return (
              <MenuItem key={index} value={curr}>
                {curr}
              </MenuItem>
            );
          })}
        </Select>
      ) : (
        'loading...'
      )}
    </FormControl>
  );
};

export default CurrencySelect;
