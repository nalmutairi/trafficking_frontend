import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../Components/Profile";
import React from "react";

import LoginScreen from "../Components/Login";
import { Icon } from "native-base";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      tabBarColor: "#DD3C40"
    }
  }
);

export default ProfileStack;
