import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Button,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { getCryptoData } from "./api";
import CryptoDetail from "./CryptoDetail";
import { styles } from "./Styles/styles";

import { LogLevel, OneSignal } from "react-native-onesignal";
import Constants from "expo-constants";

const App = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState(null);

  const fetchData = async () => {
    const data = await getCryptoData();
    setCryptoData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    // Remove this method to stop OneSignal Debugging
    OneSignal.Debug.setLogLevel(LogLevel.Verbose);

    // OneSignal Initialization
    OneSignal.initialize("45d50449-03b9-463e-a6a7-e6c1258cfd7d");

    // requestPermission will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
    OneSignal.Notifications.requestPermission(true);

    // Method for listening for notification clicks
    OneSignal.Notifications.addEventListener("click", (event) => {
      console.log("OneSignal: notification clicked:", event);
    });
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchData();
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.cryptoContainer}
      onPress={() => {
        setSelectedCrypto(item);
        setModalVisible(true);
      }}
    >
      <Image
        source={{
          uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
        }}
        style={styles.cryptoLogo}
      />
      <View style={styles.cryptoInfo}>
        <Text style={styles.cryptoName}>{item.name}</Text>
        <Text style={styles.cryptoPrice}>Preço: ${item.price}</Text>
        <Text style={styles.cryptoChange}>Variação (24h): {item.change}%</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#84B026" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.heading}>Crypto Tracker</Text>
        <FlatList
          data={cryptoData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
        {selectedCrypto && (
          <Modal
            visible={modalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={modalStyles.modalOverlay}>
              <View style={modalStyles.modalContainer}>
                <CryptoDetail crypto={selectedCrypto} />
                <Button title="Fechar" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>
        )}
      </View>
    </SafeAreaProvider>
  );
};

const modalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default App;
