import { createStackNavigator } from "react-navigation";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";
import DayList from "../Components/DayList";

import { createAppContainer } from "react-navigation";

const Nav = createStackNavigator(
  {
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail,
    DayList: DayList
  },
  {
    initialRoutename: "CompanyList"
  }
);

export default createAppContainer(Nav);
