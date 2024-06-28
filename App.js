// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import getCryptoData from './api';
import { styles } from './Styles/styles';

const App = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData();
      setCryptoData(data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.heading}>Dados das Criptomoedas:</Text>
        {cryptoData && cryptoData.map((crypto, index) => (
          <View key={index} style={styles.cryptoContainer}>
            <Image
              source={{ uri: crypto.image }}
              style={styles.cryptoLogo}
            />
            <View style={styles.cryptoInfo}>
              <Text style={styles.cryptoName}>{crypto.name}</Text>
              <Text style={styles.cryptoPrice}>Preço: ${crypto.price}</Text>
              <Text style={styles.cryptoChange}>Variação (24h): {crypto.change}%</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default App;
