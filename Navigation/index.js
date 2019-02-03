import { createStackNavigator } from "react-navigation";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";
import Login from "../Components/Login";
import Profile from "../Components/Profile";

import { createAppContainer } from "react-navigation";

const Nav = createStackNavigator(
  {
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList,
    Login: Login,
    Profile: Profile
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(Nav);
