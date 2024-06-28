import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native';
import { Appbar, Card } from 'react-native-paper';
import getCryptoData from './api';
import { styles } from './Styles/styles';

const App = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData();
      setCryptoData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <Card style={styles.cryptoContainer}>
      <Card.Content style={styles.cryptoContent}>
        <Image
          source={{ uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png` }}
          style={styles.cryptoLogo}
        />
        <View style={styles.cryptoInfo}>
          <Text style={styles.cryptoName}>{item.name}</Text>
          <Text style={styles.cryptoPrice}>Preço: ${item.price}</Text>
          <Text style={styles.cryptoChange}>Variação (24h): {item.change}%</Text>
        </View>
      </Card.Content>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#84B026" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Crypto Tracker" />
      </Appbar.Header>
      <FlatList
        data={cryptoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollViewContent}
      />
    </View>
  );
};

export default App;