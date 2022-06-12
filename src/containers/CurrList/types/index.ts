interface IExchangeUSD {
  USD: number;
}

interface IExchangeRUB {
  RUB: number;
}

interface IExchangeCommon extends IExchangeRUB, IExchangeUSD {}

export interface ICurrState {
  id: string;
  shortName: string;
  fullName: string;
  icon: string;
  exchange: IExchangeCommon;
}
