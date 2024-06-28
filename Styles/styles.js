import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
    paddingTop: 40,
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
    textAlign: "center",
  },
  cryptoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#217373",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
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
