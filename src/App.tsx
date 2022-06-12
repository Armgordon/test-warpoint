import React, { FC, useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HeadNavigator from './components/navigation/HeadNavigator/HeadNavigator';
import Exchanger from './containers/Exchanger/Exchanger';
import CurrencyList from './containers/CurrList/CurrencyList';
import { Box, Paper } from '@mui/material';
import { API_KEY, CRYPTO_CUR, FIAT_CUR } from './const/constants';
import { ICurrState, IExchangeCryptoCommon } from './containers/CurrList/types';

const fetchExchangeRate = () => {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${CRYPTO_CUR.join(
      ','
    )}&tsyms=${FIAT_CUR.join(',')}&api_key=${API_KEY}`
  ).then((resp) => {
    return resp.json();
  });
};

const fetchCurrencyList = (currency: string) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=${API_KEY}`
  ).then((resp) => {
    return resp.json();
  });
};

const App: FC = () => {
  const exchangeState = useRef<IExchangeCryptoCommon>({} as IExchangeCryptoCommon);
  const [currState, setCurrState] = useState<Array<ICurrState>>([]);

  const routes = (
    <Routes>
      <Route path="/currlist" element={<CurrencyList currencyList={currState} />} />
      <Route path="/" element={<Exchanger exchangeIndexes={exchangeState.current} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  // Ввиду того, что значения нужны только один раз на входе делам запросы из Апп компонента
  useEffect(() => {
    fetchExchangeRate().then((result) => {
      exchangeState.current = result;
    });

    fetchCurrencyList('USD')
      .then((result) => {
        const fetchedState = result.Data.map((currency: any) => {
          return {
            id: currency.CoinInfo.Id,
            shortName: currency.CoinInfo.Name,
            fullName: currency.CoinInfo.FullName,
            exchange: {
              ['USD']: Math.round(currency.RAW['USD'].PRICE * 1000) / 1000,
            },
          };
        });
        return fetchedState;
      })
      .then((cratedObjectsArray) => {
        fetchCurrencyList('RUB').then((result) => {
          const fetchedState = result.Data.map((currency: any) => {
            return {
              id: currency.CoinInfo.Id,
              shortName: currency.CoinInfo.Name,
              fullName: currency.CoinInfo.FullName,
              exchange: {
                ['RUB']: Math.round(currency.RAW['RUB'].PRICE * 1000) / 1000,
              },
            };
          });
          const resultedState = cratedObjectsArray.map((element: any, index: number) => {
            return {
              ...element,
              exchange: {
                ...element.exchange,
                ...fetchedState[index].exchange,
              },
            };
          });

          setCurrState(resultedState);
        });
      });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        alignItems: 'center',
        p: { xs: '10px', md: '30px' },
        overflowX: 'hidden',
        height: '100vh',
        boxSizing: 'border-box',
        backgroundColor: 'background.default',
      }}
    >
      <HeadNavigator />
      <Paper
        sx={{
          boxSizing: 'border-box',
          p: { xs: '20px', md: '40px' },
          margin: '40px 10px',
          width: '100%',
          maxWidth: '1200px',
        }}
        elevation={3}
      >
        {routes}
      </Paper>
    </Box>
  );
};

export default App;
