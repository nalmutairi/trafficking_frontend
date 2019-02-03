import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: Dimensions.get("window").width * 0.45,
    height: 150,
    backgroundColor: "#E4EBF3",
    borderWidth: 2,
    borderColor: "#A7A8B1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
    marginLeft: 13.5,
    marginTop: 11,
    marginBottom: 0
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  itemTitle: {
    marginTop: 10
    //test
  }
});

export default styles;
