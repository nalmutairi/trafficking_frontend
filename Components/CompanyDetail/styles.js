import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "auto"
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
  },
  myImage: {
    width: Dimensions.get("window").width * 0.95,
    height: 400,
    borderRadius: 20,
    margin: 10
  },
  description: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "auto"
  }
});

export default styles;
