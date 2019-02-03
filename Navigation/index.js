import { createStackNavigator } from "react-navigation";

import CategoryList from "../Components/CategoryList";
import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";
import Login from "../Components/Login";

import { createAppContainer } from "react-navigation";

const Nav = createStackNavigator(
  {
    CategoryList: CategoryList,
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList,
    Login: Login
  },
  {
    initialRouteName: "CategoryList"
  }
);

export default createAppContainer(Nav);
