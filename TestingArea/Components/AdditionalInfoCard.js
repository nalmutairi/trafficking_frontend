import React from "react";

import { View, StyleSheet } from "react-native";

import { ThinGrayLine, ThickDarkGrayLine } from "./Lines";

// Last Card (4th back)

export default ({ onPress }) => (
  <View
    style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: "row",

      backgroundColor: "#FFFFFF",
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: "#BDC2C9",
      borderLeftColor: "black",
      borderLeftWidth: 1,
      borderRightColor: "black",
      borderRightWidth: 1,
      borderBottomColor: "black",
      borderBottomWidth: 1
    }}
  >
    <View style={{ flex: 1 }}>
      <ThickDarkGrayLine width={100} />
      <ThinGrayLine width={80} onPress={onPress} />
    </View>

    <View style={{ flex: 1 }}>
      <ThickDarkGrayLine width={60} />
      <ThinGrayLine width={120} />
    </View>
  </View>
);
