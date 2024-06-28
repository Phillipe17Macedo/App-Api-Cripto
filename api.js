// api.js
import axios from 'axios';

const coinMarketCapUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
const coinMarketCapApiKey = 'e471b04e-c9eb-4d0a-9731-b0a0ea204af2';

const getCryptoData = async () => {
  try {
    // Faz a chamada para a API do CoinMarketCap para obter os dados financeiros das criptomoedas
    const responseMarketCap = await axios.get(coinMarketCapUrl, {
      headers: {
        'X-CMC_PRO_API_KEY': coinMarketCapApiKey,
        'Accept': 'application/json',
      }
    });

    console.log('Response from CoinMarketCap:', responseMarketCap.data);

    // Retorna apenas os dados financeiros das criptomoedas
    const cryptoData = responseMarketCap.data.data.map((crypto) => {
      return {
        id: crypto.id,
        name: crypto.name,
        symbol: crypto.symbol,
        price: crypto.quote.USD.price.toFixed(2),
        change: crypto.quote.USD.percent_change_24h.toFixed(2),
      };
    });

    console.log('Crypto data:', cryptoData);

    return cryptoData;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return null;
  }
};

export default getCryptoData;
