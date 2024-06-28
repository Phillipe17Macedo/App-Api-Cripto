import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: "#3D3D3D",
    alignItems: "center",
    paddingTop: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#84B026",
  },
  cryptoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#217373",
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
