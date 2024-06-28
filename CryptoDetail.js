import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const CryptoDetail = ({ crypto }) => {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["1h", "24h", "7d", "30d", "1y"],
    datasets: [
      {
        data: [
          crypto.price,
          crypto.price * (1 + crypto.change / 100),
          // Adicione mais dados aqui
        ],
      },
    ],
  };

  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  };

  return (
    <View>
      <Text>{crypto.name}</Text>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default CryptoDetail;