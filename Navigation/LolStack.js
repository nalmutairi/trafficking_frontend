import { createStackNavigator } from "react-navigation";

import LolScreen from "../Components/Lol";

const LolStack = createStackNavigator(
  {
    Lol: LolScreen
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default LolStack;
