import {get} from "@/api/request";

export const getAllCurrencies = () => {
  return get('https://api.nomics.com/v1/currencies/ticker?ids=BTC,ETH,XRP,ADA,DOGE,BCH,LTC,XLM,TRX,XMR&&interval=1d')
};

