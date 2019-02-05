import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoryList from "../Components/CategoryList";
import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";
import Login from "../Components/Login";

import AppointmentList from "../Components/AppointmentList";

import Profile from "../Components/Profile";

import Account from "../Components/Account";

const Nav = createStackNavigator(
  {
    CategoryList: CategoryList,
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList,
    Login: Login,
    Profile: Profile,
    Account: Account,
    AppointmentList: AppointmentList
  },
  {
    initialRouteName: "Account"
  }
);

export default createAppContainer(Nav);
