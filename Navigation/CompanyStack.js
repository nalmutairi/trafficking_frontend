import { createStackNavigator } from "react-navigation";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";

const CompanyStack = createStackNavigator(
  {
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail
  },
  {
    initialRouteName: "CompanyList"
    // defaultNavigationOptions: {
    //   title: "welcome to the inn"
    // }
  }
);

export default CompanyStack;
