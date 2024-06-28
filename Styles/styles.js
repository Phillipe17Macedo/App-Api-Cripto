import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3D3D3D",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#84B026",
  },
  cryptoContainer: {
    margin: 10,
    backgroundColor: "#217373",
  },
  cryptoContent: {
    flexDirection: "row",
    alignItems: "center",
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
    fontWeight: "bold",
    color: "#fff",
  },
  cryptoPrice: {
    fontSize: 16,
    color: "#fff",
  },
  cryptoChange: {
    fontSize: 16,
    color: "#fff",
  },
});