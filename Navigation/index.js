import { createStackNavigator } from "react-navigation";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";
import Login from "../Components/Login";

import { createAppContainer } from "react-navigation";

const Nav = createStackNavigator(
  {
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList,
    Login: Login
  },
  {
    initialRouteName: "CompanyList"
  }
);

export default createAppContainer(Nav);
