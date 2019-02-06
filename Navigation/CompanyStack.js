import { createStackNavigator } from "react-navigation";

import CompanyList from "../Components/CompanyList";
import CompanyDetail from "../Components/CompanyDetail";

const CompanyStack = createStackNavigator(
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
