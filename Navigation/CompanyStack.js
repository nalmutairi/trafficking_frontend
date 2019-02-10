import { createStackNavigator } from "react-navigation";

import { FluidNavigator, Transition } from "react-navigation-fluid-transitions";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";

// const CompanyStack = createStackNavigator(
const CompanyStack = FluidNavigator(
  {
    CompanyList: CompanyList,
    CompanyDetail: CompanyDetail
  },
  {
    initialRouteName: "CompanyList",
    navigationOptions: {
      tabBarColor: "#07B70A"
    }
  }
);

export default CompanyStack;
