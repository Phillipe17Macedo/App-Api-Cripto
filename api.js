// api.js
import axios from 'axios';

const coinMarketCapUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const coinMarketCapApiKey = 'e471b04e-c9eb-4d0a-9731-b0a0ea204af2';

const getCryptoData = async () => {
  try {
    const responseMarketCap = await axios.get(coinMarketCapUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': coinMarketCapApiKey,
        'Accept': 'application/json',
      }
    });

    const cryptoData = responseMarketCap.data.data.map((crypto) => ({
      id: crypto.id,
      name: crypto.name,
      symbol: crypto.symbol,
      price: crypto.quote.USD.price.toFixed(2),
      change: crypto.quote.USD.percent_change_24h.toFixed(2),
      slug: crypto.slug,
    }));

    return cryptoData;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
};

const getHistoricalData = async (cryptoId) => {
  try {
    const responseHistorical = await axios.get(`https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart`, {
      params: {
        vs_currency: 'usd',
        days: '30', // Buscar dados dos últimos 30 dias
      }
    });

    const historicalData = responseHistorical.data.prices.map((price) => ({
      timestamp: price[0],
      price: price[1],
    }));

    return historicalData;
  } catch (error) {
    console.error('Erro ao buscar dados históricos:', error);
    return [];
  }
};

export { getCryptoData, getHistoricalData };