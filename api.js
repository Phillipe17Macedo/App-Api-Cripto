import axios from 'axios';

const coinMarketCapUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const coinMarketCapApiKey = 'YOUR_API_KEY';

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
    }));

    return cryptoData;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
};

export default getCryptoData;