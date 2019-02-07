import { createStackNavigator } from "react-navigation";

// import {
//   createFluidNavigator,
//   Transition
// } from "react-navigation-fluid-transitions";

// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoryList from "../Components/CategoryList";
import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";
import Login from "../Components/Login";

import AppointmentList from "../Components/AppointmentList";

import Profile from "../Components/Profile";

import { createAppContainer } from "react-navigation";

const Nav = createStackNavigator(
  // const Nav = createFluidNavigator(
  {
    CategoryList: CategoryList,
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList,
    Login: Login,

    AppointmentList: AppointmentList
  },
  {
    initialRouteName: "CategoryList"
  }
);

export default createAppContainer(Nav);

// const BottomNavBar = createMaterialBottomTabNavigator(
//   {
//     CategoryList: { screen: CategoryList },
//     CompanyList: { screen: CompanyList },
//     CompanyDetail: CompanyDetail,
//     DayList: DayList,
//     Login: { screen: Login },

//     AppointmentList: { screen: AppointmentList }
//   },
//   {
//     initialRouteName: "CategoryList",
//     activeColor: "#f0edf6",
//     inactiveColor: "#3e2465",
//     barStyle: { backgroundColor: "#694fad" }
//   }
// );

// const Nav = createAppContainer(BottomNavBar);
// export default Nav;
