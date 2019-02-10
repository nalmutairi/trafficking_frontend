import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  loginTextSection: {
    width: "100%",
    height: "30%"
  },

  removeButton: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  inputText: {
    marginLeft: "20%",
    width: "60%"
  },

  loginButton: {
    backgroundColor: "blue",
    color: "white"
  },

  button: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    shadowColor: "black",
    shadowOffset: { height: 2 },
    shadowOpacity: 0.3
  }
});

export default styles;
