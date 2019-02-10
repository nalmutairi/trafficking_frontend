import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  },
  item: {
    // -------- iOS Exclusive -----------------
    shadowColor: "rgba(0,0,0, .3)",
    shadowOffset: { height: 7, width: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
    // ------------ End of iOS exclusive ------
    // ----- Android Exclusive ----------------
    elevation: 7,
    // --------- End of Android Exclusive -----
    width: Dimensions.get("window").width * 0.4,
    height: 150,
    backgroundColor: "white",
    // borderStyle: "solid",
    borderRadius: 30,
    borderWidth: 0.3,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: "#A7A8B1",
    // opacity: 0.35,
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 0,
    // marginLeft: 13.5,
    // marginTop: 11,
    margin: 8
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  itemTitle: {
    marginTop: 10,
    textShadowColor: "rgba(0,0,0, .3)",
    textShadowRadius: 5,
    textShadowOffset: { height: 1, width: 1 }
  }
});

export default styles;
