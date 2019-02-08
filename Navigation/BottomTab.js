import React from "react";
import { Icon } from "native-base";

import { createAppContainer } from "react-navigation";

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import TouchableBounce from "react-native/Libraries/Components/Touchable/TouchableBounce";

import ProfileStack from "./ProfileStack";
import CategoryStack from "./CategoryStack";
import CompanyStack from "./CompanyStack";
import CartStack from "./CartStack";

const BottomTab = createMaterialBottomTabNavigator(
  {
    Category: { screen: CategoryStack },
    List: { screen: CompanyStack },
    Profile: { screen: ProfileStack },
    Cart: { screen: CartStack }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        let iconType;
        if (routeName === "Category") {
          iconName = "home";
        } else if (routeName === "List") {
          iconName = "list";
        } else if (routeName === "Profile") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName == "CartTab") {
          iconName = "cart";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
      // tabBarButtonComponent: TouchableBounce
    }),
    initialRouteName: "Category",
    shifting: true,
    activeTintColor: "white",
    inactiveTintColor: "rgba(255, 255, 255, 0.4)",
    barStyle: {
      backgroundColor: ""
    }
  }
);

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
