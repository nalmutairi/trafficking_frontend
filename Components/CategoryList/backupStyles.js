import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    // -------- iOS Exclusive -----------------
    shadowColor: "rgba(0,0,0, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    // ------------ End of iOS exclusive ------
    // ----- Android Exclusive ----------------
    elevation: 5,
    // --------- End of Android Exclusive -----
    width: Dimensions.get("window").width * 0.45,
    height: 150,
    backgroundColor: "white",
    borderWidth: 0,
    borderColor: "#A7A8B1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 0,
    marginLeft: 13.5,
    marginTop: 11,
    marginBottom: 10
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  itemTitle: {
    marginTop: 10
  }
  // button: {
  //   shadowColor: "rgba(0,0,0, .4)", // IOS
  //   shadowOffset: { height: 1, width: 1 }, // IOS
  //   shadowOpacity: 1, // IOS
  //   shadowRadius: 1, //IOS
  //   backgroundColor: "#fff",
  //   elevation: 2, // Android
  //   height: 50,
  //   width: 100,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   flexDirection: "row"
  // }
});

export default styles;
