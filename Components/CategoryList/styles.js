import { StyleSheet, Dimensions } from "react-native";
import { black } from "ansi-colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: Dimensions.get("window").width * 0.5,
    height: 150,
    borderWidth: 1,
    borderColor: "silver",
    // backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
    marginLeft: 0
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  itemTitle: {
    marginTop: 10
  }
});

export default styles;
