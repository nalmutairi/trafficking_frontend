import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ecf0f1"
  },
  largeLogo: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  smallLogo: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  paragraph: {
    margin: 24,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e"
  }
});

export default styles;
