import React, { FC, useState } from 'react';
import { Box, Typography } from '@mui/material';
import CurrencyChanger from '../../components/CurrencyChanger/CurrencyChanger';
import { IExchangeCryptoCommon } from '../CurrList/types';

interface IExchangeState {
  exchangeIndexes: IExchangeCryptoCommon;
}

// interface ICurrList {
//   cryptoCur: string[];
//   fiatCur: string[];
// }
let fiatCur = [] as string[];

const Exchanger: FC<IExchangeState> = ({ exchangeIndexes }) => {
  const [cryptoAmount, setCryptoAmount] = useState<number>(0);
  const [cryptoCurrency, setCryptoCurrency] = useState<string>('BTC');
  const [fiatAmount, setFiatAmount] = useState<number>(0);
  const [fiatCurrency, setFiatCurrency] = useState<string>('USD');

  const cryptoCur = Object.keys(exchangeIndexes);
  if (Object.keys(exchangeIndexes).length !== 0) {
    fiatCur = Object.keys(exchangeIndexes[cryptoCur[0]]);
  }

  const changeCryptoAmountHandler = (changedCryptoAmount: number): void => {
    setCryptoAmount(changedCryptoAmount);
    setFiatAmount(changedCryptoAmount * exchangeIndexes[cryptoCurrency][fiatCurrency]);
  };

  const changeFiatAmountHandler = (changedFiatAmount: number): void => {
    setFiatAmount(changedFiatAmount);
    setCryptoAmount(changedFiatAmount / exchangeIndexes[cryptoCurrency][fiatCurrency]);
  };

  const changeCryptoCurrencyHandler = (changedCryptoCurrency: string) => {
    // Направление обмена Crypto<->Fiat
    setCryptoAmount(fiatAmount / exchangeIndexes[changedCryptoCurrency][fiatCurrency]);
    // Направление обмена Crypto->Fiat
    // setFiatAmount(cryptoAmount * exchangeIndexes[changedCryptoCurrency][fiatCurrency]);
    setCryptoCurrency(changedCryptoCurrency);
  };
  const changeFiatCurrencyHandler = (changedFiatCurrency: string) => {
    setFiatAmount(cryptoAmount * exchangeIndexes[cryptoCurrency][changedFiatCurrency]);
    setFiatCurrency(changedFiatCurrency);
  };

  return (
    <>
      <Typography variant="h2" component="h1" align={'center'} gutterBottom>
        Конвертер
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-around',
          boxSizing: 'border-box',
        }}
      >
        <CurrencyChanger
          currencyLabel={'Crypto'}
          currencies={cryptoCur}
          amount={cryptoAmount}
          changeAmount={changeCryptoAmountHandler}
          currency={cryptoCurrency}
          changeCurrency={changeCryptoCurrencyHandler}
        />
        <CurrencyChanger
          currencyLabel={'Fiat'}
          currencies={fiatCur}
          amount={fiatAmount}
          changeAmount={changeFiatAmountHandler}
          currency={fiatCurrency}
          changeCurrency={changeFiatCurrencyHandler}
        />
      </Box>
    </>
  );
};

export default Exchanger;
