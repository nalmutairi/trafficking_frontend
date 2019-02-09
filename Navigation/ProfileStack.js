import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../Components/Profile";
import React from "react";

import LoginScreen from "../Components/Login";
import { Icon } from "native-base";
import Account from "../Components/Account";
import CompanyList from "../Components/CompanyList";
import AddressForm from "../Components/AddressForm";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    AddressForm: AddressForm,
    Login: Account
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      tabBarColor: "#DD3C40"
    }
  }
);

export default ProfileStack;
