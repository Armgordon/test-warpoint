import { API_KEY, CRYPTO_CUR, FIAT_CUR } from '../const/constants';

export const fetchExchangeRate = () => {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${CRYPTO_CUR.toString()}&tsyms=${FIAT_CUR.toString()}&api_key=${API_KEY}`
  ).then((resp) => {
    return resp.json();
  });
};

type CurrInfo = {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
  };
  RAW: {
    [key: string]: {
      PRICE: number;
    };
  };
};

export const fetchCurrencyList = (currencyName: string) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currencyName}&api_key=${API_KEY}`
  )
    .then((resp) => {
      return resp.json();
    })
    .then((result) => {
      return result.Data.map((currency: CurrInfo) => {
        return {
          id: currency.CoinInfo.Id,
          shortName: currency.CoinInfo.Name,
          fullName: currency.CoinInfo.FullName,
          exchange: {
            [currencyName]: Math.round(currency.RAW[currencyName].PRICE * 1000) / 1000,
          },
        };
      });
    });
};
