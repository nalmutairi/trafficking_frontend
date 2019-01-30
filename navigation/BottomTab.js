import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import LolStack from "./LolStack";
import ProfileStack from "./ProfileStack";
import Profile from "../components/Profile";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    AnotherTab: Profile
    // LolTab: LolStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "AnotherTab") {
          iconName = "profile";
          iconType = "AntDesign";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
