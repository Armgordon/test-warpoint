import React, { FC, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import HeadNavigator from './components/navigation/HeadNavigator/HeadNavigator';
import Exchanger from './containers/Exchanger/Exchanger';
import CurrencyList from './containers/CurrList/CurrencyList';
import { ICurrState, IExchangeState } from './types';
import { fetchCurrencyList, fetchExchangeRate } from './fetcher/fetcher';

const App: FC = () => {
  const [currListState, setCurrState] = useState<Array<ICurrState>>([]);
  const [exchangeState, setExchangeState] = useState<IExchangeState>({} as IExchangeState);

  const routes = (
    <Routes>
      <Route path="/currlist" element={<CurrencyList currencyList={currListState} />} />
      <Route
        path="/"
        element={
          <Exchanger
            exchangeIndexes={exchangeState.commonState}
            cryptoCur={exchangeState.keyState?.cryptoCur}
            fiatCur={exchangeState.keyState?.fiatCur}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );

  useEffect(() => {
    fetchExchangeRate().then((resultState) => {
      const cryptoCur = Object.keys(resultState);
      const fiatCur = cryptoCur.length !== 0 ? Object.keys(resultState[cryptoCur[0]]) : [];
      setExchangeState({ commonState: resultState, keyState: { cryptoCur, fiatCur } });
    });

    // Ввиду того, что нет прямого API на получение значение по USD и RUB делаем 2 запроса и мержим результат
    const fetchCurrList = async (): Promise<ICurrState[]> => {
      const firstPartOfList = await fetchCurrencyList('USD');
      return await fetchCurrencyList('RUB').then((secondPartOfList) => {
        return firstPartOfList.map((element: ICurrState, index: number) => {
          return {
            ...element,
            exchange: {
              ...element.exchange,
              ...secondPartOfList[index].exchange,
            },
          };
        });
      });
    };
    // ЗаСетим стейт после мержа
    fetchCurrList().then((resultListState) => {
      setCurrState(resultListState);
    });
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        alignItems: 'center',
        p: { xs: '10px', md: '30px' },
        paddingTop: { xs: '30px' },
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
