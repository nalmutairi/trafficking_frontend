import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";

import ProfileStack from "./ProfileStack";
import CategoryStack from "./CategoryStack";
import CompanyStack from "./CompanyStack";
import CartStack from "./CartStack";
const BottomTab = createBottomTabNavigator(
  {
    CategoryTab: CategoryStack,
    CompanyTab: CompanyStack,
    ProfileTab: ProfileStack,
    CartTab: CartStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "CategoryTab") {
          iconName = "home";
        } else if (routeName === "CompanyTab") {
          iconName = "list";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName == "CartTab") {
          iconName = "cart";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      },
      tabBarButtonComponent: TouchableBounce
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
