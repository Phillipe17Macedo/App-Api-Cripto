// App.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import getCryptoData from './api';

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

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#3D3D3D',
    alignItems: 'center',
    paddingTop: 40,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#84B026',
  },
  cryptoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#217373',
    padding: 10,
    borderRadius: 10,
  },
  cryptoLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cryptoInfo: {
    flex: 1,
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cryptoPrice: {
    fontSize: 16,
    color: '#fff',
  },
  cryptoChange: {
    fontSize: 16,
    color: '#fff',
  },
});

export default App;
