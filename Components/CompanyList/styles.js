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
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // ------------ End of iOS exclusive ------
    // ----- Android Exclusive ----------------
    elevation: 5,
    // --------- End of Android Exclusive -----
    width: Dimensions.get("window").width * 0.92,
    height: 220,
    // backgroundColor: "white",
    // borderStyle: "solid",
    borderRadius: 20,
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
    marginLeft: 15,
    marginTop: 15
    // marginBottom: 10
    // margin: 12
  },
  itemIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  },
  itemTitle: {
    marginTop: 100,
    marginLeft: 15,
    textAlign: "auto",
    alignSelf: "flex-start",
    textShadowColor: "rgba(0,0,0, 1)",
    textShadowRadius: 10,
    textShadowOffset: { height: 1, width: 1 },
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    backgroundColor: "white"
  },
  itemSlogan: {
    marginTop: 10,
    marginLeft: 10,
    textShadowColor: "rgba(0,0,0, .8)",
    textShadowRadius: 3,
    textShadowOffset: { height: 1, width: 1 },
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "orange",
    backgroundColor: "white"
  },
  textAlignment: {
    textAlign: "auto",
    alignSelf: "flex-start",
    flex: 1
  }
});

export default styles;
