interface IExchangeUSD {
  USD: number;
}

interface IExchangeRUB {
  RUB: number;
}

interface IExchangeEUR {
  EUR: number;
}

export interface IExchangeFiatCommon extends IExchangeRUB, IExchangeUSD, IExchangeEUR {
  [key: string]: number;
}

interface IExchangeBTC {
  BTC: IExchangeFiatCommon;
}

interface IExchangeETH {
  ETH: IExchangeFiatCommon;
}

interface IExchangeSOL {
  SOL: IExchangeFiatCommon;
}

interface IExchangeUSDT {
  USDT: IExchangeFiatCommon;
}

export interface IExchangeCryptoCommon
  extends IExchangeBTC,
    IExchangeETH,
    IExchangeSOL,
    IExchangeUSDT {
  [key: string]: IExchangeFiatCommon;
}

export interface ICurrState {
  id: string;
  shortName: string;
  fullName: string;
  icon: string;
  exchange: IExchangeFiatCommon;
}
