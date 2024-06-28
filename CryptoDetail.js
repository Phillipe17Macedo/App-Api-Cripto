import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { getHistoricalData } from "./api";

const CryptoDetail = ({ crypto }) => {
  const [historicalData, setHistoricalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    const fetchHistoricalData = async () => {
      const data = await getHistoricalData(crypto.slug); // Use o slug da cripto
      setHistoricalData(data);
      setLoading(false);
    };

    fetchHistoricalData();
  }, [crypto.slug]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#84B026" />
      </View>
    );
  }

  const data = {
    labels: historicalData.map((d) =>
      new Date(d.timestamp).toLocaleDateString()
    ),
    datasets: [
      {
        data: historicalData.map((d) => d.price),
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#1B1F26",
    backgroundGradientFrom: "#282A36",
    backgroundGradientTo: "#9163F2",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#A0CD60",
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{crypto.name}</Text>
      <ScrollView horizontal={true}>
        <LineChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CryptoDetail;
