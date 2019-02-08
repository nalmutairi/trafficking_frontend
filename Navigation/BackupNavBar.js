import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";

import CategoryList from "../Components/CategoryList";
import CompanyList from "../Components/CompanyList";
import Login from "../Components/Login";

// import AppointmentList from "../Components/AppointmentList";

const BottomNavBar = createMaterialBottomTabNavigator(
  {
    CategoryList: { screen: CategoryList },
    CompanyList: { screen: CompanyList },
    Login: { screen: Login }

    // AppointmentList: { screen: AppointmentList }
  },
  {
    initialRouteName: "CategoryList",
    activeColor: "#f0edf6",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#694fad" }
  }
);

const NavBar = createAppContainer(BottomNavBar);
export default NavBar;
