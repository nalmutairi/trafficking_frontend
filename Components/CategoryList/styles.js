import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    width: Dimensions.get("window").width * 0.45,
    height: 150,
    // backgroundColor: "#E4EBF3",
    elevation: 2, // Android
    // width: 100,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
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
  },
  button: {
    shadowColor: "rgba(0,0,0, .4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: "#fff",
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
});

export default styles;
