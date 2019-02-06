import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../Components/Profile";
import React from "react";

import LoginScreen from "../Components/Login";
import { Icon } from "native-base";

import CompanyList from "../Components/CompanyList";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Login"
    // defaultNavigationOptions: {
    //   title: "welcome to the inn"
    // }
  }
);

export default ProfileStack;
